if (typeof init === 'undefined') {

    const init = function() {
        var jQuery = document.createElement("script");
        jQuery.src = chrome.runtime.getURL ('/animation/jquery-3.4.1.min.js');
        var animationScript = document.createElement("script");
        animationScript.src = chrome.runtime.getURL ('/animation/animate.js');
        document.head.append(jQuery);
        document.head.append(animationScript);


        const injectElement = document.createElement('div');
        injectElement.className = 'element';
        injectElement.innerHTML = 'Hello this is reminder to touch grass';
        document.body.insertBefore(injectElement, document.body.firstChild);
        const duck = document.createElement('div');
        duck.className = 'a';
        duck.id = 'a1';
        const duckImg = document.createElement('img');
        duckImg.src = chrome.runtime.getURL ("/animation/assets/goose1"); //not working
        duck.appendChild(duckImg);
        document.body.insertBefore(duck, document.body.firstChild);


        // document.body.appendChild(injectElement);
        // var iframe  = document.createElement ('iframe');
        // iframe.src  = chrome.runtime.getURL ('/animation/animation.html');
        // iframe.style.position = "fixed";
        // iframe.style.width = "100%";
        // iframe.style.height = "100%";
        // iframe.style.zIndex = "100";
        // document.body.insertBefore(iframe, document.body.firstChild);
    }
    init();
}
