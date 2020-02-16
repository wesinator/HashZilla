function getContent() {
    var contentType = document.contentType;

    /* if plain text document, can take
        document.documentElement.textContent
        document.documentElement.innerText
    */
    if (contentType == "text/plain")
        content = document.documentElement.textContent;

    /* else, need to rerequest the page and take hash of response content
    content may have changed on dynamic pages obviously
    */
    else {
        url = document.URL;

        content = "";
    }

    return content;
}

function md5Page() {
    hash = md5(getContent());
    displayHash(hash)
}

function sha1Page() {
    hash = sha1(getContent());
    displayHash(hash)
}

function sha256Page() {
    hash = sha1(getContent());
    displayHash(hash)
}

function sha512Page() {
    hash = sha1(getContent());
    displayHash(hash)
}

function displayHash(hash) {
    alert(hash);
}
