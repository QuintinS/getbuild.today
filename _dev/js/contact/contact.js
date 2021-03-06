/*	=====================================
	Contact Form
	===================================== */
	
function sendContactEmail() {

	var myEmail = $("#ContactEmail").val();
	var myName = $("#ContactName").val();
	var myMessage = $("#ContactMessage").val();
	var mySubject = $("#ContactSubject").val();
	var myCheckbox = $("#ContactNewsletter").is(':checked');
	var myGRecaptcha = $("#g-recaptcha-response").val();

	$.ajax({
	    type: "POST",
	    url: "/contactus.asp",
	    data: { 

	    	buildContactEmail : myEmail,
	    	buildContactName : myName,
	    	buildContactMessage : myMessage,
	    	buildContactSubject : mySubject,
	    	buildContactCheckbox : myCheckbox,
	    	GRecaptchaResponse : myGRecaptcha
	    	
	    },
	    beforeSend: function() {
	    	Framework.UI.loadingOverlay.add({
	    		text: "Sending Message..."
	    	});
	    }
	})
	.success(function(response){

		console.log(response);
	
		myAuth = $(response).find("authentication").text();

		Framework.UI.loadingOverlay.hide();
		
		if (myAuth == "updated") {

			var n = noty({
				
				text: '<span class="glyphicon glyphicon-ok">&nbsp;</span><span class="value"><strong>Thank you!</strong> Your message has been sent.</span>',
				type: "success",
				theme: "relax",
				layout: "bottom",
				timeout: 5000,
				animation: {
					open: "animated fadeInUp",
					close: "animated fadeOutUp",
				}

			});
		
		}
		
		else
		
		{

			var myError = $(response).find("Error").text();

			if (myError === "Captcha not passed") {
				var n = noty({
					text: "Please make sure you have checked the \"I am not a robot\" box and passed the test. We don't want the cyborgs to take over!",
					type: "error",
					theme: "relax",
					layout: "bottomCenter",
					timeout: 5000,
					animation: {
						open: "animated fadeInUp",
						close: "animated fadeOutUp",
					}
				});
			}
		
			
		
		}
		
	})
	.fail(function() {

		Framework.UI.loadingOverlay.hide();
		
		var n = noty({

			text: "<span class='glyphicon glyphicon-remove'>&nbsp;</span><span class='value'>Oops! Something went wrong. Don't worry, it's nothing you did... we're looking into it. Please try again later!</span>",
			type: "error",
			modal: true,
			theme: "relax",
			layout: "center",
			timeout: 5000,
			animation: {
				open: "animated fadeInUp",
				close: "animated fadeOutUp",
			}

		});

	});

}

var validateContactForm = function(){

	$("#ContactForm").validate({

		rules: {
		
			ContactEmail : {
				required: true,
				email:true
			},

			ContactName : {
				required: true
			},
			
			ContactMessage : {
				required: true
			}

		},


		messages : {

			ContactEmail: {
				required: "Please enter your e-mail address.",
				email: "Sorry, your email address is not valid. Please try again!",
			},
			ContactName: "Please enter your name.",
			ContactMessage: "Please enter your message.",

		},

		submitHandler : function(){
			sendContactEmail();
		},
		
		showErrors: generateErrorList,


	});

};

validateContactForm();