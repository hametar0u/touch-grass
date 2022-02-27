var counter = 0;

$(document).ready(function(){
    console.log("script running");

    function deleteDuck(e) {
        //because img is on top of div so source element = img
        var target = e.srcElement;
        console.log(target);
        var targetParent = target.parentNode;
        console.log(targetParent);
        targetParent.parentNode.removeChild(targetParent);
    }

    function createDuck(i) {
        const duck = document.createElement('div');
        duck.className = 'duck';
        duck.id = 'duck' + JSON.stringify(i);
        duck.addEventListener("click", deleteDuck); //you can't pass in params to this function because it'll get evaluated as a value

        const duckImg = document.createElement('img');
        var num = counter % 4 + 1;
        counter++;
        duckImg.src = chrome.runtime.getURL ("/animation/assets/goose" + num + ".jpeg"); 
        duck.appendChild(duckImg);

        document.body.insertBefore(duck, document.body.firstChild);
    }

    const init = function() {

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

    setInterval(()=>{
        createDuck(counter);
    var idArray = [];
    $('.duck').each(function () {
        idArray.push(this.id);
    });
    console.log(idArray);

    for (var i = 0; i < idArray.length; i++) {
        animateDiv('#' + idArray[i]);
    }
    
    }, 3000);
  });

  function makeNewPosition(){
      
      // Get viewport dimensions (remove the dimension of the div)
      var h = $(window).height() - 50;
      var w = $(window).width() - 50;
      
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }

function animateDiv(myID){
      var newq = makeNewPosition();
      $(myID).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
        animateDiv(myID);        
      });
      
  };