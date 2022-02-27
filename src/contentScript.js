//TODO: DELETE

console.log("contentScript run");
if (typeof init === 'undefined') {

    const init = function() {
        const duck = document.createElement('div');
        duck.className = 'duck';
        duck.id = 'duck1';
        // wrapperDiv.appendChild(duck);

        const duckImg = document.createElement('img');
        duckImg.src = chrome.runtime.getURL ("/animation/assets/goose1"); 
        duck.appendChild(duckImg);

        document.body.insertBefore(duck, document.body.firstChild);


        var stylesheet = document.createElement("link");
        stylesheet.rel= "stylesheet";
        stylesheet.href = chrome.runtime.getURL ("/animation/styles.css");

        var jQuery = document.createElement("script");
        jQuery.type = "text/javascript";
        jQuery.src = chrome.runtime.getURL ('/animation/jquery-3.4.1.min.js');
        
        var animationScript = document.createElement("script");
        animationScript.type = "text/javascript";
        animationScript.src = chrome.runtime.getURL ('/animation/animate.js');

        document.head.append(stylesheet);
        document.head.append(jQuery);
        document.head.append(animationScript);

        // const wrapperDiv = document.createElement("div");
        // wrapperDiv.className = "wrapper";


        const injectElement = document.createElement('div');
        injectElement.className = 'element';
        injectElement.innerHTML = 'Hello this is reminder to touch grass';
        // wrapperDiv.appendChild(injectElement);




        document.body.appendChild(injectElement);
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
