// adapted from https://github.com/mdn/webextensions-examples/blob/ec731d4ceee1df0ccdebd87ab9f95875f55eeee7/menu-demo/background.js

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

/*
Create all the context menu items.
*/
/*browser.menus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("menuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);*/

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


/*browser.menus.create({
  id: "open-sidebar",
  title: browser.i18n.getMessage("menuItemOpenSidebar"),
  contexts: ["all"],
  command: "_execute_sidebar_action"
}, onCreated);*/

browser.menus.create({
  id: "tools-menu",
  title: browser.i18n.getMessage("menuItemToolsMenu"),
  contexts: ["tools_menu"],
}, onCreated);

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.menus.onClicked.addListener((info, tab) => {
  hash = null;
  hashType = info.menuItemId;

  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;

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

    case "open-sidebar":
      console.log("Opening my sidebar");
      break;
    case "tools-menu":
      console.log("Clicked the tools menu item");
      break;
  }

  if (hash) {
      browser.tabs.executeScript({
          code: `console.log("'${info.selectionText}'", "\\n${hashType}: ${hash}");alert("'${info.selectionText}'\\n${hashType}: ${hash}");`
      });
  }
});
