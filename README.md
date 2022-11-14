# HashZilla
Firefox extension that provides a context menu to take the hash (MD5, SHA) of selected text in the browser.

Supports MD5, SHA; using [crypto-api](https://github.com/nf404/crypto-api)

#### Download
[![FF Version](https://img.shields.io/amo/v/hashzilla.svg)](https://addons.mozilla.org/addon/hashzilla/)

#### _Caveat emptor_
  - Hashes of selected multi-line text will differ between Windows and macOS/Linux hosts, because of text line-ending encoding. This is not a bug _per se_, something to be aware of.
  - Doesn't work on `raw.githubusercontent.com` page text. ([Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1411641))

#### Privacy policy

This extension doesn't collect any information whatsoever, it runs totally locally.

You can read the code.

I don't care about collecting your data.

----

Generated using https://github.com/web-ext-labs/ui-tool

Thanks to https://github.com/mdn/webextensions-examples/blob/ec731d4ceee1df0ccdebd87ab9f95875f55eeee7/menu-demo/background.js
for steering me in the right direction.
