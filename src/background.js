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

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "MD5",
  title: browser.i18n.getMessage("MD5"),
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "separator0",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "SHA1",
  title: browser.i18n.getMessage("SHA1"),
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "SHA256",
  title: browser.i18n.getMessage("SHA256"),
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "SHA512",
  title: browser.i18n.getMessage("SHA512"),
  contexts: ["all"]
}, onCreated);


/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener((info, tab) => {
  hash = null;
  hashType = info.menuItemId;
  //console.log(info.selectionText);

  switch (info.menuItemId) {
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
                hashStr = String.raw\`${hashType}: ${hash}\n\nText:\n'${selectionOutput}'\n\`; 
                console.log(hashStr);
                alert(hashStr);`
      });
  }
});
