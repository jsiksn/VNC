$(document).ready(function(){

  // fullPage
  if($(window).width() < 1441){
    $('section').addClass('fp-auto-height-responsive');
    }
  $(window).resize(function(){
    if(($(window).width() < 1441)){
      $('section').addClass('fp-auto-height-responsive');
    } else {
      $('section').removeClass('fp-auto-height-responsive');
    }
  });
  $('#fullpage').fullpage({
    verticalCentered: false,
    responsiveWidth: 1441,
    bigSectionsDestination: top
  });

  // count about 
  /* let scrollVh12 = $(window).innerHeight() * 1 / 2;
  let event12 = $('.number').offset().top - scrollVh12;
  let num = 0;
  $(window).scroll(function(){
    if($(this).scrollTop() > event12){
      setInterval(count(), 100);
    }
  });
  function count(){
    if (num < 13){
      num++;
      $('.number').text(num);
    }
  }; */ 

  // swiper portfolio
  var swiper = new Swiper(".portfolio", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1025: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      761: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

}); // ready