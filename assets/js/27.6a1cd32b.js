(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{386:function(e,t,a){"use strict";a.r(t);var i=a(42),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"specification-ipld-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification-ipld-data-model"}},[e._v("#")]),e._v(" Specification: IPLD Data Model")]),e._v(" "),a("p",[a("strong",[e._v("Status: Descriptive - Draft")])]),e._v(" "),a("p",[e._v("The IPLD Data Model is a core part of the IPLD specification,\nwhich describes what data is representable in IPLD --\nfor example, booleans, integers, textual strings, maps and lists, etc.")]),e._v(" "),a("p",[e._v("While the Data Model describes these representations in the abstract,\n"),a("a",{attrs:{href:"../block-layer/codecs"}},[e._v("Codecs")]),e._v(" specify exactly how these data are transcribed\ninto serialized bytes. (Another component of the IPLD specifications,\n"),a("a",{attrs:{href:"../schemas"}},[e._v("Schemas")]),e._v(", provide additional optional tooling on top of the Data\nModel which can further refine, describe, and constrain the range of acceptable\ndata values.)")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("There is not "),a("strong",[e._v("one")]),e._v(" block format but "),a("strong",[e._v("many")]),e._v(" block formats widely used today in content\naddressed data structures. We assume that we'll see more of these block formats in the\nfuture and not less. It is quite clear then that a reasonable and more future proof approach\nto using these data structures is to be block format agnostic.")]),e._v(" "),a("p",[e._v("The data model defines a common respresentation of basic types that "),a("strong",[e._v("are easily representable\nby common programming languages.")]),e._v(' This provides the foundation for block format agnostic tools\nto be built using familiar native types in a programmer\'s preferred language. As such, there\nis an element of "lowest common denominator" to the IPLD Data Model in that it cannot support\nsome advanced features (like non-string keys for Maps) because support for such a feature\nis not common enough among programming languages.')]),e._v(" "),a("p",[e._v("This does not mean that a block format could not support more advanced features than exist in the\ndata model, it just means that the common set of tools IPLD is building w/ its block format\nagnostic approach cannot be easily leveraged to use those features.")]),e._v(" "),a("h2",{attrs:{id:"kinds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kinds"}},[e._v("#")]),e._v(" Kinds")]),e._v(" "),a("p",[e._v("The following is the list of essential "),a("em",[e._v("kinds")]),e._v(" (or more formally, "),a("em",[e._v("representation kinds")]),e._v(")\nof data representable in the IPLD Data Model:")]),e._v(" "),a("ul",[a("li",[e._v("Null")]),e._v(" "),a("li",[e._v("Boolean")]),e._v(" "),a("li",[e._v("Integer")]),e._v(" "),a("li",[e._v("Float")]),e._v(" "),a("li",[e._v("String")]),e._v(" "),a("li",[e._v("Bytes")]),e._v(" "),a("li",[e._v("List")]),e._v(" "),a("li",[e._v("Map")]),e._v(" "),a("li",[e._v("Link")])]),e._v(" "),a("p",[e._v('(Note that we use the term "'),a("em",[e._v("kinds")]),e._v('" here to disambiguate this from "'),a("em",[e._v("types")]),e._v("\",\nwhich is a term we'll use at the "),a("a",{attrs:{href:"../schemas"}},[e._v("Schemas")]),e._v(" level.)")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("recursive kinds")]),e._v(" are:")]),e._v(" "),a("ul",[a("li",[e._v("List")]),e._v(" "),a("li",[e._v("Map")])]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("scalar kinds")]),e._v(" (the complement of recursive) are:")]),e._v(" "),a("ul",[a("li",[e._v("Null")]),e._v(" "),a("li",[e._v("Boolean")]),e._v(" "),a("li",[e._v("Integer")]),e._v(" "),a("li",[e._v("Float")]),e._v(" "),a("li",[e._v("String")]),e._v(" "),a("li",[e._v("Bytes")]),e._v(" "),a("li",[e._v("Link")])]),e._v(" "),a("p",[e._v("(Note that "),a("a",{attrs:{href:"../schemas"}},[e._v("Schemas")]),e._v(' introduce a few more kinds -- when clarification is necessary,\nthese Data Model kinds can be called the "'),a("em",[e._v("representation kinds")]),e._v('",\nwhile the additional kinds introduced in the Schema layer are "'),a("em",[e._v("perceived kinds")]),e._v('".)')]),e._v(" "),a("h3",{attrs:{id:"kinds-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kinds-reference"}},[e._v("#")]),e._v(" Kinds Reference")]),e._v(" "),a("p",[e._v("Each of the following sections provides details about each of the kinds\nintroduced in the summary table above.")]),e._v(" "),a("h4",{attrs:{id:"null-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-kind"}},[e._v("#")]),e._v(" Null kind")]),e._v(" "),a("p",[e._v("Null is a scalar kind.  Its cardinality is one -- the only value is 'null'.")]),e._v(" "),a("h4",{attrs:{id:"boolean-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-kind"}},[e._v("#")]),e._v(" Boolean kind")]),e._v(" "),a("p",[e._v("Boolean is a scalar kind.  Its cardinality is two -- either the value 'true' or the value 'false'.")]),e._v(" "),a("h4",{attrs:{id:"integer-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integer-kind"}},[e._v("#")]),e._v(" Integer kind")]),e._v(" "),a("p",[e._v("Integer is a scalar kind and refers to whole numbers without a fractional\ncomponent.")]),e._v(" "),a("p",[e._v("It is important to consider codec and language limitations that may be imposed\non the serialization of integers from the IPLD Data Model. For example:")]),e._v(" "),a("ul",[a("li",[e._v("Some codecs, such as DAG-CBOR, will assume that integers must be within the\n64-bit signed range and reject anything larger.")]),e._v(" "),a("li",[e._v("IPLD libraries, such as go-ipld-prime, limit their in-memory representation\nof the integer kind to the signed 64-bit range.")]),e._v(" "),a("li",[e._v("JavaScript has difficulties safely handling and representing integers outside\nof the 53-bit unsigned range and differentiating between integers and floats\nwhere there is no fractional component.")])]),e._v(" "),a("h4",{attrs:{id:"float-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float-kind"}},[e._v("#")]),e._v(" Float kind")]),e._v(" "),a("p",[e._v("Float is a scalar kind and refers to a number with a fractional component,\nrepresented with a decimal point. This may also include numbers where the\nfractional component is zero (although the distinction between these numbers\nand integers is blurred in some cases—specifically the JavaScript memory model).")]),e._v(" "),a("p",[e._v('There is not a strict 1:1 mapping between the Float kind and any particular\nspecified memory layout. Even though IEEE 754 is the most common memory and\nbinary format for expressing floating point values, the IPLD Data Model does\nnot treat this format as the definition of "Float". However, for practical\npurposes, the IPLD Float kind will be implemented using IEEE 754 primitives and\nbyte layout in most languages and codecs due to its ubiquity. Parts of the IEEE\n754 specification that go beyond the representation of simple floating-point\nnumbers are not included in the IPLD Data Model. This includes the special\nvalues '),a("code",[e._v("NaN")]),e._v(", "),a("code",[e._v("Infinity")]),e._v(" and "),a("code",[e._v("-Infinity")]),e._v(", which are commonly available where\nIEEE 754 is supported ("),a("code",[e._v("NaN")]),e._v(" in particular introduces considerable variability\nin byte representations). These should not be supported by IPLD tooling.")]),e._v(" "),a("p",[e._v("While Float is a formal kind in the IPLD Data Model, "),a("strong",[e._v("it is recommended that\nFloat values be avoided when developing systems on IPLD")]),e._v(" (and\ncontent-addressable systems in general) due to:")]),e._v(" "),a("ul",[a("li",[e._v("The broad scope for introducing variability in byte representations.")]),e._v(" "),a("li",[e._v('The ambiguity introduced in some languages that may cause round-trip\ndiscrepancies; specifically JavaScript which does not clearly disambiguate\nbetween "float" and "integer" in its memory model.\nThe imprecise nature of representing the range of possible fractional numbers\n(infinite) in a fixed number of bits means that floating point operations\ntypically involve a margin of tolerance (i.e. strict equality is rarely a\ncorrect way to compare floating point numbers generated by different systems).\nContent-addressing works best where the content being addressed has a\nstable meaning for the address it produces. Alternative methods for\nrepresenting this meaning, or for encoding fractional numbers with greater\nprecision and less variability should be considered where possible.')])]),e._v(" "),a("p",[e._v("Some alternatives for representing floating point numbers include:")]),e._v(" "),a("ul",[a("li",[e._v("Integers that are divided by a fixed number (e.g. represent cents rather\nthan dollars and cents and divide by 100 where necessary).")]),e._v(" "),a("li",[e._v("Pairs of integers representing the parts of a floating point, e.g\nsignificand & exponent.")]),e._v(" "),a("li",[e._v("A byte array backed by a programmatic construct with necessary accuracy,\ne.g. Go's "),a("code",[e._v("big.Float")]),e._v(".")]),e._v(" "),a("li",[e._v("A string form of the value with a fixed number of decimal places.")])]),e._v(" "),a("h4",{attrs:{id:"string-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-kind"}},[e._v("#")]),e._v(" String kind")]),e._v(" "),a("p",[e._v("Strings do not have any guarantees or requirements with regard to encoding.")]),e._v(" "),a("p",[e._v("All the hazards you typically find among programming languages and libraries working with binary\nserialization of strings apply to strings in the IPLD data model. IPLD's data model is conceptual,\nit takes the world as it is, and the world of strings has widely known compatibility issues.")]),e._v(" "),a("ul",[a("li",[e._v("Some languages/libraries guarantee a string encoding (typically UTF8), some do not.")]),e._v(" "),a("li",[e._v("Some languages/libraries can handle arbitrary byte data in strings, some do not.")])]),e._v(" "),a("p",[e._v("While some codec specifications will define a required encoding it should be noted that in practice\nmany codec implementations leave this kind of validation and sanitizaton up to the consumer (application\ncode) and it is typical to find arbitrary byte data in strings even in codecs that explicitely forbid it.")]),e._v(" "),a("p",[e._v("Applications "),a("strong",[e._v("SHOULD")]),e._v(" only encode UTF8 data into string values and use byte values when they need\narbitrary bytes, but IPLD libraries may not provide these guarantees and rely on the application, or often the\nprogramming language itself, to do so instead.")]),e._v(" "),a("p",[e._v("Applications that only serialize valid UTF8 in string values will have fewer compatibility\nissues than applications that do not.")]),e._v(" "),a("p",[e._v("Codec implementations that can de-serialization and roundtrip\narbitrary byte data in strings will see fewer bug reports from people working with data produced by\napplications that serialize arbitrary byte data into strings.")]),e._v(" "),a("h4",{attrs:{id:"bytes-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bytes-kind"}},[e._v("#")]),e._v(" Bytes kind")]),e._v(" "),a("p",[e._v("Bytes is a scalar kind.  Its cardinality is infinite -- byte sequences do not have a length limit.")]),e._v(" "),a("p",[e._v("Bytes are distinct from strings in that they are not considered to have any character encoding nor\ngenerally expected to be printable as human-readable text.\nIn order to print byte sequences as text, additional effort such as Base64 encoding may be required.")]),e._v(" "),a("h4",{attrs:{id:"list-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-kind"}},[e._v("#")]),e._v(" List kind")]),e._v(" "),a("p",[e._v("List is a recursive kind.")]),e._v(" "),a("p",[e._v("Values contained in lists can be accessed by their ordinal offset in the list.")]),e._v(" "),a("h4",{attrs:{id:"map-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-kind"}},[e._v("#")]),e._v(" Map kind")]),e._v(" "),a("p",[e._v("Map is a recursive kind.")]),e._v(" "),a("p",[e._v('Values in maps are accessed by their "key".  Maps can also be iterated over,\nyielding key+value pairs.')]),e._v(" "),a("h4",{attrs:{id:"link-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-kind"}},[e._v("#")]),e._v(" Link kind")]),e._v(" "),a("p",[e._v("A link represents a link to another IPLD Block. The link reference\nis a "),a("RouterLink",{attrs:{to:"/data-model-layer/CID.html"}},[a("code",[e._v("CID")])]),e._v(".")],1),e._v(" "),a("p",[e._v('Link is a scalar kind -- however, when "loaded", may become another kind, either scalar or recursive!')]),e._v(" "),a("h3",{attrs:{id:"kinds-implementation-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kinds-implementation-references"}},[e._v("#")]),e._v(" Kinds Implementation References")]),e._v(" "),a("ul",[a("li",[e._v("Kinds in Go: https://github.com/ipld/go-ipld-prime/blob/master/kind.go")])])])}),[],!1,null,null,null);t.default=n.exports}}]);