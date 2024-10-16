var startHour = document.getElementById("hours");
var stopMin = document.getElementById("Minetus");
var resetSec = document.getElementById("Sec");

var hr = 0;
var min = 0;
var sec = 0;

var stopwatch = true;
function startBtn() {
  if (stopwatch == true) {
    stopwatch = false;

    timercycle();
  }
}
function timercycle() {
  if (stopwatch == false) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    startHour.innerHTML = hr;
    stopMin.innerHTML = min;
    resetSec.innerHTML = sec;

    setTimeout("timercycle()", 1000);
  }
}
function stop() {
  if (stopwatch == false) {
    stopwatch = true;
  }
}
function reset() {
  startHour.innerHTML = "00";
  stopMin.innerHTML = "00";
  resetSec.innerHTML = "00";

  stopwatch = true;
  hr = 0;
  min = 0;
  sec = 0;
}
