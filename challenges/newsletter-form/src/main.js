const containerE1 = document.getElementById("#container");
const leftE1 = document.getElementById("#left");
const rightE1 = document.getElementById("#right");

const userEmailE1 = document.getElementById("#user-email");
const invaildEmailE1 = document.getElementById("#invalid-email");
const emailInputE1 = document.getElementById("#email");
const submitBtnE1 = document.getElementById("#submit");

const confirmedMessageE1 = document.getElementById("#confirmed-message");
const dismissMessageE1 = document.getElementById("#dismiss-message");

function formSuccess() {
  confirmedMessageE1.classList.add("active");
  confirmedMessageE1.classList.add("success");
  leftE1.style.display = "none";
  rightE1.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+\.[^s@]+$/;
  return emailRegex.test(email);
}

submitBtnE1.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInputE1.ariaValueMax.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmailE1.innerText = email;
    emailInout.value = "";

    invaildEmailE1.classList.remove("active");
    emailInputE1.classList.remove("active");
  } else {
    invaildEmailE1.classList.add("active");
    emailInputE1.classList.add("active");
  }
});

dismissMessageE1.addEventListener("click", () => {
  leftE1.style.display = "block";
  rightE1.style.display = "block";
  containerE1.classList.remove("success");
  confirmedMessageE1.classList.remove("active");
});
