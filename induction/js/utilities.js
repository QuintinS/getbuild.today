var PrintLoadingOverlay = function(options) {
	
	var ReturnHTML = "";

	ReturnHTML += 	'<div class="loading-overlay">';

	if (options !== undefined) {
		if (options.type === "spinner") {

			ReturnHTML += 	'<div class="spinner">';
			ReturnHTML += 		'<div class="dot1"></div>';
			ReturnHTML += 		'<div class="dot2"></div>';
			ReturnHTML += 	'</div>';

		}
		else
		if (options.type === "throbber") {

			ReturnHTML += '<div class="throbber">';
			ReturnHTML +=   '<div class="throbber-container container1">';
			ReturnHTML +=     '<div class="circle1"></div>';
			ReturnHTML +=     '<div class="circle2"></div>';
			ReturnHTML +=     '<div class="circle3"></div>';
			ReturnHTML +=     '<div class="circle4"></div>';
			ReturnHTML +=   '</div>';
			ReturnHTML +=   '<div class="throbber-container container2">';
			ReturnHTML +=     '<div class="circle1"></div>';
			ReturnHTML +=     '<div class="circle2"></div>';
			ReturnHTML +=     '<div class="circle3"></div>';
			ReturnHTML +=     '<div class="circle4"></div>';
			ReturnHTML +=   '</div>';
			ReturnHTML +=   '<div class="throbber-container container3">';
			ReturnHTML +=     '<div class="circle1"></div>';
			ReturnHTML +=     '<div class="circle2"></div>';
			ReturnHTML +=     '<div class="circle3"></div>';
			ReturnHTML +=     '<div class="circle4"></div>';
			ReturnHTML +=   '</div>';
			ReturnHTML += '</div>';

		}

	}

	ReturnHTML += 	'</div>';

	return ReturnHTML;

};