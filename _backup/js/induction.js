var ShowLoadingOverlay = function() {

	if ($("body > .loading-overlay").length === 0) {

		$("body").prepend(PrintLoadingOverlay({type: "throbber"}));
		$("body > .loading-overlay").hide();
		$("body > .loading-overlay").fadeIn(500);
		
	}

};

var HideLoadingOverlay = function() {

	if ($("body > .loading-overlay").length >= 0) {

		$("body > .loading-overlay").fadeOut(500, function(){
			$(this).remove();
		});

	}

};