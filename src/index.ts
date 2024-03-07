chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeColor") {
    // Send a message to the content script to change the color
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id!, { action: "changeColor" });
    });
  }
});