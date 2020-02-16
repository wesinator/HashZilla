/*
First, check content type of page DOM
this will tell us if we can accurately hash page directly,
or need network request for accuracy
rules found here - https://gist.github.com/wesinator/6461efb06693f69efd8faaddc862767f
*/

/*// hashing functions use https://github.com/nf404/crypto-api/tree/master/src
import Md5 from "./crypto-api/src/hasher/md5";
import Sha1 from "./crypto-api/src/hasher/sha1";
import Sha256 from "./crypto-api/src/hasher/sha256";
import Sha512 from "./crypto-api/src/hasher/sha512";
import {toHex} from "./crypto-api/src/encoder/hex";
import {fromUtf} from "./crypto-api/src/encoder/utf";*/

// https://github.com/nf404/crypto-api#es6-recommended

/*export*/ function md5(contents) {
    //console.log("in md5")
    return CryptoApi.hash('md5', contents);
}

/*export*/ function sha1(contents) {
    return CryptoApi.hash('sha1', contents);
}

/*export*/ function sha256(contents) {
    return CryptoApi.hash('sha256', contents);
}

/*export*/ function sha512(contents) {
    return CryptoApi.hash('sha512', contents);
}
