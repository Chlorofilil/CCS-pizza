(function($){
    $(function() {
        // Scroll k sekciam

        $(".jq--scroll-our-pizza").click(function() {
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top }, 1000);
        });

        $(".jq--scroll-about-pizza").click(function() {
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top }, 1500);
        });
        
        $(".jq--scroll-reference").click(function() {
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top }, 1500);
        });
        
        $(".jq--scroll-foto-gallery").click(function() {
            $("html, body").animate({scrollTop: $(".jq--foto-gallery").offset().top }, 1500);
        });

        $(".jq--scroll-contact-form").click(function() {
            $("html, body").animate({scrollTop: $(".jq--contact-form").offset().top }, 1500);
        });

        // Buttons scroll

        $(".jq--scroll-buttom-first").click(function() {
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top }, 1000);
        });
        
        $(".jq--scroll-buttom-second").click(function() {
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top }, 1500);
        });

        /* mobile navigation */

        $(".jq--nav-icon").click(function() {

            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();

        });

        /* Podmienky */

        $(".jq--img-hamburger").click(function() {
            if($(".jq--img-hamburger").attr("src") == "Img/hamburgerMenu.png"  )

            {
                $($(".jq--img-hamburger").attr("src", "img/crossMenu.png") );
            }
            else
            {
                $($(".jq--img-hamburger").attr("src", "Img/hamburgerMenu.png") );
            }
        });

        
    });
})(jQuery);