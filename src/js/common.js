//
// fade in animation
//
window.addEventListener("DOMContentLoaded", () => {
  const animationEff = () => {
    const winH = window.innerHeight;
    let effects;

    const initAni = () => {
      effects = document.querySelectorAll(".eff");
      eventHandler();
    };

    const eventHandler = () => {
      window.addEventListener("scroll", checkScroll);
      window.addEventListener("load", checkScroll);
      window.addEventListener("resize", initAni);
    };

    const checkScroll = () => {
      for (let i = 0; i < effects.length; i++) {
        // viewTop이 스크롤에 의해 유동적으로 변함.
        let viewTop = effects[i].getBoundingClientRect().top;
        // console.log(viewTop);
        if (winH > viewTop) {
          effects[i].classList.add("fadeIn");
        }
      }
    };

    return initAni();
  };
  animationEff();
});

//
// *********************************
//        jquery
// *********************************
//

$(document).ready(function () {
  // scroll top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn(500);
      $("#backToTop").css("display", "flex");
    } else {
      $("#backToTop").fadeOut("slow");
    }
  });
  $("#backToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});
