$(document).ready(function(){

  // fullPage
  $('#fullpage').fullpage({
    verticalCentered: false,
    responsiveWidth: 1441
  });

  // swiper
  var swiper = new Swiper(".portfolio", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}); // ready