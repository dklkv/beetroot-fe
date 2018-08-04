$(document).ready(function () {

    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    $('#slider').slick({
        autoplay: true,
        arrows: false,
        mobileFirst: true
    });

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
});