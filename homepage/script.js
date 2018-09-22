$(document).ready(function () {

    //Smooth scroll
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    //Isotope
    var $grid = $('.isotope-grid');

    $grid.isotope({
        itemSelector: '.grid-item',
        masonry: {
            gutter: 10
        }
    });

    $('.filter-menu').on('click', 'a', function(e) {
        e.preventDefault();

        $(e.delegateTarget).find('li').removeClass('active');
        $(this).closest('li').addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});