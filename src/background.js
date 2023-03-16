/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    //console.log("Item created successfully");
  }
}


chrome.contextMenus.create({
  id: "MD5",
  title: browser.i18n.getMessage("MD5"),
  contexts: ["all"]
}, onCreated);

chrome.contextMenus.create({
  id: "separator0",
  type: "separator",
  contexts: ["all"]
}, onCreated);

chrome.contextMenus.create({
  id: "SHA1",
  title: browser.i18n.getMessage("SHA1"),
  contexts: ["all"]
}, onCreated);

chrome.contextMenus.create({
  id: "SHA256",
  title: browser.i18n.getMessage("SHA256"),
  contexts: ["all"]
}, onCreated);

chrome.contextMenus.create({
  id: "SHA512",
  title: browser.i18n.getMessage("SHA512"),
  contexts: ["all"]
}, onCreated);


/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
chrome.contextMenus.onClicked.addListener((info, tab) => {
  hash = null;
  hashType = info.menuItemId;
  hashtext = info.selectionText;
  //console.log("selection:",info.selectionText);

  switch (hashType) {
    case "MD5":
      hash = md5(hashtext);
      break;
    case "SHA1":
      hash = sha1(hashtext);
      break;
    case "SHA256":
      hash = sha256(hashtext);
      break;
    case "SHA512":
      hash = sha512(hashtext);
      break;
  }

  if (hash) {
      //console.log(hash)
      chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func: displayHash,
          args: [hashtext, hashType, hash]
      });
  }
});

function displayHash(hashText, hashType, hash) {
    // truncate long text String
    var selectionOutput = hashText.substring(0,4096);
      if (hashText.length > 4096)
          selectionOutput = selectionOutput + "...";

    hashStr = `${hashType.toUpperCase()}: ${hash}\n\n${chrome.i18n.getMessage("TextHeading")}\n'${selectionOutput}'\n`; 
    console.log(hashStr);
    alert(hashStr);
}
