$(document).ready(function(){
  $('.menu__btn').click(function(event) {
    $('.menu__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });

  $('.menu__btn').on('click', function(){
    $('.user-nav').toggleClass('user-nav--active');
  });



  $('.main-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.partners-slider').slick({
    arrows: false,
    donts:false,
    autoplay: true,
    centerMode: false,
    slidesToShow: 4,
    
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      }
    ]
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});





