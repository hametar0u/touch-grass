$(document).ready(function(){
    console.log("script running");
    // var idArray = [];
    // $('.a').each(function () {
    //     idArray.push(this.id);
    // });
    // for (var item in idArray) {
    //     animateDiv(item);
    // }
    
    animateDiv('#a');
    // animateDiv('.c');
    // animateDiv('.d');
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
      $(myID).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
        animateDiv(myID);        
      });
      
  };