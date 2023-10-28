//Add an Event handler to document.keypress
document.addEventListener("keypress",function(e){
    playAudioFile(e.key);
    buttonAnimation(this.classList[0]);
});


// Add an Event handler to buttons0-6.click
var noOfDrumButtuns = document.querySelectorAll(".drum").length;
for(var i = 0; i<= noOfDrumButtuns;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        playAudioFile(this.classList[0]);
        buttonAnimation(this.classList[0]);         
    });
}

function playAudioFile(ch){
    switch (ch){
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            break;
    }   
    audio.play();
}

function buttonAnimation(ch){
    var activeButton = document.getElementsByClassName(ch)[0];
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);
}

