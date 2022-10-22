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
// global nav
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
