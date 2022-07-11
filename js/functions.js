// $('.projeto-list').slick({
//   centerMode: true,
//   dots: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1
//       }
//     }
//   ]
// });

$('.card-img-top').slick({
  dots: true,
  infinite: true,
  fade: true,
  cssEase: 'linear',
});

$('.depoimentos').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  autoplay: true
});

$("#trigger-mobile-menu").on('click', () => {
  $(".menu-mobile").slideToggle();
})


$(window).scroll( function(){
/* Check the location of each desired element */
    $('.hideme').each( function(i){
  
      var bottom_of_object = $(this).offset().top - 500 + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},2000);
      }
    }); 
});

// $('a[href^="#"]').on('click', function(event) {
//   var target = $(this.getAttribute('href'));
//   if (target.length) {
//     event.preventDefault();
//     $('html, body').animate({
//       scrollTop: target.offset().top - 80
//     }, 500);
//   }
// });

$(function() {
  $('.pop').on('click', function() {
    $('#imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
  });		
});