let leftElement = document.querySelector("#left");
let rightElement = document.querySelector("#right");

let confirmedMessageElement = document.querySelector("#confirmed-message");
let invalidEmailElement = document.querySelector("#valid-email");

let emailInputElement = document.querySelector("#email");
let userEmailElement = document.querySelector("#user-email");

function formSuccess(event) {
  event.preventDefault();
  let leftElement = document.querySelector("#left");
  let rightElement = document.querySelector("#right");
  let confirmedMessageElement = document.querySelector("#confirmed-message");

  leftElement.style.display = "none";
  rightElement.style.display = "none";
  confirmedMessageElement.classList.add("active");
  confirmedMessageElement.classList.add("success");
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function formDismissed(event) {
  event.preventDefault();
  leftElement.style.display = "block";
  rightElement.style.display = "block";
  confirmedMessageElement.classList.remove("active");
  confirmedMessageElement.classList.remove("success");
}

let submitButtonElement = document.querySelector("#submit");
submitButtonElement.addEventListener("click", (event) => {
  event.preventDefault();
  let emailInputElement = document.querySelector("#email");
  let invalidEmailElement = document.querySelector("#invalid-email");
  let userEmailElement = document.querySelector("#user-email");

  let email = emailInputElement.value.trim();

  if (validateEmail(email)) {
    formSuccess(event);
    userEmailElement.innerText = email;
    emailInputElement.value = "";

    invalidEmailElement.classList.remove("active");
    emailInputElement.classList.remove("active");
  } else {
    invalidEmailElement.classList.add("active");
    emailInputElement.classList.add("active");
  }
});

let dismissedElement = document.querySelector("#dismiss-message");
dismissedElement.addEventListener("click", formDismissed);
