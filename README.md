# HashZilla
Firefox extension that provides a context menu to hash selected page text in the browser.

Supports MD5, SHA - using [crypto-api](https://github.com/nf404/crypto-api)

### Download
[![FF Version](https://img.shields.io/amo/v/hashzilla.svg)](https://addons.mozilla.org/addon/hashzilla/)

#### Supported actions
 - Calculate hashes of selected text strings in a page

#### Future work

 - Calculate hashes of plaintext and other files loaded in browser

#### Limitations
 - Non-text (`text/plain`) files have to be reloaded (re-requested) to get the accurate hash of original content
  - This means that dynamic pages will be reloaded and may have a different hash

  See [this page](retrieving_page_content_dom.md) for more info on why this limitation exists.


#### Privacy policy

This extension doesn't collect any information whatsoever, it runs totally locally.

You can read the code.

I don't care about collecting your data.

----

Generated using https://webextensions.tech/
