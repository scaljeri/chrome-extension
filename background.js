console.log("BG started");
let extraInfoSpec = ["responseHeaders", "extraHeaders"];
chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    console.log("onHeadersReceived", details);
  },
  { urls: ["*://localhost/*"] },
  extraInfoSpec
);

extraInfoSpec = ["extraHeaders", "requestBody"];
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("onBeforeRequestOptions", details);
  },
  { urls: ["*://localhost/*"] },
  extraInfoSpec
);
