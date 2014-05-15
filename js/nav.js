/*!
 * JS related to site navigation
 * Licensed under Chybre&Co ® 
 */


$(document).ready(function() {
	// Init nav menu on the right
	$("#nav-side li").click(function() {
		var id = $(this).find("a").attr("id");
		$("body").scrollTo(id, 	200);
	});

	// Init slick carousel
	$('.screenshots').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
})
