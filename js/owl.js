var startItem = $('.item').length - 1;

$(".owl-carousel").owlCarousel({
  dots: false,
  loop: true,
  nav: false,
  navText: ["<img src='../media/previous.svg' width='40'>","<img src='../media/next.svg' width='40'>"],
  autoplay: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  autoplayTimeout: 5000,
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
