console.log('BG started');
chrome.webRequest.onHeadersReceived.addListener((details) => {
console.log('received', details);
}, { urls: ['<all_urls>'] }, ['blocking', 'responseHeaders', 'extraHeaders']);