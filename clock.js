var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var secondHand = document.getElementById("second");

function setTime() {

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourRotation = (hours / 12) * 360;
  var minuteRotation = (minutes * 6) + (seconds * 6) / 60;
  var secondRotation = seconds * 6;

hourHand.style.transform = "rotate(" + hourRotation + "deg)";
minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
secondHand.style.transform = "rotate(" + secondRotation + "deg)";

}

var interval = setInterval(setTime, 1000);
