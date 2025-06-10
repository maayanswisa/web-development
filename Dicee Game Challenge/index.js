var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
//change the left qube

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
//change the right qube

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
}

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Its A Draw!";
}
