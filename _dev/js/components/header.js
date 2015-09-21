var BuildHeader = function() {

	var reset = function () {
		attachEventListeners();
	};

	var toggleNavbar = function(event) {
		
		isCollapsed = $("#BuildHeader .BuildHeaderMenu").hasClass("collapsed");
		
		if (isCollapsed === true) {
			$("#BuildHeader .BuildHeaderMenu").removeClass("collapsed").addClass("expanded");
		}
		else
		if (isCollapsed === false) {
			$("#BuildHeader .BuildHeaderMenu").removeClass("expanded").addClass("collapsed");
		}
		
	};

	var attachEventListeners = function() {
		$("body").on("click", "[data-action='ToggleNavbar']", toggleNavbar);
	};

	var onClickBuildWebsiteNow = function() {
		console.log("Build a Website Now");
	};

	reset();

}; //

var myBuildHeader = new BuildHeader();

