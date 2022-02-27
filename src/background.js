
try {
    const start = new Date();
    var value = start.getTime();
    chrome.storage.local.set({ 'time': value }, function() {
        console.log('Value is set to ' + value);
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete') {
            console.log("executing");
            let startTime;
            const now = new Date();
            chrome.storage.local.get(['time'], function(result){
                startTime = result.time;
                console.log("Start time: ", result.time);
                let deltatime = now.getTime() - startTime;
                console.log(deltatime);
            });
            chrome.scripting.executeScript({
                files: ['contentScript.js'],
                target: {tabId: tab.id}
            }); 
        }
    });
    });
} catch (e) {
    console.log(e);
}