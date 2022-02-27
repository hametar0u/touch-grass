try {
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(null, { file: "./animation/jquery-3.4.1.min.js" }, function() {
            chrome.tabs.executeScript(null, { file: "contentScript.js" });
        });
    });

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete') {
            chrome.scripting.executeScript({
                files: ['./animation/jquery-3.4.1.min.js'],
                target: {tabId: tab.id}
            });

            chrome.scripting.executeScript({
                files: ['contentScript.js'],
                target: {tabId: tab.id}
            }); 
        }
    });
} catch (e) {
    console.log(e);
}