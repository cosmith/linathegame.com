$(document).ready(function() {
	setInterval(addDrop, 100);
	setInterval(dropDrop, 50);
	var maxHeight = $(document).height();

	function addDrop() {
		$(".background").append("<div class='drop' style='top:0px; left:" + (Math.random() * 10000) % $(document).width() + "px; opacity:" + Math.random() + "'><div>");
	};

	function dropDrop() {
		$(".drop").each(function() {
			var self = this;
			$(self).offset({top: $(self).offset().top + 10, left: $(self).offset().left})
			if ($(self).offset().top >= maxHeight) {
				$(self).remove();
			};
		});
	};
});
