function getPassword() {

	var myEmail = $("#forgotEmail").val();
	
	$.ajax({
	    type: "POST",
	    url: "/DoLostPass.asp",
	    data: {
	    	forgotEmail: myEmail
	    }
	})
	.success(function(response){
		
		console.log(response);		

		$("#passwordMessage .state-2").fadeIn(250);
		
	})	
	.fail(function() {
		console.log("Forgot Password call has failed.");
	});

}


var validator = $("#forgotpassForm").validate({

	rules: {

		forgotEmail: {
			required: true,
			email: true
		}
		
	},

	messages : {
		forgotEmail: "Please enter a valid e-mail address."
	},

	submitHandler : getPassword,
	
	showErrors: function(errorMap, errorList) {

		$.each(this.successList, function(index, value) {
			return $(value).popover("hide");
		});
	
		return $.each(errorList, function(index, value) {
		
			var _popover;
			console.log(value.message);
			
			_popover = $(value.element).popover({
				trigger: "manual",
				placement: "bottom",
				content: value.message,
				template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
			});
			
			_popover.data("bs.popover").options.content = value.message;
			return $(value.element).popover("show");
			
		});

		
	}


});	