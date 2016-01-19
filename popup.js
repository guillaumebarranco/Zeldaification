// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	chrome.tabs.executeScript(tabs[0].id, {file: "koko.js"});
// });
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		chrome.tabs.executeScript(tabId, {file: "koko.js"});
	}
});
