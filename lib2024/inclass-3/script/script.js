window.onload = init;

function init() {

	// This will show the text with class 'content'
	$(".show").click(function() {
		$(".content").show();
	});

	// This will hide the text with class 'content'
	$(".hide").click(function() {
		$(".content").hide();
	});

	// This will change the font-size to 12px
	$(".small").click(function() {
		$(".content").css("font-size", "12px");
	});

	// This will change the font-size to 48px
	$(".big").click(function() {
		$(".content").css("font-size", "48px");
	});

	// This will change the background-color to blue
	$(".blue").click(function() {
		$(".content").css("background-color", "#C5CAE9");
	});

	// This will change the background-color to red
	$(".red").click(function() {
		$(".content").css("background-color", "#ffa291");
	});

}