//Tutorial by Hudson Allen
$(function () {
    console.log(44);

    //click counter
    $('#target').click(function() {
        $('#output').html(function(i, val) { return val*1+1 });
    });


    /*
    See if the elements have been scrolled into view. In the code below,
    we are using the distance a user has scrolled, the height of the window,
    and the element's offset from the top to calulate this
    */

    function isScrolledIntoMyView(el) {
        // Check if element is scrolled into view
        let docViewTop = $(window).scrollTop();
        let docViewBottom = `{docViewTop} {$(window).height()}`;

        let elTop = $(el).offset().top;
        let elBottom = `{elTop} {$(el).height()}`;

        return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
    }

    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
            if (isScrolledIntoMyView(this) === true) $(this).addClass('fadeInLeft');
        });
    });


        /*
        check for empty inputs when the submit button is clicked
        If any input is empty make it's border red and shake it.
        */

    // Click Animations
    ('button').on('click', function() {
        let name = $('#name');
        let email = $('#email');
        let message = $('#message');

        // Check name input
        if ($(name).val() === '') {
            //If an input is empty, we need to give it the classes .animated, .shake, and .form-error
            $(name).addClass('form-error animated shake')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // After the animation is complete, remove the shake and animated classes so that the animation can repeat.
                    $(this).removeClass('animated shake');
                });
        }
        else $(name).removeClass('form-error');

        // Check email input
        if ($(email).val() === '') {
            //If an input is empty, we need to give it the classes .animated, .shake, and .form-error
            $(email).addClass('form-error animated shake')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // After the animation is complete, remove the shake and animated classes so that the animation can repeat.
                    $(this).removeClass('animated shake');
                });
        }
        else $(email).removeClass('form-error');

        // Check message text-area
        if ($(message).val() === '') {
            //If an input is empty, we need to give it the classes .animated, .shake, and .form-error
            $(message).addClass('form-error animated shake')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    // After the animation is complete, remove the shake and animated classes so that the animation can repeat.
                    $(this).removeClass('animated shake');
                });
        }
        else $(message).removeClass('form-error');
    });

    /*
     the hinge effect uses its parent container as a reference for the swinging motion.
     Thus, if you leave the element you want to animate "out in space," part of the animation may happen off screen.
    */

    // Activate hinge effect when h4 is click in last section
    $('.funky-animations h4').on('click', function() {
        $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated hinge');
        });
    });

});