// Handle click of button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Handle key press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    var soundDir = "sounds/";

    switch (key) {
        case "w":
            var tom1 = new Audio(soundDir + "tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio(soundDir + "tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio(soundDir + "tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio(soundDir + "tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio(soundDir + "snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio(soundDir + "crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio(soundDir + "kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(
        function () {
            activeButton.classList.remove("pressed");
        },
        100
    );
}