console.log("BG started");
const options = ["responseHeaders", "extraHeaders"]; // ['blocking', 'responseHeaders', 'extraHeaders']
chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    console.log("onHeadersReceived", details);
  },
  { urls: ["*://localhost/*"] },
  options
);
