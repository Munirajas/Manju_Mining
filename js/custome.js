

$(document).ready(function(){
    $("#openMenu").click(function(){
      $(".sideMenuWrapper").addClass("active");
    });

    $("#closeMenu").click(function(){
        $(".sideMenuWrapper").removeClass("active");
    });

    $(".hasDropdown").click(function(){
        $(this).parent().toggleClass("menuOpen");
    });

    // Banner Slider
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Mapping onclick function
        
    $('.mapper').on('click',function(e){
        e.preventDefault();
        $('.mapContent').removeClass('active');
        $('.mapper').removeClass('active');
        $(this).addClass('active');
        const elem = '#'+$(this).attr('data-attribute');
        $(elem).addClass('active');
    });

    $('.mapContent-close-icon').on('click',function(){
        $('.mapContent').removeClass('active');
        $('.mapper').removeClass('active');
    })
   
});