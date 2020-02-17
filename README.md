# HashZilla
Firefox extension to get hashes of text, pages and files directly in the browser (with some limitations).

Uses [crypto-api](https://github.com/nf404/crypto-api)

#### Supported actions
 - Calculate hashes of selected text strings in a page
 - Calculate hashes of plaintext and other files loaded in browser

#### Limitations
 - Non-text (`text/plain`) files have to be reloaded (re-requested) to get the accurate hash of original content
  - This means that dynamic pages will be reloaded and may have a different hash

  See [this page](retrieving_page_content_dom.md) for more info on why this limitation exists.


Generated using https://webextensions.tech/
