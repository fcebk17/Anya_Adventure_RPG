var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
  
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }window.CP.exitedLoop(0);
  //# sourceURL=pen.js