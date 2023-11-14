function clock() {
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  let period = "AM";

  // Set AM/PM
  if (hours >= 12) {
    period = "PM";
  }

  // Set 12 hour clock format

  hours = hours > 12 ? hours % 12 : hours;

  // Add 0 for values lower then 10

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".am-pm").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);
