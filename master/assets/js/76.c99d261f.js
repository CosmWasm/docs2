(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{675:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cw20-escrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cw20-escrow"}},[e._v("#")]),e._v(" CW20 Escrow")]),e._v(" "),a("p",[e._v("cw20-escrow source code: "),a("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-escrow"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is an escrow meta-contract that allows multiple users to\ncreate independent escrows. Each escrow has a sender, recipient,\nand arbiter. It also has a unique id (for future calls to reference it)\nand an optional timeout.")]),e._v(" "),a("p",[e._v("The basic function is the sender creates an escrow with funds.\nThe arbiter may at any time decide to release the funds to either\nthe intended recipient or the original sender (but no one else),\nand if it passes with optional timeout, anyone can refund the locked\ntokens to the original sender.")]),e._v(" "),a("p",[e._v('We also add a function called "top_up", which allows anyone to add more\nfunds to the contract at any time.')]),e._v(" "),a("h2",{attrs:{id:"token-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-types"}},[e._v("#")]),e._v(" Token types")]),e._v(" "),a("p",[e._v('This contract is meant not just to be functional, but also to work as a simple\nexample of an CW20 "Receiver". And demonstrate how the same calls can be fed\nnative tokens (via typical '),a("code",[e._v("HandleMsg")]),e._v(" route), or cw20 tokens (via "),a("code",[e._v("Receiver")]),e._v(" interface).")]),e._v(" "),a("p",[e._v("Both "),a("code",[e._v("create")]),e._v(" and "),a("code",[e._v("top_up")]),e._v(" can be called directly (with a payload of native tokens),\nor from a cw20 contract using the "),a("RouterLink",{attrs:{to:"/cw-plus/cw20/01-spec.html#receiver"}},[e._v("Receiver Interface")]),e._v(".\nThis means we can load the escrow with any number of native or cw20 tokens (or a mix),\nallow of which get released when the arbiter decides.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);