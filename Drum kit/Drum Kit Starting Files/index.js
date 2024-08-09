// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }

//////// function within function
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }
    

const btns = document.querySelectorAll(".drum");

function playKey(key){
    var audio;
    switch (key){
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
    }

    if (audio) {
        audio.play();
    }
}

btns.forEach(btn => {
    //ito yung magiidentify ng unang class sa list ng html element na may .drum na class
    const key = btn.classList[0];
    btn.addEventListener("click", function () {
        playKey(key)});
    }   
);


