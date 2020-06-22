// FEEDBACK-FORM

var feedback = document.querySelector(".feedback-overlay");
var feedback__open = document.querySelector(".button--fb");
var feedback__form = document.querySelector(".feedback__popup");
var feedback__close = feedback__form.querySelector(".feedback__button-cross");
var firstname = feedback__form.querySelector("[name=firstname]");
var email = feedback__form.querySelector("[name=email]");
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
  feedback__form.classList.remove("modal-show");
  feedback__form.offsetWidth = feedback__form.offsetWidth;
  feedback__form.classList.remove("modal-error");
});

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("show");
  feedback__form.classList.remove("modal-show");
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

// GOOGLE-MAP

function initMap() {
  var pos = { lat: 59.938829, lng: 30.323069 };
  var opt = {
    center: pos,
    zoom: 17,
  };

  var myMap = new google.maps.Map(document.getElementById("map"), opt);

  var image = "img/icons/ice-pin.png";

  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    icon: image,
  });
}

// SLIDER

var slider_menu = document.querySelector(".index-content__general-offer");
var body_wrapper = document.querySelector("body");
var slide_1 = slider_menu.querySelector(".slide-first");
var slide_2 = slider_menu.querySelector(".slide-second");
var slide_3 = slider_menu.querySelector(".slide-third");
var dot_1 = slider_menu.querySelector(".dot-first");
var dot_2 = slider_menu.querySelector(".dot-second");
var dot_3 = slider_menu.querySelector(".dot-third");

dot_1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide_1.classList.add("current");
  slide_2.classList.remove("current");
  slide_3.classList.remove("current");
  body_wrapper.classList.add("body__wrapper-green");
  body_wrapper.classList.remove("body__wrapper-blue-gray");
  body_wrapper.classList.remove("body__wrapper-brown-gray");
  dot_1.classList.add("current");
  dot_2.classList.remove("current");
  dot_3.classList.remove("current");
});

dot_2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide_1.classList.remove("current");
  slide_2.classList.add("current");
  slide_3.classList.remove("current");
  body_wrapper.classList.remove("body__wrapper-green");
  body_wrapper.classList.add("body__wrapper-blue-gray");
  body_wrapper.classList.remove("body__wrapper-brown-gray");
  dot_1.classList.remove("current");
  dot_2.classList.add("current");
  dot_3.classList.remove("current");
});

dot_3.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide_1.classList.remove("current");
  slide_2.classList.remove("current");
  slide_3.classList.add("current");
  body_wrapper.classList.remove("body__wrapper-green");
  body_wrapper.classList.remove("body__wrapper-blue-gray");
  body_wrapper.classList.add("body__wrapper-brown-gray");
  dot_1.classList.remove("current");
  dot_2.classList.remove("current");
  dot_3.classList.add("current");
});
