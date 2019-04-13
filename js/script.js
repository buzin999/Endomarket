window.addEventListener('DOMContentLoaded', function () {

/* Button */
    $('.menu-button').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-button__active');
        $('.menu').toggleClass('menu__active')
    });

/* Equipment Slider start */
  let slideIndex = 1,// Параметр текущего слайда
      slides = document.querySelectorAll('.equipment-block'),
      dotsWrap = document.querySelector('.equipment-dots'),
      dots = document.querySelectorAll('.equipment__dot');

  showSlides(slideIndex);
  
  function showSlides(n) {
      if (n > slides.length) {
          slideIndex = 1;
      } else if (n < 1) {
          slideIndex = slides.length;
      }
      
      slides.forEach((item) => item.style.display = 'none');
      dots.forEach((item) => item.classList.remove('equipment__dot-active'));

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('equipment__dot-active');
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length +1; i++) {
        /* Т.обр. цикл пройдет 4 раза и номер точки в массиве (dots[i-1]) соответствует слайду (currentSlide(i)) */
        if (event.target.classList.contains('equipment__dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
      }
    });
/* Equipment Slider end */

/* Owl Carousel start */
    $(".owl-carousel").owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
/* Owl Carousel end */
});