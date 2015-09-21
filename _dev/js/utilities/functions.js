var generateErrorList = function(errorMap, errorList) {

	$.each(this.successList, function(index, value) {
		$(value).removeClass("error").addClass("valid");
		return $(value).popover("hide");
	});

	return $.each(errorList, function(index, value) {
	
		var _popover;
		console.log(value.message);
		
		_popover = $(value.element).popover({
			trigger: "manual",
			placement: "bottom",
			content: value.message,
			template: "<div class=\"popover error\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
		});
		
		_popover.data("bs.popover").options.content = value.message;

		$(_popover).closest(".form-group").find("input").addClass("error");

		return $(value.element).popover("show");
		
	});

	
};

var randomNumber = function(multiple) {
	return Math.round(Math.random() * multiple);
};

var isScrolledIntoView = function(elem) {
 
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    
};

var BuildNotification = function(options) {

	if (options === undefined) {
		throw "ArgumentError: must specify 'options'.";
	}
	if (options.text === undefined) {
		throw "ArgumentError: must specify 'options.text'.";
	}

	var $options = options;

	var $defaults = {
	    layout: 'bottom',
		theme: 'defaultTheme', // or 'relax'
		type: 'alert',
		text: '', // can be html or string
		dismissQueue: true, // If you want to use queue feature set this true
		template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
		animation: {
		    open: {height: 'animate fadeInUp'}, // or Animate.css class names like: 'animated bounceInLeft'
		    close: {height: 'animate fadeOutUp'}, // or Animate.css class names like: 'animated bounceOutLeft'
		},
		timeout: false, // delay for closing event. Set false for sticky notifications
		force: false, // adds notification to the beginning of queue when set to true
		modal: false,
		maxVisible: 5, // you can set max visible notification for dismissQueue true option,
		killer: false, // for close all notifications before show
		closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
		callback: {
		    onShow: function() {},
		    afterShow: function() {},
		    onClose: function() {},
		    afterClose: function() {},
		    onCloseClick: function() {},
		},
		buttons: false // an array of buttons
	};

	for (var property in $defaults) {
		if ($options.hasOwnProperty(property) === false) {
			$options[property] = $defaults[property];
		}
	}

	console.log($options);

	var n = noty($options);

};
