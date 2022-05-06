/**
 *   Good practice to let page load first then run jQuery, so it understands the $ jQuery dollar sign
 *   As you made be trying to manipulate something that hasn't fully rendered alongside rest of the HTML
 *   Basics of DOM manipulation
*/

/*
commented out code 
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

// Custom jQuery event and event handler, triggers an interaction on click then the function () will be called.
$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
}); 
// Examples of jquery events
$('p').click(function(){
	$('p').css('color', 'red');
});

$('h2').hover(function(){
	$('h2').css('background', 'lightblue');
});

 $(".card-panel").mouseenter(function(){
    $("body").css("background-color", "black"); 
});

$(".card-panel").mouseleave(function(){
    $("body").css("background-color", "#e1e2e2"); 
});

$(".button").on(function() {
    $("#icon1").show('slow');
    $("#icon2").show('medium');
    $("#icon3").show('fast');
    $("#icon4").show(1000);
    $("#icon5").hide();
    $("#icon6").fadeIn(1000);
    $("#icon6").fadeOut(1000);
    //FadeTo takes two parameters, the speed in ms and the opacity between 0-1
    $("#icon7").fadeTo(1000, 0.5);
});

// Written event handler to click on all paragraphs, this
$( "p" ).click(function() {
    $( this ).slideUp();
  });

$("#card-panel-1").click(function() {
    $("#card-panel-1").hide("slow");
});

$("#button-card-1").click(function() {
    $("#par-1").slideToggle(750);
});

// Mouse enter and leave functions
$("#button-card-1").mouseenter(function() {
    $("#par-1").fadeTo(200, 0.5);
});

$("#button-card-1").mouseleave(function() {
    $("#par-1").fadeTo(200, 1);
});

//Method chaining 
$("#myButton").removeClass("blueBox").addClass("border");
$("p").css("color", "blue").slideUp(2000).slideDown(2000);
$("a").attr("href", "http://www.example.com");

// Method chaining and adding/removing borders
$("button").mouseenter(function(){
	$('button').removeClass("make-red").addClass("make-border");
});

$("button").mouseleave(function(){
	$("button").removeClass("make-border").addClass("make-red");
});


// Method chaining to add effects to text that add/removes it when a button is clicked upon
$("#button-card-1").click(function() {
    $("#par-1").hide(2000).show(2000);
});

//$("#button-card-2").click(function() {
//    $("#par-2").fadeOut(1000).fadeIn(1000);
//});

*/