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
    md5(getContent())
}

function sha1Page() {
    sha1(getContent())
}

function sha256Page() {
    sha1(getContent())
}

function sha512Page() {
    sha1(getContent())
}
