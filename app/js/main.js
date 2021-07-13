$(document).ready(function(){
  $('.menu__btn').click(function(event) {
    $('.menu__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
 
  
$(function(){

  $('.select-style').styler();

  $(".star").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
 
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
      $(".header").addClass("header--scroll");
    } else {
      $(".header").removeClass("header--scroll");
    }
  });

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





