
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", 
"images/dice4.png", "images/dice5.png", "images/dice6.png" ];

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", images[randomNumber1-1]);
document.querySelector(".img2").setAttribute("src", images[randomNumber2-1]);

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "🚩Player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").textContent = "Player 2 wins!🚩";
}

else {
	document.querySelector("h1").textContent = "Draw!";
}


/*
another solution 

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
*/