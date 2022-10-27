$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn(500);
    } else {
      $("#backToTop").fadeOut("slow");
    }
  });
  $("#backToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});

//
// work html 불러오기
//

$(document).ready(function () {
  $("#contents").load("/work_list.html");
});

//
// *********************************
//        vanilla javascript
// *********************************
//
// global nav
const body = document.querySelector("body");
const navBtn = document.querySelector(".hamburger-btn");
const globalnav = document.querySelector(".global-nav");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!globalnav.classList.contains("global-nav--open")) {
    globalnav.classList.add("global-nav--open");
    navBtn.classList.add("hamburger-btn-open");
    body.style.overflowY = "hidden";
  } else {
    globalnav.classList.remove("global-nav--open");
    navBtn.classList.remove("hamburger-btn-open");
    body.style.overflowY = "auto";
  }
});

//
// slider
//
const slides = document.querySelectorAll(".slides li");
const numOfSlide = slides.length;

function eventHandler() {
  let randomSlides = Math.floor(Math.random() * numOfSlide);

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  randomSlides++;

  if (randomSlides > numOfSlide - 1) {
    randomSlides = 0;
  }

  slides[randomSlides].classList.add("active");
  // console.log("random", randomSlides);
}

let autoPlay;
let repeater = () => {
  autoPlay = setInterval("eventHandler()", 2000);
};

eventHandler();
repeater();

//
// fade in animation
//
