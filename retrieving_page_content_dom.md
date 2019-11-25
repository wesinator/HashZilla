#### text file 
(appears to work on rendered plaintext, does not work on json response type (e.g. https://api.github.com) - browser JSON rendering controls get included in text).

i.e. `document.contentType == "text/plain"` :

 - `document.documentElement.textContent`
 - `document.documentElement.innerText`

#### html 
(full html but not hash equivalent, changes case "!DOCTYPE"): 
 - `new XMLSerializer().serializeToString(document)`

##### References:
 - https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string
