$(document).ready(function(){
  
      var swiper = new Swiper(".firstSwiper", {
        effect: "fade",
        direction: "vertical",
        loop:true,
        allowTouchMove: false,

        autoplay: {
          delay: 3500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper('.secondSwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',

        autoplay: {
          delay: 2500,
        },
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      });

      $('.tab_title').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        var tab = $(this).attr('data-alt')
        
        $('.tab div').removeClass('active')

        $('#' + tab).addClass('active')

        var dataImage = $(this).attr('data-image')
        $('.image img').attr('src', dataImage)
        
      });
      
});//end
