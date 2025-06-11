var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// מקשיבים לכל כפתור בלחיצה עם העכבר
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

// מאזינים ללחיצת מקש במקלדת
document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

// פונקציה שמשמיעה את הצליל המתאים
function playSound(key) {
  var soundFile = getSoundFile(key);
  var audio = new Audio("sounds/" + soundFile);
  audio.play();
}

// פונקציה שמחזירה את שם הקובץ לפי המקש שנלחץ
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
