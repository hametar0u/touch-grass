
if (typeof init === 'undefined') {
    const init = function() {
        const injectElement = document.createElement('div');
        injectElement.className = 'element';
        injectElement.innerHTML = 'Hello this is reminder to touch grass';
        document.body.insertBefore(injectElement, document.body.firstChild);
        // document.body.appendChild(injectElement);
        var iframe  = document.createElement ('iframe');
        iframe.src  = chrome.runtime.getURL ('/animation.html');
        iframe.style.position = "absolute";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.zIndex = "100";
        document.body.insertBefore(iframe, document.body.firstChild);
    }
    init();
}
