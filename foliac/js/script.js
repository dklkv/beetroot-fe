$(document).ready(function() {
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