  $(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      slidesPerView: 3,
      initialSlide: 3,
      slideNextClass: 'active-slide',
      nextButton: '.button-next',
      prevButton: '.button-prev',
      coverflow: {
        rotate: 15,
        stretch: 0,
        depth: 500,
        modifier: 1
      }
    });    
});