$(document).ready(function () {

    //Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    //Slick-slider
    $('#slider').slick({
        autoplay: true,
        arrows: false,
        mobileFirst: true
    });

    //Isotope
    var $isotopeGrid = $('.portfolio-images');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true
    });

    $('.portfolio .filters button').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });

    //Validation
    var form = document.forms.contact;

    $(form).submit(function (e) {
        $('.error').empty();

        var inputs = form.elements;

        for(var i = 0; i < inputs.length; i++) {
            var error = '';

            if (inputs[i].type === 'text' || inputs[i].tagName === 'TEXTAREA') {
                error = validateText(inputs[i]);
            } else if (inputs[i].type === 'email') {
                error = validateEmail(inputs[i]);
            }

            if (error) {
                $(inputs[i]).closest('.input-and-error-wrapper').find('.error').text(error);
            }
        }

        if ($('.error:parent').length > 0) {
            e.preventDefault();
        }
    });

    $('.menu-button').click(function (e) {
        var target = e.target;
        var menuId = $(target).data('menu-id');
        $(menuId).toggle();
    });

    function validateText(input) {
        var min = input.dataset.min,
            max = input.dataset.max,
            value =input.value.trim();

        if (value.length < min) {
            return 'Your input should be not less than ' + min + ' symbols.';
        } else if (value.length > max) {
            return 'Your input should be not longer than ' + max + ' symbols.';
        } else {
            return '';
        }
    }

    function validateEmail(input) {
        var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            value = input.value.trim();

        if (emailRegexp.test(value)) {
            return '';
        } else {
            return 'This is not valid email.';
        }
    }
});