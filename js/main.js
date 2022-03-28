$(window).on('load', function() {
        
    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function () {
        $(this).remove().fadeOut();
    });

    ///////////////////////////////////////////

    // Navbar on Scroll Animation
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.nav-bar').addClass('active-nav');
        } else {
            $('.nav-bar').removeClass('active-nav');
        }
    });

    var Top = 0;
    $(window).on('scroll',function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop > Top)    {
        $('.nav-bar').addClass('animate');
      } else {
        $('.nav-bar').removeClass('animate');
      }
      Top = scrollTop;
    });

    ///////////////////////////////////////////

    // ScrollTop Button
    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1200);
    });
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll').css({
                opacity: 1,
                bottom: '3%'
            });
        } else {
            $('.scroll').css({
                opacity: 0,
                bottom: '90%'
            });
        }
    });

    /////////////////////////////////////////////
    
    // Init Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 400
    });
    
    // Init AOS
    AOS.init();

});