var feedback = document.querySelector(".feedback-overlay"),
  office_info = document.querySelector(".map-holder__about-office"),
  feedback__open = office_info.querySelector(".button--alt"),
  feedback__form = document.querySelector(".feedback__popup"),
  feedback__close = feedback__form.querySelector(".button-cross"),
  firstname = feedback__form.querySelector("[name=firstname]"),
  email = feedback__form.querySelector("[name=email]"),
  storage_firstname = localStorage.getItem("firstname"),
  storage_email = localStorage.getItem("email");
function initMap() {
  var e = { lat: 59.938829, lng: 30.323069 },
    r = { center: e, zoom: 17 },
    t = new google.maps.Map(document.getElementById("map"), r);
  new google.maps.Marker({
    position: e,
    map: t,
    icon: "img/icons/ice-pin.png",
  });
}
feedback__open.addEventListener("click", function (e) {
  e.preventDefault(),
    feedback.classList.add("show"),
    feedback__form.classList.add("modal-show"),
    firstname.focus(),
    storage_firstname
      ? ((firstname.value = storage_firstname), email.focus())
      : firstname.focus();
}),
  feedback__close.addEventListener("click", function (e) {
    e.preventDefault(),
      feedback.classList.remove("show"),
      feedback__form.classList.remove("modal-show"),
      feedback__form.offsetWidth,
      feedback__form.classList.remove("modal-error");
  }),
  feedback.addEventListener("click", function (e) {
    e.preventDefault(),
      feedback.classList.remove("show"),
      feedback__form.classList.remove("modal-show"),
      feedback__form.offsetWidth,
      feedback__form.classList.remove("modal-error");
  }),
  feedback__form.addEventListener("submit", function (e) {
    firstname.value && email.value
      ? (localStorage.setItem("firstname", firstname.value),
        localStorage.setItem("email", email.value))
      : (e.preventDefault(), feedback__form.classList.add("modal-error"));
  });
var slider_menu = document.querySelector(".index-content__general-offer"),
  body_wrapper = document.querySelector("body"),
  slide_1 = slider_menu.querySelector(".slide-first"),
  slide_2 = slider_menu.querySelector(".slide-second"),
  slide_3 = slider_menu.querySelector(".slide-third"),
  dot_1 = slider_menu.querySelector(".dot-first"),
  dot_2 = slider_menu.querySelector(".dot-second"),
  dot_3 = slider_menu.querySelector(".dot-third");
dot_1.addEventListener("click", function (e) {
  e.preventDefault(),
    slide_1.classList.add("current"),
    slide_2.classList.remove("current"),
    slide_3.classList.remove("current"),
    body_wrapper.classList.add("wrapper-green"),
    body_wrapper.classList.remove("wrapper-blue"),
    body_wrapper.classList.remove("wrapper-brown"),
    dot_1.classList.add("current"),
    dot_2.classList.remove("current"),
    dot_3.classList.remove("current");
}),
  dot_2.addEventListener("click", function (e) {
    e.preventDefault(),
      slide_1.classList.remove("current"),
      slide_2.classList.add("current"),
      slide_3.classList.remove("current"),
      body_wrapper.classList.remove("wrapper-green"),
      body_wrapper.classList.add("wrapper-blue"),
      body_wrapper.classList.remove("wrapper-brown"),
      dot_1.classList.remove("current"),
      dot_2.classList.add("current"),
      dot_3.classList.remove("current");
  }),
  dot_3.addEventListener("click", function (e) {
    e.preventDefault(),
      slide_1.classList.remove("current"),
      slide_2.classList.remove("current"),
      slide_3.classList.add("current"),
      body_wrapper.classList.remove("wrapper-green"),
      body_wrapper.classList.remove("wrapper-blue"),
      body_wrapper.classList.add("wrapper-brown"),
      dot_1.classList.remove("current"),
      dot_2.classList.remove("current"),
      dot_3.classList.add("current");
  });
