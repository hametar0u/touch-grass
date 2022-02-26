if (typeof init === 'undefined') {

    const init = function() {
        var jQuery = document.createElement("script");
        jQuery.src = "jquery"
        var animationScript = document.createElement("script");
        animationScript.src = "src/animation/animate.js";


        const injectElement = document.createElement('div');
        injectElement.className = 'element';
        injectElement.innerHTML = 'Hello this is reminder to touch grass';
        document.body.insertBefore(injectElement, document.body.firstChild);
        // document.body.appendChild(injectElement);
        var iframe  = document.createElement ('iframe');
        iframe.src  = chrome.runtime.getURL ('/animation/animation.html');
        iframe.style.position = "fixed";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.zIndex = "100";
        document.body.insertBefore(iframe, document.body.firstChild);
    }
    init();
}
