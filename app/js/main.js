$(function(){
  

  $('.main-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.partners-slider').slick({
    arrows: false,
    donts:false,
    autoplay: true,
    centerMode: true,
    slidesToShow: 4,
  });
  


  
  // var mixer = mixitup('.design__items');


  // $('#products__filters').mixItUp({
  //   selectors: {
  //     filter: '.filter__btn'
  //   }
  // });

  // $('#design__filter').mixItUp({
  //   selectors: {
  //     filter: '.design__btn'
  //   }
  // });

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


