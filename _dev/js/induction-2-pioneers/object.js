var FormPostLocation = "";

var CaptureFormData = function() {

	var myFullName = "";
	var myFirstName = $("#RegistrationFirstName").val();
	var myLastName = $("#RegistrationLastName").val();

	var myAddressLine1;
	var myAddressLine2;
	var myCity;
	var myRegionName;
	var myCountryName;
	var myPostalCode;
	var myEmailAddress;
	var myPhoneNumber;
	var mySubDomain;

	var ProductName;
	var ProductQuantity;
	var ProductPrice;
	var ProductDuration;
	var ProductRecurrence;

	var Product2Name;
	var Product2Quantity;
	var Product2Price;
	var Product2Duration;
	var Product2Recurrence;

	var myTemplateID = getParameterByName("templateid");

	if (typeof myTemplateID !== "string") {
		location.href="/pioneers/getstarted/index.html" + "?" + "nbCodes=ind-w-001";
		return;
	}

	myFullName += myFirstName;
	myFullName += " ";
	myFullName += myLastName;

	myAddressLine1 = $("#RegistrationAddressLine1").val();
	myAddressLine2 = $("#RegistrationAddressLine2").val();
	myCity = $("#RegistrationCity").val();
	myRegionName = $("#RegistrationRegion").find("option:selected").text();
	myCountryName = $("#RegistrationCountry").find("option:selected").text();
	myPostalCode = $("#RegistrationPostalCode").val();
	myEmailAddress = $("#emailaddress").val();
	myPhoneNumber = $("#RegistrationPhoneNumber").val();
	mySubDomain = $("#RegistrationSubdomain").val();

	FormPostLocation = "/pioneers/RedeemVoucher.asp";

	ProductName = "Build - Pioneer Nation 1 Year Free Membership";
	ProductQuantity = 1;
	ProductPrice = 0;
	ProductDuration = "1 Year";

	Product2Name = mySubDomain;

	// $("#RegistrationForm [name='li_0_type'").val();
	// $("#RegistrationForm [name='li_0_name'").val();
	$("#RegistrationForm [name='li_0_description'").val(myTemplateID);
	$("#RegistrationForm [name='li_0_quantity'").val(ProductQuantity);
	$("#RegistrationForm [name='li_0_price'").val(ProductPrice);
	$("#RegistrationForm [name='li_0_tangible'").val("N");
	$("#RegistrationForm [name='li_0_duration'").val(ProductDuration);

	// $("#RegistrationForm [name='li_1_type'").val();
	// $("#RegistrationForm [name='li_1_name'").val();
	$("#RegistrationForm [name='li_1_description'").val(Product2Name);
	$("#RegistrationForm [name='li_1_quantity'").val(Product2Quantity);
	$("#RegistrationForm [name='li_1_price'").val(Product2Price);
	$("#RegistrationForm [name='li_1_tangible'").val("N");
	$("#RegistrationForm [name='li_1_duration'").val(Product2Duration);

	$("#RegistrationForm [name='first_name']").val(myFirstName);
	$("#RegistrationForm [name='last_name']").val(myLastName);
	$("#RegistrationForm [name='country']").val(myCountryName);
	$("#RegistrationForm [name='email']").val(myEmailAddress);
	
};


var ValidateStep2Form = function() {

	validator = $("#RegistrationForm").validate({

		rules: {
			
			RegistrationFirstName : { required: true	},
			RegistrationLastName : { required: true	},
			RegistrationAddressLine1 : { required: true	},
			// RegistrationAddressLine2 : { required: true	},
			RegistrationCity : { required: true	},
			RegistrationPostalCode : { required: true	},
			RegistrationCountry : { required: true	},
			RegistrationRegion : { required: true	},
			RegistrationPhoneNumber : { required: true	},
			RegistrationVoucher : { required: true	},

			emailaddress: {
				required: true, 
				email:true,
				remote: {
					url: "/Testmail.asp",
					type: "post"
				}
			},

			RegistrationSubdomain: {

				pattern: "[A-Za-z0-9\-]{0,61}",
				required: true

			}
	
		},

		messages : {

			RegistrationFirstName : "Please enter your first name.",
			RegistrationLastName : "Please enter your last name.",
			RegistrationAddressLine1 : "Please enter your address.",
			RegistrationAddressLine2 : "Please enter your address.",
			RegistrationCity : "Please enter your city.",
			RegistrationPostalCode : "Please enter your postal code.",
			RegistrationCountry : "Please select your country.",
			RegistrationRegion : "Please select your region.",
			RegistrationPhoneNumber : "Please enter your phone number.",
			emailaddress : {
				required: "Please enter your e-mail address.",
				remote: "Sorry, this e-mail address has already been taken!",
			},
			RegistrationSubdomain : {
				pattern: "Sorry, this isn't a valid subdomain!",
				required: "Please enter the subdomain you would like to use.",
				remote: "Sorry, this subdomain has already been taken!",
			},
			RegistrationVoucher : {
				required: "Please enter your voucher code."
			}

		},

		submitHandler : function(form){

			$.ajax({
				url: "/domains/subdomains/CheckDomains.asp",
				type: "post",
				data: {
					fqdn : ($("#RegistrationSubdomain").val() + ".usebuild.co")
				}
			})
			.success(function(data){

				var myAuth = data;
				
				if (myAuth === "true" || myAuth === true) {
					TriggerCheckout();
				}
				if (myAuth === "false" || myAuth === false) {
					createErrorPopover($("#RegistrationSubdomain"), "Sorry, that subdomain is already taken.");
				} 


			})
			.fail(function(){
				// createErrorPopover($("#RegistrationSubdomain"), "Sorry, something went wrong.");
			});

			
		},

		errorClass: "error",
		validClass: "valid",

		showErrors: generateErrorList,

	});

};


var TriggerCheckout = function() {
	Framework.UI.loadingOverlay.add({text:"Setting up your free website..."});
	CaptureFormData();
	document.forms.RegistrationForm.submit();
};

/*	--------------------------
	Utilities
	-------------------------- */

	var createErrorPopover = function(element, text){

		var _popover;
					
		_popover = $(element).popover({
			trigger: "manual",
			placement: "bottom",
			content: text,
			template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
		});
		
		_popover.data("bs.popover").options.content = text;
		return $(element).popover("show");

	};

	function getParameterByName(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

/*	--------------------------
	Event Listeners
	-------------------------- */

$(document).ready(function(){
	$.crs();
	ValidateStep2Form();
});