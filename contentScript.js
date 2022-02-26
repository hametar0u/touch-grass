
if (typeof init === 'undefined') {
    const init = function() {
        const injectElement = document.createElement('div');
        injectElement.className = 'element';
        injectElement.innerHTML = 'Hello this is reminder to touch grass';
        document.body.insertBefore(injectElement, document.body.firstChild);
        // document.body.appendChild(injectElement);
    }
    init();
}
