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

$('.projeto-list').slick({
  dots: true,
  infinite: true,
  speed: 1200,
  fade: true,
  cssEase: 'linear',
  autoplay: true
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