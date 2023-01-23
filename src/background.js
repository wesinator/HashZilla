/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (chrome.runtime.lastError) {
    console.log(`Error: ${chrome.runtime.lastError}`);
  } else {
    //console.log("Item created successfully");
  }
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "MD5",
      title: chrome.i18n.getMessage("MD5"),
      contexts: ["all"]
    }, onCreated);

    chrome.contextMenus.create({
      id: "separator0",
      type: "separator",
      contexts: ["all"]
    }, onCreated);

    chrome.contextMenus.create({
      id: "SHA1",
      title: chrome.i18n.getMessage("SHA1"),
      contexts: ["all"]
    }, onCreated);

    chrome.contextMenus.create({
      id: "SHA256",
      title: chrome.i18n.getMessage("SHA256"),
      contexts: ["all"]
    }, onCreated);

    chrome.contextMenus.create({
      id: "SHA512",
      title: chrome.i18n.getMessage("SHA512"),
      contexts: ["all"]
    }, onCreated);
});

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
chrome.contextMenus.onClicked.addListener((info, tab) => {
  hash = null;
  hashType = info.menuItemId;
  //console.log(info.selectionText);

  switch (hashType) {
    case "MD5":
      hash = md5(info.selectionText);
      break;
    case "SHA1":
      hash = sha1(info.selectionText);
      break;
    case "SHA256":
      hash = sha256(info.selectionText);
      break;
    case "SHA512":
      hash = sha512(info.selectionText);
      break;
  }

  if (hash) {
      var selectionOutput = info.selectionText.substring(0,4096);
      if (info.selectionText.length > 4096)
          selectionOutput = selectionOutput + "...";

      browser.tabs.executeScript({
          code: `
                hashStr = String.raw\`${hashType}: ${hash}\n\n${browser.i18n.getMessage("TextHeading")}\n'${selectionOutput}'\n\`; 
                console.log(hashStr);
                alert(hashStr);`
      });
  }
});
