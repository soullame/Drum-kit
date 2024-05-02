

  var numberofdrum = document.querySelectorAll("button").length;

  for(var i=0; i<numberofdrum; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function(){

       var drumsoundbutton = this.innerHTML;
       makesounds(drumsoundbutton);
       buttonAnimation(drumsoundbutton);
    }
   );
  }

  document.addEventListener("keypress", function(event){
  makesounds(event.key);
  buttonAnimation(event.key);
  });


  function makesounds(key){
    switch(key){
      case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

      case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

      case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

      case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

      case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

      case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

      case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

      default :
    }
  }

  function buttonAnimation(lastkey){
    var buttonClicked = document.querySelector("." + lastkey)
    buttonClicked.classList.add("pressed");
    setTimeout(
      function removeAnimation(){
        buttonClicked.classList.remove("pressed")
      }, 100
    );
    }

