/*!
 * JS related to site navigation
 * Licensed under Chybre&Co ® 
 */


$(document).ready(function() {
	$("#nav-side li").click(function() {
		var id = $(this).find("a").attr("id");
		$("body").scrollTo(id, 	200);
	})
})
