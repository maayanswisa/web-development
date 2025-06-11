var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(colour) {
  var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();
}

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});
