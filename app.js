//DETECTING BUTTON PRESS

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    //the array after .drum denotes the postion. //this was only for button 1 if for loop was not used
    //what to do when click is done.
    var buttonInnerHTML=this.innerHTML; 
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});


}

//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
   

});

function makeSound(key){

  switch(key) {
        
        case "w" : //in double quotes
        var crash = new Audio('sounds/crash.mp3');
        crash.play(); 
        //call-back method
        break;

        case "a" :
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

        case "t" :
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;


        case "e" :
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "r" :
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "m" :
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        case "q" :
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;


        default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){

 var activeButton = document.querySelector("." + currentKey); //. IS FOR CLASS

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 200);
}

