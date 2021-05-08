# Specification: DAG-JSON

**Status: Descriptive - Final**

DAG-JSON supports the full [IPLD Data Model](../../data-model-layer/data-model.md).

DAG-JSON uses the [JavaScript Object Notation (JSON)] data format, defined by [RFC 8259](https://tools.ietf.org/html/rfc8259).

## Format

The native JSON IPLD format is called DAG-JSON to disambiguate it from regular JSON. Most simple JSON objects are valid DAG-JSON. The primary differences are:

 * Bytes and Links are supported with special use of single-key (`"/"`) map.
 * In limited cases, maps with the key `"/"` other than those used to encode Bytes and Links, are disallowed.
 * Maps are sorted by key.

## Serialization

Codec implementors **MUST** do the following in order to ensure hashes consistently match for the same block data.

 - Sort object keys by their (UTF-8) encoded representation, i.e. with byte comparisons
 - Strip whitespace

This produces the most compact and consistent representation which will ensure that two codecs
producing the same data end up with matching block hashes.

## Supported Kinds

All [IPLD Data Model Kinds](../../data-model.md#kinds) except Bytes and Link are supported natively by JSON.

Bytes and Links use extensions specific to DAG-JSON. They are implemented as an map, where the single key is a slash (`"/"`) and the value contains the kind's data.

### Numbers

JSON only has a single number type. Many dynamically typed programming languages (e.g. Python, Ruby, PHP) distinguish between integers and floats when parsing JSON. JavaScript does not since all numbers are represented internally as IEEE 754 floats. A JSON number consisting of an optional leading sign (`-`) and only digits is parsed as integer, if it contains a decimal point, it's parsed as a float. DAG-JSON the same method is used to represent integers and floats.

Data Model floats that do not have a fractional component should be encoded without a decimal point, and will therefore not be distinguishable from an integer during round-trip.

Contrary to popular belief, JSON as a format supports Big Integers. It's only JavaScript itself that has trouble with them. This means JS implementations of DAG-JSON can't use the native JSON parser and serializer if integers bigger than `2^53 - 1` need to be supported.

`Infinity`, `NaN` and `-Infinity` are not natively supported by JSON and are not supported by the IPLD Data Model.

See further discussion on [Floats in the Data Model](../../data-model.md#float-kind), including a recommendation to avoid floats where possible when producing and consuming content addressed data.

### Bytes

The Bytes kind is represented as an object with `"bytes"` as key and a [Multibase](https://github.com/multiformats/multibase) Base64 encoded string as value. The Base64 encoding is the one described in [RFC 4648, section 4](https://tools.ietf.org/html/rfc4648#section-4) without padding, hence the Multibase prefix is `m`.


```javascript
{"/": { "bytes": String /* Multibase Base64 encoded binary */ }}
```

### Links

A Link kind is represented as a base encoded CID. CIDv0 and CIDv1 are encoded differently.

 - CIDv1 is represented as a Multibase Base32 encoded string. The Base32 encoding is the one described in [RFC 4648, section 6](https://tools.ietf.org/html/rfc4648#section-6) without padding, hence the Multibase prefix is `b`.
 - CIDv0 is represented in its only possible Base58 encoding. The Base58 encoding is the one described in [Base58 draft](https://tools.ietf.org/html/draft-msporny-base58).

```javascript
{"/": String /* Base58 encoded CIDv0 or Multibase Base32 encoded CIDv1 */}
```

### The Reserved Namespace

Maps with the first key of `"/"` are considered the **reserved namespace** in DAG-JSON as they are used to represent Bytes and Links. There are special rules that restrict certain data forms from being properly encoded in DAG-JSON. These rules allow for the clean representation of Bytes and Links as well as efficient operation of tokenizing decoders. A tokenizing decoder should not need to buffer and back-track more than 4 tokens upon detection of a map that is not properly encoding Links or Bytes.

Specifically, data with the following forms are strictly not valid DAG-JSON and should be rejected by encoders and decoders:

 * Maps with more than one key, where the first key is `"/"` and its value is a string. e.g. `{"/":"foo","bar":"baz"}`.
   - Where a key exists that sorts before `"/"`, the map is valid, e.g. `{"0bar":"baz","/":"foo"}`.
   - Where the value of the `"/"` entry is not a string, the map is valid, e.g. `{"/":true,"bar":"baz"}`
 * Maps where the first key is `"/"` and its value is a map with more than one key where the first key of the inner map is `"bytes"` whose value is a string. e.g. `{"/":{"bytes":"foo","bar":"baz"}}`.
   * Where a key exists in the inner map that sorts before `"bytes"`, the map is valid, e.g. `{"/":{"abar":"baz","bytes":"foo"}}`.
   * Where the value of the inner map's `"bytes"` entry is not a string, the map is valid, e.g. `{"/":{"bytes":true},"bar":"baz"}`.
 * Maps with more than one key, where the first key is `"/"` and its value is a map where the first key of the inner map is `"bytes"` whose value is a string. e.g. `{"/":{"bytes":"foo"},"bar":"baz"}`.
   - Where a key exists that sorts before `"/"`, the map is valid, e.g. `{"0bar":"baz","/":{"bytes":"foo"}}`.
   - Where the value of the `"bytes"` entry in the inner map is not a string, the map is valid, e.g. `{"/":{"bytes":true},"bar":"baz"}`

Further:

 * A map with the single key `"/"`, whose value is a string, must contain a valid CIDv0 base58 string or CIDv1 base32 string. Such a map whose string does not properly represent such a CID should should be rejected as invalid DAG-CBOR.
 * A map with the single key `"/"`, whose value is a map with the single key `"bytes"`, whose value is a string, must contain a valid multibase base64 encoded byte array. Such a construction whose string does not properly represent a multibase base64 encoded byte array should be rejected as invalid DAG-CBOR.

There is no mechanism for escaping otherwise valid JSON data that takes these forms. For this reason, it is recommended that the `"/"` key should be avoided in Data Model maps where DAG-JSON may be used in order to avoid such conflicts.

## Implementations

### JavaScript

**[@ipld/dag-json](https://github.com/ipld/js-dag-cbor)**, for use with [multiformats] adheres to this specification.

The legacy **[ipld-dag-json](https://github.com/ipld/js-ipld-dag-cbor)** implementation adheres to this specification, with the following caveats:
 * The reserved namespace rules above are not strictly applied. Decoding maps with the forms of Bytes and Links but with additional entries in inner or outer maps will be successfuly decoded as Bytes or Links but the extraneous entries will be ignored.

### Go

**[go-ipld-prime]** adheres to this specification.
