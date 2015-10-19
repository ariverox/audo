var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "", tabId:tab.id});
    // chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "popup.html";
  chrome.tabs.create({ url: newURL });
});
