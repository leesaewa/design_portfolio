//header fixed
$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 50) {
    //console.log('a');
    $(".tabs").addClass("change");
  } else {
    //console.log('a');
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
