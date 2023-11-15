// Switch clock format

const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");
});

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

var today = new Date();
const dayNumber = today.getDate();
const dayYear = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "long" });
const monthName = today.toLocaleString("default", { month: "short" });

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = dayYear;
