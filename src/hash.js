/*
First, check content type of page DOM
this will tell us if we can accurately hash page directly,
or need network request for accuracy
rules found here - https://gist.github.com/wesinator/6461efb06693f69efd8faaddc862767f
*/

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

// hashing functions use https://github.com/nf404/crypto-api/tree/master/src
import Md5 from "crypto-api/src/hasher/md5";
import Sha1 from "crypto-api/src/hasher/sha1";
import Sha256 from "crypto-api/src/hasher/sha256";
import Sha512 from "crypto-api/src/hasher/sha512";
import {toHex} from "crypto-api/src/encoder/hex";
import {fromUtf} from "crypto-api/src/encoder/utf";

// https://github.com/nf404/crypto-api#es6-recommended

function md5(contents) {
    let hasher = new Md5();
    hasher.update(fromUtf(contents));
    return toHex(hasher.finalize());
}

function sha1(contents) {
    let hasher = new Sha1();
    hasher.update(fromUtf(contents));
    return toHex(hasher.finalize());
}

function sha256(contents) {
    let hasher = new Sha256();
    hasher.update(fromUtf(contents));
    return toHex(hasher.finalize());
}

function sha512(contents) {
    let hasher = new Sha512();
    hasher.update(fromUtf(contents));
    return toHex(hasher.finalize());
}
