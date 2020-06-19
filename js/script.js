var feedback = document.querySelector(".feedback-overlay");
var feedback__open = document.querySelector(".button--fb");
var feedback__close = document.querySelector(".feedback__button-cross");
var feedback__form = feedback.querySelector(".feedback__popup");
var firstname = feedback.querySelector("[name=firstname]");
var email = feedback.querySelector("[name=email]");
var storage_firstname = localStorage.getItem("firstname");
var storage_email = localStorage.getItem("email");

feedback__open.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("show");
  feedback__form.classList.add("modal-show");
  firstname.focus();
  if (storage_firstname) {
    firstname.value = storage_firstname;
    email.focus();
  } else {
    firstname.focus();
  }
});

feedback__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("show");
  feedback__form.offsetWidth = feedback__form.offsetWidth;
  feedback__form.classList.remove("modal-error");
});

feedback__form.addEventListener("submit", function (evt) {
  if (!firstname.value || !email.value) {
    evt.preventDefault();
    feedback__form.classList.add("modal-error");
  } else {
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("email", email.value);
  }
});
