/**
 *   Good practice to let page load first then run jQuery, so it understands the $ jQuery dollar sign
 *   As you made be trying to manipulate something that hasn't fully rendered alongside rest of the HTML
 *   Basics of DOM manipulation
*/
$(document).ready(function() {
    //$("h2").css("text-decoration", "underline");    /underlines all selected <h2> elements
    //$("ul").css("border", "solid 1px #ccc");    /applies solid border to all unordered list elements

    //Using the CSS function isn't the best way, an alternative way to write this as follows.
    $("h2").addClass(".underline");
    $("ul").addClass(".border");

    //At the same time we could also remove the class if so desired
    //$("h2").removeClass(".underline");
    //$("ul").removeClass(".border");
});

