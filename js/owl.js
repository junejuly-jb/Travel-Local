var startItem = $('.item').length - 1;

$(".owl-carousel").owlCarousel({
  dots: true,
  loop: true,
  nav: true,
  autoplay: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  autoplayTimeout: 3000,
  startPosition: startItem,
  responsive: {
    0: {
      dotsEach: 1,
      items: 1
    },
    600: {
      dotsEach: 1,
      items: 1
    },
    1200: {
      dotsEach: 1,
      items: 1
    }
  }
});
