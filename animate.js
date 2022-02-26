$(document).ready(function(){
    console.log("script running");
    var idArray = [];
    $('.a').each(function () {
        idArray.push(this.id);
    });
    console.log(idArray);

    for (var i = 0; i < idArray.length; i++) {
        animateDiv('#' + idArray[i]);
    }
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