var Stripe = {

	StripeHandler: null,

	StripeResponseHandler: function(token) {
		// Use the token to create the charge with a server-side script.
		// You can access the token ID with `token.id`

		Checkout.storage.token = token;

		Stripe.StripeForm.add();
		Stripe.StripeForm.populate();
		Stripe.StripeForm.submit();

	},

	StripeForm: {

		add: function(){
			var StripeForm = document.createElement("form");
			StripeForm.setAttribute("method", "post");
			StripeForm.setAttribute("id", "StripeForm");
			StripeForm.setAttribute("action", "/Stripe/DoStripe.asp");
			StripeForm.setAttribute("style", "display:none");
			document.body.appendChild(StripeForm);
		},

		populate: function(){

			var elements = [];
			var token;
			token = Checkout.storage.token;

			var TokenJSON = JSON.stringify(token);

			$("#StripeForm").append('<input type="hidden" name="JSON" value="' + TokenJSON + '" />');

			$("#StripeForm").append('<input type="hidden" name="card_holder_name" value="' + PaymentGateway.PostData.data.card_holder_name + '" />');
			$("#StripeForm").append('<input type="hidden" name="street_address" value="' + PaymentGateway.PostData.data.street_address + '" />');
			$("#StripeForm").append('<input type="hidden" name="street_address2" value="' + PaymentGateway.PostData.data.street_address2 + '" />');
			$("#StripeForm").append('<input type="hidden" name="city" value="' + PaymentGateway.PostData.data.city + '" />');
			$("#StripeForm").append('<input type="hidden" name="state" value="' + PaymentGateway.PostData.data.state + '" />');
			$("#StripeForm").append('<input type="hidden" name="zip" value="' + PaymentGateway.PostData.data.zip + '" />');
			$("#StripeForm").append('<input type="hidden" name="country" value="' + PaymentGateway.PostData.data.country + '" />');
			$("#StripeForm").append('<input type="hidden" name="email" value="' + PaymentGateway.PostData.data.email + '" />');
			$("#StripeForm").append('<input type="hidden" name="phone" value="' + PaymentGateway.PostData.data.phone + '" />');
			$("#StripeForm").append('<input type="hidden" name="li_0_description" value="' + PaymentGateway.PostData.data.li_0_description + '" />');
			$("#StripeForm").append('<input type="hidden" name="li_1_description" value="' + PaymentGateway.PostData.data.li_1_description + '" />');

			// $("#StripeForm").append($('<input type="hidden" name="stripeToken" />').val(token));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenID" />').val(token.id));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenObject" />').val(token.object));	
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenClientIP" />').val(token.client_ip));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenCreated" />').val(token.created));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenEmail" />').val(token.email));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenLiveMode" />').val(token.livemode));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenType" />').val(token.type));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenUsed" />').val(token.used));
			$("#StripeForm").append($('<input type="hidden" name="stripeTokenVerificationAllowed" />').val(token["verification allowed"]));

			if (Checkout.storage.token.type === "card") {

				// var CardJSON = JSON.stringify(token);
				// $("#StripeForm").append($('<input type="hidden" name="stripeTokenCard" />').val(token.card));
				// $("#StripeForm").append($('<input type="hidden" name="stripeTokenCardJSON" />').val(CardJSON));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Brand" />').val(token.card.brand));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Country" />').val(token.card.country));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_CVCCheck" />').val(token.card.cvc_check));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ExpMonth" />').val(token.card.exp_month));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ExpYear" />').val(token.card.exp_year));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Funding" />').val(token.card.funding));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ID" />').val(token.card.id));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Last4" />').val(token.card.last4));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Name" />').val(token.card.name));
				$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Object" />').val(token.card.object));

			}

			// token.id = document.createElement("input");
			// token.id.setAttribute("name", "token.id");
			// token.id.setAttribute("value", Login.storage.credentials.buildLoginEmail);
			// elements.push(token.id);

			// for (var i = 0; i <= elements.length - 1; i++) {
				// StripeForm.appendChild(elements[i]);
			// }
			

		},

		submit: function(){
			Framework.UI.loadingOverlay.add({text:"Setting up your Website..."});
			document.forms.StripeForm.submit();
		}

	},

	StripeOptions: {

		data: {
			key: null,
			token: null,
			image: null,
			locale: null,
			currency: null,
			panelLabel: null,
			zipCode: null,
			billingAddress: null,
			shippingAddress: null,
			email: null,
			labelOnly: null,
			allowRememberMe: null,
			bitcoin: null,
			alipay: null,
			alipayReusable: null,
			opened: null,
			closed: null
		},

		capture: function(){

			var myAddress = "";
			myAddress += PaymentGateway.PostData.data.street_address + ", ";
			myAddress += PaymentGateway.PostData.data.street_address2 + ", ";
			myAddress += PaymentGateway.PostData.data.city + ", ";
			myAddress += PaymentGateway.PostData.data.state;

			Stripe.StripeOptions.data.token = Stripe.StripeResponseHandler;
			Stripe.StripeOptions.data.key = PaymentGateway.API.Keys.TestPublishable;
			Stripe.StripeOptions.data.image = '/images/stripe-logo.png';
			Stripe.StripeOptions.data.locale = 'auto';
			Stripe.StripeOptions.data.currency = "USD";
			Stripe.StripeOptions.data.panelLabel = null;
			Stripe.StripeOptions.data.zipCode = PaymentGateway.PostData.data.zip;
			// Stripe.StripeOptions.data.billingAddress = myAddress;
			// Stripe.StripeOptions.data.shippingAddress = myAddress;
			Stripe.StripeOptions.data.email = PaymentGateway.PostData.data.email;
			Stripe.StripeOptions.data.labelOnly = null;
			Stripe.StripeOptions.data.allowRememberMe = null;
			Stripe.StripeOptions.data.bitcoin = null;
			Stripe.StripeOptions.data.alipay = null;
			Stripe.StripeOptions.data.alipayReusable = null;
			Stripe.StripeOptions.data.opened = Framework.UI.loadingOverlay.add;
			Stripe.StripeOptions.data.closed = Framework.UI.loadingOverlay.hide;

		},

		clear: function() {

			Stripe.StripeOptions.data.key = null;
			Stripe.StripeOptions.data.token = null;
			Stripe.StripeOptions.data.image = null;
			Stripe.StripeOptions.data.locale = null;
			Stripe.StripeOptions.data.currency = null;
			Stripe.StripeOptions.data.panelLabel = null;
			Stripe.StripeOptions.data.zipCode = null;
			Stripe.StripeOptions.data.billingAddress = null;
			Stripe.StripeOptions.data.shippingAddress = null;
			Stripe.StripeOptions.data.email = null;
			Stripe.StripeOptions.data.labelOnly = null;
			Stripe.StripeOptions.data.allowRememberMe = null;
			Stripe.StripeOptions.data.bitcoin = null;
			Stripe.StripeOptions.data.alipay = null;
			Stripe.StripeOptions.data.alipayReusable = null;
			Stripe.StripeOptions.data.opened = null;
			Stripe.StripeOptions.data.closed = null;

		}
	  
	}

};

var PaymentGateway = {

	ready: false,

	API : {
		Keys: {
			TestPublishable: "pk_test_xAwJMiXYzWYs2FlhcXLVLX3M",
			LivePublishable: "pk_live_i85izWOGIij0CQIqFUFDCXIS",
		}
	},

	templates: {

		printCheckout: function(options){

			if (options.amount === undefined || typeof options.amount !== "string") {
				throw "ArgumentError: Must pass argument 'amount' as type 'string'.";
			}

			myKey = PaymentGateway.API.Keys.TestPublishable;
			myImage = "/images/logo-build-b-large.png";
			myName = "GetBuild.Today";
			myDescription = options.description || null;
			myAmount = options.amount;
			myLocale = options.locale || "auto";

			returnHTML =	'';
			returnHTML +=	'<script';
			returnHTML +=	    ' src="https://checkout.stripe.com/checkout.js"';
			returnHTML +=	    ' class="stripe-button"';
			returnHTML +=	    ' data-key="' + myKey + '"';
			returnHTML +=	    ' data-image="' + myImage + '"';
			returnHTML +=	    ' data-name="' + myName + '"';
			returnHTML +=	    ' data-description="' + myDescription + '"';
			returnHTML +=	    ' data-amount="' + myAmount + '"';
			returnHTML +=	    ' data-locale="' + myLocale + '">';
			returnHTML +=	'</script>';

			return returnHTML;
		}

	},

	PostData: {

		clear: function(){

			PaymentGateway.PostData.data.card_holder_name = null;
			PaymentGateway.PostData.data.street_address = null;
			PaymentGateway.PostData.data.street_address2 = null;
			PaymentGateway.PostData.data.city = null;
			PaymentGateway.PostData.data.state = null;
			PaymentGateway.PostData.data.zip = null;
			PaymentGateway.PostData.data.country = null;
			PaymentGateway.PostData.data.ship_name = null;
			PaymentGateway.PostData.data.ship_street_address = null;
			PaymentGateway.PostData.data.ship_street_address2 = null;
			PaymentGateway.PostData.data.ship_city = null;
			PaymentGateway.PostData.data.ship_state = null;
			PaymentGateway.PostData.data.ship_zip = null;
			PaymentGateway.PostData.data.ship_country = null;
			PaymentGateway.PostData.data.email = null;
			PaymentGateway.PostData.data.phone = null;

		},

		capture: function() {

			var myFullName = "";
			var myAddressLine1 = $("#RegistrationAddressLine1").val();
			var myAddressLine2 = $("#RegistrationAddressLine2").val();
			var myCity = $("#RegistrationCity").val();
			var myRegionName = $("#RegistrationRegion").find("option:selected").text();
			var myCountryName = $("#RegistrationCountry").find("option:selected").text();
			var myPostalCode = $("#RegistrationPostalCode").val();
			var myEmailAddress = $("#emailaddress").val();
			var myPhoneNumber = $("#RegistrationPhoneNumber").val();
			var mySubDomain = $("#RegistrationSubdomain").val();

			myFullName += $("#RegistrationFirstName").val();
			myFullName += " ";
			myFullName += $("#RegistrationLastName").val();

			var ProductName;
			var ProductQuantity;
			var ProductPrice;
			var ProductDuration;
			var ProductRecurrence;

			if (Checkout.storage.PricingPlan.code === "free") {

				ProductName = "Build - 14 Day Trial";
				ProductQuantity = 1;
				ProductPrice = 0;
				ProductDuration = "14 Days";		

			}
			else
			if (Checkout.storage.PricingPlan.code === "monthly") {
				
				ProductName = "Build - Monthly Subscription";
				ProductQuantity = 1;
				ProductPrice = 20.00;
				ProductDuration = "1 Month";
				ProductRecurrence = "1 Month";
			}
			else
			if (Checkout.storage.PricingPlan.code === "yearly") {

				ProductName = "Build - Yearly Subcription";
				ProductQuantity = 1;
				ProductPrice = 150;
				ProductDuration = "12 Months";

			}
			else
			{
				throw "Error: Checkout.storage.PricingPlan.code must be 'free', 'monthly' or 'yearly'.";
			}

			PaymentGateway.PostData.data = {

				card_holder_name : myFullName,
				street_address : myAddressLine1,
				street_address2 : myAddressLine2,
				city : myCity,
				state : myRegionName,
				zip : myPostalCode,
				country : myCountryName,

				ship_name : myFullName,
				ship_street_address : myAddressLine1,
				ship_street_address2 : myAddressLine2,
				ship_city : myCity,
				ship_state : myRegionName,
				ship_zip : myPostalCode,
				ship_country : myCountryName,

				email : myEmailAddress,
				phone : myPhoneNumber,

				li_0_type : null,
				li_0_name : null,
				li_0_description : Checkout.storage.TemplateID,
				li_0_quantity : null,
				li_0_price : null,
				li_0_tangible : null,
				li_0_duration : null,

				li_1_type : null,
				li_1_name : null,
				li_1_description : mySubDomain,
				li_1_quantity : null,
				li_1_price : null,
				li_1_tangible : null,

				product: {
					name: ProductName,
					quantity: ProductQuantity,
					price: ProductPrice,
					duration: ProductDuration,
					recurrance: ProductRecurrence
				}

			};

		},

		data: {

			card_holder_name : null,
			street_address : null,
			street_address2 : null,
			city : null,
			state : null,
			zip : null,
			country : null,

			ship_name : null,
			ship_street_address : null,
			ship_street_address2 : null,
			ship_city : null,
			ship_state : null,
			ship_zip : null,
			ship_country : null,

			email : null,
			phone : null,

			product : null,

			li_0_type : null,
			li_0_name : null,
			li_0_description : null,
			li_0_quantity : null,
			li_0_price : null,
			li_0_tangible : null,
			li_0_duration : null,

			li_1_type : null,
			li_1_name : null,
			li_1_description : null,
			li_1_quantity : null,
			li_1_price : null,
			li_1_tangible : null,

		},

	},

	trigger: function(){

		PaymentGateway.PostData.clear();
		PaymentGateway.PostData.capture();
		Stripe.StripeOptions.capture();

		var myFullName = PaymentGateway.PostData.data.card_holder_name;
		var myStreetAddress1 = PaymentGateway.PostData.data.street_address;
		var myStreetAddress2 = PaymentGateway.PostData.data.street_address2;
		var myCountry = PaymentGateway.PostData.data.country;
		var myState = PaymentGateway.PostData.data.state;
		var myCity = PaymentGateway.PostData.data.city;
		var myZip = PaymentGateway.PostData.data.zip;
		var myEmail = PaymentGateway.PostData.data.email;
		var myPhone = PaymentGateway.PostData.data.phone;
		var myTemplateID = PaymentGateway.PostData.data.li_0_description;
		var mySubDomain = PaymentGateway.PostData.data.li_1_description;

		if (Checkout.storage.PricingPlan.code === "free") {

			Framework.UI.loadingOverlay.add({text:"Setting up your free trial Website..."});

			// $("#RegistrationForm [name='']").val();

			$("#RegistrationForm [name='card_holder_name']").val(myFullName);
			$("#RegistrationForm [name='street_address']").val(myStreetAddress1);
			$("#RegistrationForm [name='street_address2']").val(myStreetAddress2);
			$("#RegistrationForm [name='city']").val(myCity);
			$("#RegistrationForm [name='state']").val(myState);
			$("#RegistrationForm [name='zip']").val(myZip);
			$("#RegistrationForm [name='country']").val(myCountry);

			$("#RegistrationForm [name='email']").val(myEmail);
			$("#RegistrationForm [name='phone']").val(myPhone);

			// $("#RegistrationForm [name='li_1_type']").val();
			// $("#RegistrationForm [name='li_1_name']").val();
			$("#RegistrationForm [name='li_1_description']").val(mySubDomain);
			// $("#RegistrationForm [name='li_1_quantity']").val();
			// $("#RegistrationForm [name='li_1_price']").val();
			// $("#RegistrationForm [name='li_1_tangible']").val();

			// $("#RegistrationForm [name='li_0_type']").val();
			// $("#RegistrationForm [name='li_0_name']").val();
			$("#RegistrationForm [name='li_0_description']").val(myTemplateID);
			// $("#RegistrationForm [name='li_0_quantity']").val();
			// $("#RegistrationForm [name='li_0_price']").val();
			// $("#RegistrationForm [name='li_0_tangible']").val();
			// $("#RegistrationForm [name='li_0_duration']").val();

			// $(document.forms.RegistrationForm.elements).each(function(index, element){
				// console.log(index + " : " + $(element).attr("name") + " == " + $(element).val());
			// });

			document.forms.RegistrationForm.submit();
		}
		else
		{
			
			myOptions = {
				id: Checkout.storage.PricingPlan,
				code: Checkout.storage.PricingPlan.code,
				name: "Build",
				description: Checkout.storage.PricingPlan.description + " Membership",
				amount: Checkout.storage.PricingPlan.amount * 100,
				token: Stripe.StripeResponseHandler,
				image: Stripe.StripeOptions.data.image,
				currency: Stripe.StripeOptions.data.currency,
				email: PaymentGateway.PostData.data.email
			};

			Stripe.StripeHandler.open(myOptions);
			// Stripe.StripeHandler.open(Stripe.StripeOptions.data);

			$(window).on("DOMSubtreeModified", function(event){
				Framework.UI.loadingOverlay.hide();
				$(window).off("DOMSubtreeModified");
			});

		}

		

	},

	successRedirect : function(options){
		console.log(options);
	},

	reset: function(){
		PaymentGateway.PostData.clear();
		// PaymentGateway.PostData.capture();
	}

};

var Checkout = {

	storage: {
		TemplateID: null,
		PricingPlan: {
			id: null,
			code: null,
			name: null,
			description: null,
			amount: null
		},
		token: null
	},

	validateForms : function() {

		$("#RegistrationForm").validate({

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

				emailaddress: {
					required: true, 
					email:true,
					// remote: {
						// url: "/Testmail.asp",
						// type: "post",
						// url: "/json/generic-success.json",
						// type: "get"
					// }
				},

				fqdn: {

					pattern: "[A-Za-z0-9\-]{0,61}",
					required: true,	
					remote: {
						url: "/domains/subdomains/CheckDomains.asp",
						type: "post"
					}

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
				fqdn : {
					pattern: "Sorry, this isn't a valid subdomain!",
					required: "Please enter the subdomain you would like to use.",
					remote: "Sorry, this subdomain has already been taken!",
				},

			},

			submitHandler : function(form){

				// console.log("submitHandler()");
				
				// PaymentGateway.trigger();

				var myData = {
					fqdn : ($("#RegistrationSubdomain").val() + ".usebuild.co")
				};

				$.ajax({
					// url: "/json/true.json",
					url: "http://www.getbuild.today/Domains/Subdomains/checkdomains.asp",
					type: "post",
					beforeSend: function(){
						Framework.UI.loadingOverlay.add({text:"Checking Domain Availability..."});
					},
					data : myData
				})
				.success(function(data){

					var myAuth = data;

					console.log(data);
					
					if (myAuth === "true" || myAuth === true) {
						PaymentGateway.trigger();
					}
					if (myAuth === "false" || myAuth === false) {

						Framework.UI.loadingOverlay.hide();

						var n = noty({
							layout: 'bottomCenter',
							theme: 'relax',
							text: "Sorry, that subdomain is already taken.",
							type: "error",
							animation: {
								open: "animated fadeInUp",
								close: "animated fadeOut",
							},
							timeout: 5000
						});

					} 

				})
				.fail(function(){
					// utilities.createErrorPopover($("#RegistrationSubdomain"), "Sorry, something went wrong.");
				});

				return false;

				
				
			},

			errorClass: "error",
			validClass: "valid",

			showErrors: generateErrorList,

		});

	},



	assignEventListeners: function(){

		$("[data-action='SelectPricingPlan']").on("click", Checkout.eventHandlers.SelectPricingPlan);

		$(window).on('popstate', function() {
			Stripe.StripeHandler.close();
		});

		$(window).on("charge.succeeded", function(e){
			console.log("Charge Succeeded.");
		});

	},

	eventHandlers: {

		SelectPricingPlan : function(event) {

			var PricingPlan = $(event.currentTarget).closest(".PricingPlan");
			var PricingPlanID = PricingPlan.attr("id");
			var PricingPlanName = PricingPlan.find(".PricingPlanTitle").text();
			var PricingPlanDescription = PricingPlan.find(".PricingPlanDescription").text();
			var PricingPlanAmount = PricingPlan.attr("data-amount").toString();

			if (PricingPlanID === "PricingPlanFree") {

				Checkout.storage.PricingPlan = {
					id: PricingPlanID,
					code: "free",
					name: "GetBuild.Today",
					description: PricingPlanName,
					amount: PricingPlanAmount
				};

			}
			else
			if (PricingPlanID === "PricingPlanMonthly") {

				Checkout.storage.PricingPlan = {
					id: PricingPlanID,
					code: "monthly",
					name: "GetBuild.Today",
					description: PricingPlanName,
					amount: PricingPlanAmount
				};

			}
			else
			if (PricingPlanID === "PricingPlanYearly") {

				Checkout.storage.PricingPlan = {
					id: PricingPlanID,
					code: "yearly",
					name: "GetBuild.Today",
					description: PricingPlanName,
					amount: PricingPlanAmount
				};

			}
			else
			{
				throw "Invalid Pricing Plan Selected.";
			}

			// document.forms.RegistrationForm.submit();

		},

		isCheckoutReady: function(){
			if (PaymentGateway.ready === true) {
				Framework.UI.loadingOverlay.hide();
				return true;
			}
			else
			{
				return false;
			}
		}

	},

	reset: function(){

		Checkout.storage.TemplateID = utilities.getQueryStringVars().templateid;
		Checkout.validateForms();
		Checkout.assignEventListeners();
		$("#StripeForm").remove();

	},

};

var utilities = {

	getQueryStringVars : function () {
		a = window.location.search.substr(1).split('&');
		if (a === "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i) {
			var p = a[i].split('=', 2);
			if (p.length == 1)
				b[p[0]] = "";
			else
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	},

	createErrorPopover : function(element, text){

		var _popover;
					
		_popover = $(element).popover({
			trigger: "manual",
			placement: "bottom",
			content: text,
			template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
		});
		
		_popover.data("bs.popover").options.content = text;
		return $(element).popover("show");

	}

};

Checkout.reset();
PaymentGateway.reset();

$(document).ready(function(){
	$.crs();
});

$(window).load(function(){

	Stripe.StripeHandler = StripeCheckout.configure({
	    key: PaymentGateway.API.Keys.TestPublishable,
	    locale: "auto",
	    token: Stripe.StripeResponseHandler
	});

	PaymentGateway.ready = true; // Remove after testing
	Checkout.eventHandlers.isCheckoutReady();

});