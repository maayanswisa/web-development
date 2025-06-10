var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    var audio = new Audio("sounds/" + getSoundFile(buttonInnerHTML));
    audio.play();
  });
}

function getSoundFile(key) {
  switch (key) {
    case "w":
      return "tom-1.mp3";
    case "a":
      return "tom-2.mp3";
    case "s":
      return "tom-3.mp3";
    case "d":
      return "tom-4.mp3";
    case "j":
      return "snare.mp3";
    case "k":
      return "crash.mp3";
    case "l":
      return "kick-bass.mp3";
    default:
      return "tom-1.mp3";
  }
}
