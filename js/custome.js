

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

    
    
});