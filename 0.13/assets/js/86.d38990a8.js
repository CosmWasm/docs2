(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{685:function(t,e,n){"use strict";n.r(e);var o=n(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"cw721-basic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cw721-basic"}},[t._v("#")]),t._v(" Cw721 Basic")]),t._v(" "),n("p",[t._v("cw721-basic source code: "),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw721-base/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw721-base/README.md"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("This is a basic implementation of a cw721 NFT contract. It implements\nthe "),n("RouterLink",{attrs:{to:"/cw-plus/cw721/01-spec.html"}},[t._v("CW721 spec")]),t._v(" and is designed to\nbe deployed as is, or imported into other contracts to easily build\ncw721-compatible NFTs with custom logic.")],1),t._v(" "),n("p",[t._v("Implements:")]),t._v(" "),n("ul",[n("li",[t._v("[x] CW721 Base")]),t._v(" "),n("li",[t._v("[x] Metadata extension")]),t._v(" "),n("li",[t._v("[ ] Enumerable extension (AllTokens done, but not Tokens - requires "),n("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-plus/issues/81",target:"_blank",rel:"noopener noreferrer"}},[t._v("#81"),n("OutboundLink")],1),t._v(")")])]),t._v(" "),n("h2",{attrs:{id:"implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("HandleMsg")]),t._v(" and "),n("code",[t._v("QueryMsg")]),t._v(" implementations follow the "),n("RouterLink",{attrs:{to:"/cw-plus/cw721/01-spec.html"}},[t._v("CW721 spec")]),t._v(" and are described there.\nBeyond that, we make a few additions:")],1),t._v(" "),n("ul",[n("li",[n("code",[t._v("InitMsg")]),t._v(" takes name and symbol (for metadata), as well as a "),n("strong",[t._v("Minter")]),t._v(" address. This is a special address that has full\npower to mint new NFTs (but not modify existing ones)")]),t._v(" "),n("li",[n("code",[t._v("HandleMsg::Mint{token_id, owner, name, description, image}")]),t._v(" - creates a new token with given owner and metadata. It can only be called by\nthe Minter set in "),n("code",[t._v("init")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v("QueryMsg::Minter{}")]),t._v(" - returns the minter address for this contract.")])]),t._v(" "),n("p",[t._v("It requires all tokens to have defined metadata in the standard format (with no extensions). For generic NFTs this may\noften be enough.")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("Minter")]),t._v(" can either be an external actor (eg. web server, using PubKey) or another contract. If you just want to customize\nthe minting behavior but not other functionality, you could extend this contract (importing code and wiring it together)\nor just create a custom contract as the owner and use that contract to Mint.")]),t._v(" "),n("h2",{attrs:{id:"importing-this-contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#importing-this-contract"}},[t._v("#")]),t._v(" Importing this contract")]),t._v(" "),n("p",[t._v("You can also import much of the logic of this contract to build another\nCW721-compliant contract, such as tradable names, crypto kitties,\nor tokenized real estate.")]),t._v(" "),n("p",[t._v("Basically, you just need to write your handle function and import\n"),n("code",[t._v("cw721_base::contract::handle_transfer")]),t._v(", etc and dispatch to them.\nThis allows you to use custom "),n("code",[t._v("HandleMsg")]),t._v(" and "),n("code",[t._v("QueryMsg")]),t._v(" with your additional\ncalls, but then use the underlying implementation for the standard cw721\nmessages you want to support. The same with "),n("code",[t._v("QueryMsg")]),t._v(". You will most\nlikely want to write a custom, domain-specific "),n("code",[t._v("init")]),t._v(".")]),t._v(" "),n("p",[t._v("For now, you can look at "),n("RouterLink",{attrs:{to:"/cw-plus/cw20/06-cw20-staking-spec.html"}},[n("code",[t._v("cw20-staking")])]),t._v('\nfor an example of how to "inherit" cw20 functionality and combine it with custom logic.\nThe process is similar for cw721.')],1)])}),[],!1,null,null,null);e.default=a.exports}}]);