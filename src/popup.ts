console.log("better-gpt has been successfully loaded")

document.getElementById("changeColor")?.addEventListener("click", function() {
  chrome.runtime.sendMessage({ action: "changeColor" });
});
