// Javascript for this project to be introduced
// later in the course after Hipsteer project.

// Intro JS & Jquery
// -----------------

// start by doing something like alert
// alert("hello");
// confirm("Is this working?");
// prompt("What is your name?");

// then show some jquery
// $("nav").html("hello");
// $("header").css("background", "red");

// always talk about events in the following way
// $("section img")
// $("section img").on();
// $("section img").on("click");
// $("section img").on("click", function () {});
// then separate out the curly braces

// Explain how we use a jquery selector and a click event. 
$('.trigger').on('click', function() {

	// Use Jquery slide toggle function to animate
	// the navigation links.
	$('nav').slideToggle('slow');

	// Prevent the browser page from trying to
	// follow the # link (may not be needed).
	return false;
});
