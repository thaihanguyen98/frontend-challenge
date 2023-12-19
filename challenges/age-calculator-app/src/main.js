let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

function validate() {
  let inputs = document.querySelectorAll("input");
  let validator = true;

  inputs.forEach((i) => {
    let parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required.";
      validator = false;
    } else if (
      i === document.getElementById("month") &&
      (i.value < 1 || i.value > 12)
    ) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Must be a valid month.";
      validator = false;
    } else if (
      i === document.getElementById("day") &&
      (i.value < 1 || i.value > 31)
    ) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Must be a valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });

  return validator;
}
function handleSubmit(event) {
  event.preventDefault();
  if (validate()) {
    let dayInput = document.getElementById("day");
    let monthInput = document.getElementById("month");
    let yearInput = document.getElementById("year");
    let currentDay = parseInt(dayInput.value);
    let currentMonth = parseInt(monthInput.value);
    let currentYear = parseInt(yearInput.value);

    if (currentDay > dayInCurrentMonth(currentMonth)) {
      currentDay = currentDay - dayInCurrentMonth(currentMonth);
      currentMonth = currentMonth - 1;
    }
    if (currentMonth > 12) {
      currentMonth = currentMonth - 12;
      currentYear = currentYear - 1;
    }

    const d = currentDay;
    const m = currentMonth;
    const y = currentYear;

    let daysResult = document.getElementById("daysResult");
    let monthsResult = document.getElementById("monthsResult");
    let yearsResult = document.getElementById("yearsResult");

    daysResult.innerHTML = d;
    monthsResult.innerHTML = m;
    yearsResult.innerHTML = y;
  }
}

function dayInCurrentMonth(month) {
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear()) {
    months[1] = 29;
  }
  return months[month - 1];
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const calculatorBtnElement = document.querySelector("#calculator-btn");
calculatorBtnElement.addEventListener("click", handleSubmit);
