//header fixed
$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".tabs").addClass("change");
  } else {
    $(".tabs").removeClass("change");
  }
});

jQuery(document).ready(function () {
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
// filtering tab : work
//
const tabBtn = document.querySelectorAll(".filter-wrap__item");
const webs = document.querySelectorAll(".web");
const randing = document.querySelectorAll(".randing");
const details = document.querySelectorAll(".detail");
const projects = document.querySelectorAll(".projects");
const side = document.querySelectorAll(".side");
const tabAll = document.querySelectorAll(".list-inner__layer");

tabBtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");
    // 'data-filter' 속성 값을 "tabBtnDataset" 변수에 저장하기
    const tabBtnDataset = tab.getAttribute("data-filter");
    console.log(tabBtnDataset);

    // All
    tabAll.forEach((all) => {
      all.style.display = "none";
    });

    // "data-filter"가 "web"일 때 보여짐
    if (tabBtnDataset === "web") {
      webs.forEach((web) => {
        web.style.display = "block";
      });
    } else if (tabBtnDataset === "randing") {
      // "data-filter"가 "randing"일 때 보여짐
      randing.forEach((randing) => {
        randing.style.display = "block";
      });
    } else if (tabBtnDataset === "detail") {
      // "data-filter"가 "detail"일 때 보여짐
      details.forEach((detail) => {
        detail.style.display = "block";
      });
    } else if (tabBtnDataset === "projects") {
      // "data-filter"가 "projects"일 때 보여짐
      projects.forEach((projects) => {
        projects.style.display = "block";
      });
    } else if (tabBtnDataset === "side") {
      // "data-filter"가 "side"일 때 보여짐
      side.forEach((side) => {
        side.style.display = "block";
      });
    } else {
      tabAll.forEach((all) => {
        all.style.display = "block";
      });
    }
  });
});
