
var dice1 = Math.floor(Math.random() * 6 ) + 1;
var dicerandom1 = "dice" + dice1 + ".png";
var dicesource1 = "images/" + dicerandom1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", dicesource1);


var dice2 = Math.floor(Math.random() * 6 ) + 1 ;
var dicerandom2 = "images/dice" + dice2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", dicerandom2);


if (dice1 > dice2){
  document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (dice2 > dice1){
  document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
