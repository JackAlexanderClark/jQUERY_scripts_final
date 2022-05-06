/*$('p').click(function () {
    $('p').slideToggle('slow');
});
*/

// Using the keyword 'this' to illustrate that it's THIS clicked paragraph not all paragraphs
$('button')mouseenter(function () {
    $(this).removeClass('makeRed').addClass('makeBlue');
});

$('button')mouseleave(function () {
    $(this).removeClass('makeBlue').addClass('makeRed');
});



