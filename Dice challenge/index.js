
//Step 2
//set all the img element to have dice6 image
const images = document.querySelectorAll("img");

images.forEach(image => {
    image.src = "images/dice6.png";
});

//Step 3
//Create random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Step 4
//Change the img to random dice
//img1
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
//img1
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);


//Step 5
//check which player generate higher number
if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}