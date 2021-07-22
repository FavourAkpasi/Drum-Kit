// ORIGINAL CODE WITHOUT ANIMATION
// for (var  i = 0; i < document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", playSound);
//     function playSound() {
//         var sound = new Audio('sounds/crash.mp3');
//         sound.play(); 
//     }
// };


// for (var  i = 0; i < document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         if (this.innerHTML == "w"){
//             var sound = new Audio('sounds/crash.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "a"){
//             var sound = new Audio('sounds/kick-bass.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "s"){
//             var sound = new Audio('sounds/snare.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "d"){
//             var sound = new Audio('sounds/tom-1.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "j"){
//             var sound = new Audio('sounds/tom-2.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "k"){
//             var sound = new Audio('sounds/tom-3.mp3');
//             sound.play(); 
//         }
//         if (this.innerHTML == "l"){
//             var sound = new Audio('sounds/tom-4.mp3');
//             sound.play(); 
//         }
//     });
// };


// document.addEventListener("keypress", function(event){
//     if (event.key =="w"){
//         var sound = new Audio('sounds/crash.mp3');
//         sound.play();
//     }
//     if (event.key =="a"){
//         var sound = new Audio('sounds/kick-bass.mp3');
//         sound.play();
//     }
//     if (event.key =="s"){
//         var sound = new Audio('sounds/snare.mp3');
//         sound.play();
//     }
//     if (event.key =="d"){
//         var sound = new Audio('sounds/tom-1.mp3');
//         sound.play();
//     }
//     if (event.key =="j"){
//         var sound = new Audio('sounds/tom-2.mp3');
//         sound.play();
//     }
//     if (event.key =="k"){
//         var sound = new Audio('sounds/tom-3.mp3');
//         sound.play();
//     }
//     if (event.key =="l"){
//         var sound = new Audio('sounds/tom-4.mp3');
//         sound.play();
//     }
//     //else (alert("can only play with the displayed key"))

// })


// CODE REFACTORED AND ANIMATION ADDED





for (var i=0; i<document.querySelectorAll('button').length; i++)
document.querySelectorAll("button")[i].addEventListener("click",  function (){
    playSound(this.innerHTML);
    animateButton(this.innerHTML)
});


document.addEventListener("keypress", function (event){
    playSound(event.key)
    animateButton(event.key)
});


function playSound(key) {
    switch(key) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play(); 
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default: console.log(this.innerHTML); 
    }
}
function animateButton(pressedKey) {
    document.querySelector("."+ pressedKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+ pressedKey).classList.remove("pressed");
    }, 100);

}
