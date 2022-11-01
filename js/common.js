//
// jquery
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

//
// *********************************
//        vanilla javascript
// *********************************
//

//
// fade in animation
//
