(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{395:function(e,t,s){"use strict";s.r(t);var n=s(44),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"convenience-ipld-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convenience-ipld-types"}},[e._v("#")]),e._v(" Convenience IPLD types")]),e._v(" "),s("p",[e._v("The types described below are not referenced directly from within the canonical Ethereum merkle tree.\nInstead, these types can be constructed and verified from underlying canonical Ethereum IPLD structures using the algorithms described here.\nThese types are introduced to improve the convenience and performance of accessing and working with the Ethereum objects for certain purposes.")]),e._v(" "),s("h2",{attrs:{id:"transaction-trace-ipld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-trace-ipld"}},[e._v("#")]),e._v(" Transaction Trace IPLD")]),e._v(" "),s("p",[e._v("Transaction traces contain the EVM context, input, and output for each individual OPCODE operation performed during the application of a transaction on a certain state.\nThese objects can be generated or verified by applying the referenced transactions on top of the referenced state.")]),e._v(" "),s("ul",[s("li",[e._v("The IPLD block is the RLP encoded object")]),e._v(" "),s("li",[e._v("CID links to "),s("code",[e._v("TxTrace")]),e._v(" use a KECCAK_256 multihash of the RLP encoded object and the EthTxTrace codec (tbd).")])]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# TxTrace contains the EVM context, input, and output for each OPCODE in a transaction that was applied to a specific state")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TxTrace")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List of CIDs linking to the transactions that were used to generate this trace by applying them onto the state referenced below")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If this trace was produced by the first transaction in a block then this list will contain only that one transaction")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# and thistrace was produced by applying it directly to the referenced state")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Otherwise, only the last transaction in the list is the one directly responsible for producing this trace whereas the")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# proceeding ones were sequentially applied to the referenced state to generate the intermediate state that the final,")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# trace-producing transaction, was applied on top of")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is analogous to the Transactions IPLD defined below, but only in the case of a trace produced by the last")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# transaction in a block will the list be same as a complete Transaction IPLD")]),e._v("\n   TxCIDs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("Transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CID link to the root node of the state trie that the above transaction set was applied on top of to produce this trace")]),e._v("\n   StateRootCID "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("StateTrieNode\n   Result Bytes\n   Frames "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   Gas Uint\n   Failed Bool\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Frame represents the EVM context, input, and output for a specific OPCODE during a transaction trace")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Frame")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Op     OpCode\n    From   Address\n    To     Address\n    Input  Bytes\n    Output Bytes\n    Gas    Uint\n    Cost   Uint\n    Value  BigInt\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Provided a "),s("code",[e._v("Header")]),e._v(" multihash/CID and a transaction index, we can generate a "),s("code",[e._v("TxTrace")]),e._v(" by")]),e._v(" "),s("ol",[s("li",[e._v("Fetching and decoding the "),s("code",[e._v("Header")]),e._v(" IPLD.")]),e._v(" "),s("li",[e._v("Stepping down into the transaction trie referenced in the header.\n"),s("ol",[s("li",[e._v("Collecting the transaction at the provided index and all transactions with indexes lower than the provided index.")]),e._v(" "),s("li",[e._v("KECCAK_256 hashing each transaction.")]),e._v(" "),s("li",[e._v("Convert hashes to CIDs using the KECCAK_256 multihash and EthTx codec.")]),e._v(" "),s("li",[e._v("Order these CIDs in a list by transaction index.")])])]),e._v(" "),s("li",[e._v("Collect the "),s("code",[e._v("StateRootCID")]),e._v(" from within this "),s("code",[e._v("Header")]),e._v(".")]),e._v(" "),s("li",[e._v("Use "),s("a",{attrs:{href:"https://github.com/vulcanize/ipfs-ethdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipfs-ethdb"),s("OutboundLink")],1),e._v(" with state root linked in the "),s("code",[e._v("Header")]),e._v(" to instantiate an EVM on top\nof the state of this block.")]),e._v(" "),s("li",[e._v("Apply each of the transactions on top of this state using the ipfs-ethdb based EVM.")]),e._v(" "),s("li",[e._v("For the final transaction applied, collect the trace output from the EVM.")]),e._v(" "),s("li",[e._v("Assemble the trace output, the "),s("code",[e._v("Transaction")]),e._v(" CIDs, and the root "),s("code",[e._v("StateTrieNode")]),e._v(" CID into the "),s("code",[e._v("TxTrace")]),e._v(" object.")])]),e._v(" "),s("h2",{attrs:{id:"block-ipld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-ipld"}},[e._v("#")]),e._v(" Block IPLD")]),e._v(" "),s("p",[s("code",[e._v("Block")]),e._v(" IPLD represents an entire block (header + body) in the Ethereum blockchain, it contains direct content hash references to\nthe sets of transactions and receipts for that block in order to avoid the need to traverse the transaction\nand receipt tries to collect these sets (as is required when starting from a canonical "),s("code",[e._v("Header")]),e._v(" block).\nThese objects can be generated or verified by following the links within the contained "),s("code",[e._v("Header")]),e._v(" to collect the "),s("code",[e._v("Transactions")]),e._v(" and "),s("code",[e._v("Receipts")]),e._v("\nfrom the referenced transaction and receipt tries.")]),e._v(" "),s("ul",[s("li",[e._v("The IPLD block is a CBOR serialization of the object")]),e._v(" "),s("li",[e._v("CID links to "),s("code",[e._v("Block")]),e._v(" use a KECCAK_256 multihash of the CBOR serialized object and the DagCbor codec (0x71).")])]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Block represents an entire block in the Ethereum blockchain.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Block")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CID link to the header at this block")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This CID is composed of the KECCAK_256 multihash of the RLP encoded header and the EthHeader codec (0x90)")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Note that the header contains references to the uncles and tx, receipt, and state tries at this height")]),e._v("\n   Header       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("Header\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CID link to the list of hashes for each of the transactions at this block")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This CID is composed of the KECCAK_256 multihash of the RLP encoded list of transaction hashes and the EthTxHashList codec (tbd)")]),e._v("\n   Transactions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("TransactionHashes\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CID link to the list of hashes for each of the receipts at this block")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This CID is composed of the KECCAK_256 multihash of the RLP encoded list of receipt hashes and the EthTxReceiptHashList codec (tbd)")]),e._v("\n   Receipts     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("ReceiptHashes\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Provided a "),s("code",[e._v("Header")]),e._v(" multihash/CID, we can generate a "),s("code",[e._v("Block")]),e._v(" IPLD by")]),e._v(" "),s("ol",[s("li",[e._v("Fetching and decoding the "),s("code",[e._v("Header")]),e._v(" IPLD.")]),e._v(" "),s("li",[e._v("Stepping down into the transaction trie referenced in the header.\n"),s("ol",[s("li",[e._v("Collecting each transaction stored at the leaf nodes in the trie.")]),e._v(" "),s("li",[e._v("KECCAK_256 hashing each transaction.")]),e._v(" "),s("li",[e._v("Order these hashes in a list by transaction index.")]),e._v(" "),s("li",[e._v("KECCAK_256 hash the RLP encoded list.")]),e._v(" "),s("li",[e._v("Convert to CID using the KECCAK_256 multihash and EthTxHashList codec.")])])]),e._v(" "),s("li",[e._v("Stepping down into the receipt trie referenced in the header.\n"),s("ol",[s("li",[e._v("Collecting each receipt stored at the leaf nodes in the trie.")]),e._v(" "),s("li",[e._v("KECCAK_256 hashing each receipt.")]),e._v(" "),s("li",[e._v("Order these hashes in a list by receipt index.")]),e._v(" "),s("li",[e._v("KECCAK_256 hash the RLP encoded list.")]),e._v(" "),s("li",[e._v("Convert to CID using the KECCAK_256 multihash and EthTxReceiptHashList codec.")])])]),e._v(" "),s("li",[e._v("Assemble the "),s("code",[e._v("Header")]),e._v(" CID, "),s("code",[e._v("Transactions")]),e._v(" CID, and "),s("code",[e._v("Receipts")]),e._v(" CID into the "),s("code",[e._v("Block")]),e._v(" object.")])]),e._v(" "),s("h2",{attrs:{id:"transactionhashes-ipld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactionhashes-ipld"}},[e._v("#")]),e._v(" TransactionHashes IPLD")]),e._v(" "),s("p",[e._v("This is the IPLD schema for the ordered list of all transactions for a given block.")]),e._v(" "),s("ul",[s("li",[e._v("The IPLD block is the RLP encoded list of transaction hashes")]),e._v(" "),s("li",[e._v("CID links to "),s("code",[e._v("Transactions")]),e._v(" use a KECCAK_256 multihash of the RLP encoded list of transaction hashes and the EthTxHashList codec (tbd).")]),e._v(" "),s("li",[s("code",[e._v("Transactions")]),e._v(" IPLDs are not referenced from any canonical Ethereum object, but are instead linked to from the above "),s("code",[e._v("Block")]),e._v(" and "),s("code",[e._v("TxTrace")]),e._v(" objects.")])]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Transactions contains a list of CID that reference all of the Ethereum transactions at this block")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# These CIDs are composed from the KECCAK_256 multihash of the referenced transaction and the EthTx codec (0x93)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Transactions")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("Transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("h2",{attrs:{id:"receipthashes-ipld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receipthashes-ipld"}},[e._v("#")]),e._v(" ReceiptHashes IPLD")]),e._v(" "),s("p",[e._v("This is the IPLD schema for the ordered list of all receipts for a given block.")]),e._v(" "),s("ul",[s("li",[e._v("The IPLD block is the RLP encoded list of receipt hashes")]),e._v(" "),s("li",[e._v("CID links to "),s("code",[e._v("Receipts")]),e._v(" use a KECCAK_256 multihash of the RLP encoded list of receipt hashes and the EthTxReceiptHashList codec (tbd)")]),e._v(" "),s("li",[s("code",[e._v("Receipts")]),e._v(" IPLDs are not referenced directly from any canonical Ethereum object, but are instead linked to from the above "),s("code",[e._v("Block")]),e._v(" ADL object.")])]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Receipts contains a list of CID that reference all of the receipts at this block")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# These CIDs are composed from the KECCAK_256 multihash of the referenced receipt and the EthTxReceipt codec (0x95)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Receipts")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("Receipt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("h2",{attrs:{id:"genesis-ipld"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genesis-ipld"}},[e._v("#")]),e._v(" Genesis IPLD")]),e._v(" "),s("p",[e._v("This is the IPLD schema for the configuration settings and genesis allocations to produce a specific genesis block and begin an Ethereum\nblockchain. It also includes a reference to the genesis block "),s("code",[e._v("Header")]),e._v(" it produces. This is a single IPLD block at the base of an entire Ethereum chain.")]),e._v(" "),s("ul",[s("li",[e._v("The IPLD block is a CBOR serialization of the object")]),e._v(" "),s("li",[e._v("CID links to "),s("code",[e._v("GenesisInfo")]),e._v(" use a KECCAK_256 multihash of the CBOR serialized object and the DagCbor codec (0x71).")])]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# GenesisInfo specifies the header fields, state of a genesis block, and hard fork switch-over blocks through the chain configuration.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NOTE: we need a new multicodec type for the Genesis object")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GenesisInfo")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CID link to the genesis header this genesis info produces")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This CID is composed of the KECCAK_256 multihash of the linked RLP encoded header and the EthHeader codec (0x90)")]),e._v("\n   GensisHeader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("&")]),e._v("Header\n   \n   Config     ChainConfig\n   Nonce      Uint\n   Timestamp  Uint\n   ExtraData  Bytes\n   GasLimit   Unit\n   Difficulty BigInt\n   Mixhash    Hash\n   Coinbase   Address\n   Alloc      GenesisAlloc\n   \n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# These fields are used for consensus tests. Please don't use them")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# in actual genesis blocks.")]),e._v("\n   Number     Uint\n   GasUsed    Uint\n   ParentHash Hash\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# GenesisAlloc is a map that specifies the initial state that is part of the genesis block.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GenesisAlloc")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("GenesisAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# GenesisAccount is an account in the state of the genesis block.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GenesisAccount")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Code       Bytes\n    Storage    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    Balance    BigInt\n    Nonce      Uint\n    PrivateKey Bytes\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ChainConfig is the core config which determines the blockchain settings.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ChainConfig is stored in the database on a per block basis.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This means that any network, identified by its genesis block, can have its own set of configuration options.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The ChainConfig referenced in GenesisInfo is used to produce the genesis block but is not necessarily used for later blocks down the chain.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ChainConfig")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ChainID BigInt\n    HomesteadBlock BigInt\n    DAOForkBlock   BigInt\n    DAOForkSupport Bool\n    EIP150Block BigInt\n    EIP150Hash  Hash\n    EIP155Block BigInt\n    EIP158Block BigInt\n    ByzantiumBlock      BigInt\n    ConstantinopleBlock BigInt\n    PetersburgBlock     BigInt\n    IstanbulBlock       BigInt\n    MuirGlacierBlock    BigInt\n    YoloV2Block BigInt\n    EWASMBlock  BigInt\n\t\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Various consensus engines")]),e._v("\n    Ethash EthashConfig\n    Clique CliqueConfig\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# EthashConfig is the consensus engine config for proof-of-work based sealing.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# At this time there are no configuration options for the Ethash engine.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("EthashConfig")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" representation tuple\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CliqueConfig is the consensus engine config for proof-of-authority based sealing.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("CliqueConfig")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Period Uint\n    Epoch Uint\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);