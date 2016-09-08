
var APICore = "http://getbuild.mydevsite.online";
var APIAuth = "http://auth.mydevsite.online";
// var APICore = "";

var API = {

	Locations: {

		CheckEmail: APICore + "/user/CheckUser",
		CheckDomain: APICore + "/Induction/FQDNCheck",
		UserCreate: APICore + "/Induction/Create",
		
		Login: APIAuth + "/Token",


	}

};

var Stripe = {

	id: "Stripe",

	Keys: {
		TestPublishable: "pk_test_xAwJMiXYzWYs2FlhcXLVLX3M",
		LivePublishable: "pk_live_i85izWOGIij0CQIqFUFDCXIS",
	},

	Storage: {

		Token: null,
		Coupons: [],
		Plans: null,
		// Customer: {},
		// Charge: {},
		// Affiliate: {},
		// Invoice: {},
		// Balance: {},
		// Event: {},

	},

	API: {

		Locations: {

			PlanList: APICore + "/Stripe/Plan",
			CouponGet: APICore + "/Stripe/Coupon",
			

		},

		getCoupon: function() {

			var myCouponId = $("#CouponCode").val();

			$.ajax({
				url: Stripe.API.Locations.CouponGet + "/" + myCouponId,
				beforeSend: function() {
					
					$("#CouponCode").prop("disabled", true);

					$("#CouponSubmitButton")
						.prop("disabled", true)
						.removeClass("btn-primary")
						.addClass("btn-default");

					$("#CouponSubmitButton").closest(".form-group").find(".form-group")
						.addClass("has-feedback has-info")
						.append('<span class="glyphicon glyphicon-refresh spinning form-control-feedback" aria-hidden="true"></span>');

				},
				success: function(data) {

					var myCoupon = data;
					var myCouponID = data.id;

					var existingCouponID;

					
					if (Checkout.Storage.PaymentGateway.Storage.Coupons.length === 0) {
						applyCoupon();
					}
					else
					if (Checkout.Storage.PaymentGateway.Storage.Coupons.length > 0) {

						for (var i = 0; i < Checkout.Storage.PaymentGateway.Storage.Coupons.length; i++) {

							console.log(i);

							existingCouponID = Checkout.Storage.PaymentGateway.Storage.Coupons[i].id;

							if (myCouponID === existingCouponID) {
								Framework.UI.NotificationBanner.fire({type: "warning", text: "Sorry, this coupon has already been applied."})
								return;
							}

						}

						applyCoupon();

					}
					
					function applyCoupon(){

						Checkout.Storage.PaymentGateway.Storage.Coupons.push(myCoupon);
						Checkout.Functions.addCoupon(myCoupon);
						Checkout.Functions.calculatePaymentTotals();
						Framework.UI.NotificationBanner.fire({type: "success", text: "Coupon applied!"})

					}

				},
				error: function() {
					Framework.UI.NotificationBanner.fire({type: "error", text: "Sorry, your coupon code is not valid."})
				},
				complete: function() {

					$("#CouponCode").prop("disabled", false);
					$("#CouponCode").val("");

					$("#CouponSubmitButton")
						.prop("disabled", false)
						.addClass("btn-primary")
						.removeClass("btn-default");

					$("#CouponSubmitButton").closest(".form-group").find(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

				}
			});

		},

		getPlans: function() {

			$.ajax({
				url: Stripe.API.Locations.PlanList,
				headers: { 
			        Accept : 'Accept: application/json'
			    },
				success: function(data){
					Checkout.Storage.PaymentGateway.Storage.Plans = data;
					Checkout.Storage.PaymentGateway.Functions.populatePlans();
				}
			})
		},

	},

	configure: function() {

		Stripe.StripeHandler = StripeCheckout.configure({

		    key: Stripe.Keys.TestPublishable,
		    token: Stripe.StripeResponseHandler,

		    locale: "auto",
		    image: "/images/stripe-logo.png",
		    name: "Build",
		    description: Checkout.Storage.Plan.name,
		    amount: Checkout.Storage.Plan.amount,

		    email: Checkout.Storage.Billing.RegistrationEmailAddress,

		    opened: function() {
		    	
		    },

		    closed: function() {
		    	
		    },


		});

	},

	fire: function() {

		Framework.UI.loadingOverlay.add({
			text: "Contacting Stripe..."
		});

		Stripe.StripeHandler.open();

	},

	StripeHandler: null,

	StripeResponseHandler: function(token) {
		
		// Use the token to create the charge with a server-side script.
		// You can access the token ID with `token.id`

		Stripe.Storage.token = token;

		Checkout.API.createUser();
		
		Framework.UI.loadingOverlay.add({
			text: "Setting up your Website..."
		});

	},

	addEventListeners: function() {

		$(window).on('popstate', function() {
			Stripe.StripeHandler.close();
		});

		$(window).on("charge.succeeded", function(e){
			console.log("Charge Succeeded.");
		});

	},

	Functions: {

		populatePlans: function() {

			var myPlans = Checkout.Storage.PaymentGateway.Storage.Plans;
			var myHTML = "";

			for (var i = 0; i < myPlans.length; i++) {

				myHTML = Checkout.Templates.printPricingPlan(myPlans[i]) + myHTML ;
				
			}

			$("#pricingplan-container").empty();
			$("#pricingplan-container").html(myHTML);

		},

	},

	reset: function() {

		Stripe.Storage.token = null;
		Stripe.Storage.Coupon = [];
		Stripe.Storage.Affiliate = null;
		Stripe.Storage.Customer = null;
		Stripe.Storage.Charge = null;
		Stripe.Storage.Invoice = null;
		Stripe.Storage.Balance = null;
		Stripe.Storage.Event = null;

		Stripe.addEventListeners();

	}

};

var Checkout = {

	Storage: {

		TemplateID: null,

		EMailAvailable: false,

		PricingPlan: {
			
			id: null,
			code: null,
			name: null,
			description: null,
			amount: null

		},

		Billing: {},

		Plans: null,

		Plan: {
			"name": null,
			"currency": null,
			"created": null,
			"amount": null,
			"interval": null,
			"interval_count": null,
			"livemode": null,
			"statement_descriptor": null,
			"trial_period_days": null,
			"metadata": {
			  "description": null,
			  "tagline": null,
			},
			"id": null,
		},

		PaymentGateway: null,

		Currency: currency.list.USD,

	},

	API: {

		captureCreateUserData: function() {

			// var myCustomerID = typeof Stripe.Storage.Customer.id === "undefined" ? null : Stripe.Stripe.Customer.id

			// Create basic user object
			var returnData = {

			  "Email": Checkout.Storage.Billing.RegistrationEmailAddress,
			  "FirstName": Checkout.Storage.Billing.RegistrationFirstName,
			  "LastName": Checkout.Storage.Billing.RegistrationLastName,
			  "FormalTitle": Checkout.Storage.Billing.RegistrationTitle,
			  "CompanyName": Checkout.Storage.Billing.RegistrationCompanyName,
			  "DateOfBirth": Checkout.Storage.Billing.RegistrationBirthDate,
			  "Country": Checkout.Storage.Billing.RegistrationCountry,
			  
			  "Address": 
			  	Checkout.Storage.Billing.RegistrationAddressLine1 + "\n" +
			  	Checkout.Storage.Billing.RegistrationAddressLine2 + "\n" +
			  	Checkout.Storage.Billing.RegistrationCity + "\n" +
			  	Checkout.Storage.Billing.RegistrationPostalCode + "\n" +
			  	Checkout.Storage.Billing.RegistrationCountry,
			  	// Checkout.Storage.Billing.RegistrationRegion + "\n" +

			  "BillingAddress": 
			  Checkout.Storage.Billing.RegistrationAddressLine1 + "\n" +
			  	Checkout.Storage.Billing.RegistrationAddressLine2 + "\n" +
			  	Checkout.Storage.Billing.RegistrationCity + "\n" +
			  	Checkout.Storage.Billing.RegistrationPostalCode + "\n" +
			  	Checkout.Storage.Billing.RegistrationCountry,
			  	// Checkout.Storage.Billing.RegistrationRegion + "\n" +
			  
			  "FQDN": Checkout.Storage.Domain.subdomain + ".usebuild.co",
			  
			  "AgreeTerms": $("#RegistrationAgreeTerms").is(":checked"),
			  "TemplateId": Checkout.Storage.TemplateID,
			  "ReferalId": Checkout.Storage.ReferralID,

			  // "PaymentGateway": Checkout.Storage.PaymentGateway.id,
			  // "PaymentTokenId": Stripe.Storage.token,
			  "PaymentPlanId": Checkout.Storage.Plan.id,

			}

			// Append charge object for selected payment gateway

			switch (Checkout.Storage.PaymentGateway.id) {
				
				case "Stripe":
					returnData.StripeCharge = {
						"amount": Checkout.Storage.Plan.amount,
						"currency": Checkout.Storage.Currency.code || "usd",
						// "customer": myCustomerID,
						"Token": Stripe.Storage.token.id,
						"description": Checkout.Storage.Plan.name,
						"metadata": {},
						"ChargeNow": true,
						"statement_descriptor": Checkout.Storage.Plan.name,
						"receipt_email": Checkout.Storage.Billing.RegistrationEmailAddress,
						"destination": null,
						"application_fee": null,
						"shipping": null
					  }
					break;

			}

			return returnData;

		},

		createUser: function() {

			var myUserData = Checkout.API.captureCreateUserData();

			var myData = JSON.stringify(myUserData);

			$.ajax({
				url: API.Locations.UserCreate,
				headers: {},
				contentType: "application/json",
				data: myData,
				method: "post",
				success: function() {

				},
				error: function() {
					Framework.UI.NotificationBanner.fire({type: "error"});
					Framework.UI.loadingOverlay.hide();
				},
			});

		}

	},

	Functions: {

		websiteSignupLogin: function() {

			var myData = {
				grant_type: 'password',
			    username: $("#email-exists-message [data-content='EmailAddress']").text(),
			    password: $("#email-exists-message #WebsiteSignupLoginPassword").val(),
			};

			$.ajax({
				url: API.Locations.Login,
				data: myData,
				method: "POST",
				headers: {
					Accept: "application/json"
				},
				dataType: "json",
				beforeSend: function() {

					Framework.UI.loadingOverlay.add({
						text: "Logging In..."
					});

				},
				success: function(data) {

					console.log(data);

					// sessionStorage.setItem(tokenKey, data.access_token);

					// var myURL = data.url;
					// location.href = myURL;

				},
				error: function() {
					Framework.UI.loadingOverlay.hide();
				}
			});

		},

		keyupDelay: (function(){

		  var timer = 0;

		  return function(callback, ms){
		    clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		  };

		})(),



		addCoupon: function(coupon) {

			console.log(coupon);

			var myCoupon = coupon;
			var myCouponType;
			var myCouponDiscount;
			var myDiscount;
			var myClass;
			
			if (myCoupon.percent_off === null && myCoupon.amount_off !== null) {
				myCouponType = "amount";
			}
			else
			if (myCoupon.percent_off !== null && myCoupon.amount_off === null) {
				myCouponType = "percentage";
			}
			else
			{
				return;
			}

			if (myCouponType === "amount") {
				myDiscount = Number(coupon.amount_off / 100).toFixed(2);
				myClass = "payment-line-coupon-amount";
			}
			else
			if (myCouponType === "percentage") {
				myDiscount = coupon.percent_off
				myClass = "payment-line-coupon-percentage";
			}

			var myCouponLine = Checkout.Templates.printPaymentLine({
				type: "coupon",
				label: "Coupon - " + myCoupon.id,
				couponType: myCouponType,
				value: myDiscount,
				class: ""
			});

			if (myCouponType === "percentage") {
				$("#PaymentStatementTable tbody").prepend(myCouponLine);
			}
			else
			if (myCouponType === "amount") {
				$("#PaymentStatementTable tbody").append(myCouponLine);
			}
			

		},

		populatePayment: function() {

			var table = $("#PaymentStatementTable");
			var tableHead = table.find("thead");
			var tableBody = table.find("tbody");
			var tableFoot = table.find("tfoot");
			
			var planOptions;

			tableHead.empty();
			tableBody.empty();
			tableFoot.empty();

			switch (Checkout.Storage.PaymentGateway.id) {
				case "Stripe":
					planOptions = {
						type: "plan",
						label: "Build - " + Checkout.Storage.Plan.name,
						value: Number(Checkout.Storage.Plan.amount / 100).toFixed(2),
					}
			}

			var myPlanLine = Checkout.Templates.printPaymentLine(planOptions);
			tableHead.append(myPlanLine);

			var myTotalLine = Checkout.Templates.printPaymentLine({
				type: "total",
				label: "Total",
				value: Number(Checkout.Storage.Plan.amount / 100).toFixed(2),
			});

			tableFoot.append(myTotalLine);

		},

		calculatePaymentTotals: function() {

			var paymentTotal = Checkout.Storage.Plan.amount;
			
			var deductionsPercent = [];
			var deductionsAmounts = [];
			var deductionsPercentTotal = 0;
			var deductionsAmountsTotal = 0;

			var myCoupon;

			console.log(paymentTotal);
			console.log(Checkout.Storage.PaymentGateway.Storage.Coupons.length);

			for (var i = 0; i < Checkout.Storage.PaymentGateway.Storage.Coupons.length; i++) {

				myCoupon = Checkout.Storage.PaymentGateway.Storage.Coupons[i];
				console.log(myCoupon);

				if (myCoupon.amount_off !== null) {
					deductionsAmounts.push(myCoupon.amount_off);
					console.log(deductionsAmounts);
				}
				else
				if (myCoupon.percent_off !== null) {
					deductionsPercent.push(myCoupon.percent_off);
					console.log(deductionsPercent);
				}

			}

			for (var i = 0; i < deductionsPercent.length; i++) {
				deductionsPercentTotal = deductionsPercentTotal + deductionsPercent[i];
				console.log(deductionsPercentTotal);
			}

			for (var i = 0; i < deductionsAmounts.length; i++) {
				deductionsAmountsTotal = deductionsAmountsTotal + deductionsAmounts[i];
				console.log(deductionsAmountsTotal);
			}

			


			paymentTotal = paymentTotal * ((100 - deductionsPercentTotal) / 100);
			console.log(paymentTotal);
			paymentTotal = paymentTotal - deductionsAmountsTotal;
			console.log(paymentTotal);

			switch (Checkout.Storage.PaymentGateway.id) {
				case "Stripe":
					paymentTotal = paymentTotal / 100;
					break;
			}


			paymentTotal = paymentTotal.toFixed(2);
			console.log(paymentTotal);

			$(".payment-line-total [data-content='LineValue']").text(paymentTotal);

		},

	},

	Steps: {

		total: $(".process.step").length,

		currentStep: 0,

		changeStep: function(type) {

			var currentStep = $(".step.step-current");
			var newStep;

			if (type === "next") {
				
				if (Checkout.Steps.currentStep === Checkout.Steps.total) {
					return;
				}

				Checkout.Steps.currentStep++;

				newStep = $(currentStep).next(".step");
			}
			else
			if (type === "previous") {

				if (Checkout.Steps.currentStep === 0) {
					return;
				}

				Checkout.Steps.currentStep--;

				newStep = $(currentStep).prev(".step");
			}

			animateOut();

			setTimeout(function(){
				animateIn();
			}, 500);

			function animateIn() {
				
				newStep.addClass("step-current step-transitioning");

				if (type === "next") {
					newStep.addClass("step-in").removeClass("step-position-right");
				}
				else
				if (type === "previous") {
					newStep.addClass("step-in").removeClass("step-position-left");
				}

				setTimeout(function(){
					newStep.removeClass("step-transitioning step-in step-out").addClass("step-current");
				}, 500)

			}

			function animateOut() {

				currentStep.addClass("step-transitioning").removeClass("step-current");

				if (type === "next") {
					currentStep.addClass("step-position-left step-out");
					newStep.addClass("step-position-right");
				}
				else
				if (type === "previous") {
					currentStep.addClass("step-position-right step-out");
					newStep.addClass("step-position-left");
				}

				setTimeout(function(){
					currentStep.removeClass("step-transitioning step-position-left step-position-right step-out step-in");
				}, 500)

			}

		},

	},

	Forms: {

		validate: function() {

			$("#FormUserDetails").validate({

				rules: {
					
					RegistrationFirstName : { required: true	},
					RegistrationLastName : { required: true	},
					RegistrationAddressLine1 : { required: true	},
					// RegistrationAddressLine2 : { required: true	},
					RegistrationBirthDate : { 
						required: true, 
						// date: true 
					},
					RegistrationCity : { required: true	},
					RegistrationPostalCode : { required: true	},
					RegistrationCountry : { required: true	},
					// RegistrationRegion : { required: true	},
					RegistrationPhoneNumber : { required: true	},

					RegistrationEmailAddress: {
						required: true, 
						email:true,
					},

					WebsiteSignupLoginPassword: {
						required: true
					}
			
				},

				messages : {

					RegistrationFirstName : "Please enter your first name.",
					RegistrationLastName : "Please enter your last name.",
					RegistrationAddressLine1 : "Please enter your address.",
					RegistrationAddressLine2 : "Please enter your address.",
					RegistrationBirthDate : { 
						required: "Please enter your birth date",
						// date: "Please enter a valid date."
					},
					RegistrationCity : "Please enter your city.",
					RegistrationPostalCode : "Please enter your postal code.",
					RegistrationCountry : "Please select your country.",
					// RegistrationRegion : "Please select your region.",
					RegistrationPhoneNumber : "Please enter your phone number.",
					RegistrationEmailAddress : {
						required: "Please enter your e-mail address.",
						remote: "Sorry, this e-mail address has already been taken!",
					},

					WebsiteSignupLoginPassword: {
						required: "Please enter your password."
					}

				},

				submitHandler : function(form){

					if ( $("#email-exists-message").is(":visible") === false && Checkout.Storage.EMailAvailable === true ) {

						Checkout.Storage.Billing = {

							"RegistrationTitle": $("#RegistrationTitle").find("option:selected").text(),
							"RegistrationFirstName": $("#RegistrationFirstName").val(),
							"RegistrationLastName": $("#RegistrationLastName").val(),
							"RegistrationPhoneNumber": $("#RegistrationPhoneNumber").val(),
							"RegistrationEmailAddress": $("#RegistrationEmailAddress").val(),
							"RegistrationAddressLine1": $("#RegistrationAddressLine1").val(),
							"RegistrationAddressLine2": $("#RegistrationAddressLine2").val(),
							"RegistrationBirthDate": new Date($("#RegistrationBirthDate").val()),
							"RegistrationCompanyName": $("#RegistrationCompanyName").val(),
							"RegistrationCity": $("#RegistrationCity").val(),
							"RegistrationPostalCode": $("#RegistrationPostalCode").val(),
							"RegistrationCountry": $("#RegistrationCountry").find("option:selected").val(),
							// "RegistrationRegion": $("#RegistrationRegion").find("option:selected").val(),

						},

						Checkout.Steps.changeStep("next");

					}
					else
					if ( $("#email-exists-message").is(":visible") === true && Checkout.Storage.EMailAvailable === false ) {
						
						var n = noty({
							
							text: '<span class="glyphicon glyphicon-remove">&nbsp;</span><span class="value"><strong>Sorry, an account with this e-mail address already exists.</strong></span>',
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
					else
					if ( $("#email-exists-message").is(":visible") === false && Checkout.Storage.EMailAvailable === false ) {

						var n = noty({
							
							text: '<span class="glyphicon glyphicon-remove">&nbsp;</span><span class="value"><strong>Checking e-mail address availability. Please wait.</strong></span>',
							type: "information",
							theme: "relax",
							layout: "bottomCenter",
							timeout: 5000,
							animation: {
								open: "animated fadeInUp",
								close: "animated fadeOutUp",
							}

						});	
						
					}

				},

				errorClass: "error",
				validClass: "valid",
				showErrors: generateErrorList,

			});

			$("#FormSubdomain").validate({

				rules: {
					
					RegistrationSubdomain: {

						pattern: "[A-Za-z0-9\-]{0,61}",
						required: true

					}

				},

				messages: {

					RegistrationSubdomain : {
						pattern: "Sorry, this isn't a valid subdomain!",
						required: "Please enter the subdomain you would like to use.",
					},

				},

				errorClass: "error",
				validClass: "valid",
				showErrors: generateErrorList,

				submitHandler: function(){

					Checkout.Storage.Domain = {
						"subdomain": $("#RegistrationSubdomain").val()
					}

					Checkout.Steps.changeStep("next");

				},

			});

			$("#FormCoupon").validate({

				rules: {
					CouponCode: {
						required: true
					}
				},

				messages: {
					CouponCode: {
						required: "Please enter a coupon code."
					}
				},

				errorClass: "error",
				validClass: "valid",
				showErrors: generateErrorList,

				submitHandler: function(){

					Stripe.API.getCoupon();

				},

			});

		}

	},

	addEventListeners: function(){


		$("#RegistrationEmailAddress").on("keyup", function() {

			Checkout.EventHandlers.emailAddressKeyUp();

			Checkout.Functions.keyupDelay(function(){

				if ( $('#RegistrationEmailAddress').valid() === true ) {
					Checkout.EventHandlers.checkEmailAvailable();
				}

			}, 500 );

		});

		$("#RegistrationSubdomain").on("keyup", function() {

			Checkout.EventHandlers.domainKeyUp();

			Checkout.Functions.keyupDelay(function(){

				if ( $('#RegistrationSubdomain').valid() === true ) {
					Checkout.EventHandlers.checkDomainAvailable();
				}

			}, 500 );

		});


		$("#pricingplan-container").on("click", "[data-action='SelectPricingPlan']", function(event) {

			var myPricingPlan = $(event.currentTarget).closest(".pricingplan");
			var myPricingPlanID = myPricingPlan.attr("data-id");

			$(".pricingplan-container .pricingplan").each(function(){
				$(this).removeClass("selected unselected");
				$(this).find(".btn").removeClass("btn-primary btn-success");
			});

			$("#pricingplan-continue-button").prop("disabled", false);

			var currentPlan;

			for (var i = 0; i < Checkout.Storage.PaymentGateway.Storage.Plans.length; i++) {

				currentPlan = $("[data-id='" + Checkout.Storage.PaymentGateway.Storage.Plans[i].id + "']");

				if (Checkout.Storage.PaymentGateway.Storage.Plans[i].id === myPricingPlanID) {
					Checkout.Storage.Plan = Checkout.Storage.PaymentGateway.Storage.Plans[i];
					currentPlan.addClass("selected");
					currentPlan.find(".btn").addClass("btn-success").text("Selected");
				} else {
					currentPlan.addClass("unselected");
					currentPlan.find(".btn").addClass("btn-primary").text("Select this Plan");
				}

			}

			// Checkout.Steps.changeStep("next");

		});

		$('[data-action="AddCoupon"]').on("click", Checkout.EventHandlers.expandCouponPanel);

		$("#pricingplan-continue-button").on("click", function(){
			Checkout.Storage.PaymentGateway.Storage.Coupons = [];
			Checkout.Functions.populatePayment();
			Checkout.Steps.changeStep("next");
		});

		$("#email-exists-message [data-action='WebsiteSignupSubmit']").on("click", function(){

			if ( $(WebsiteSignupLoginPassword).valid() === true ) {
				Checkout.Functions.websiteSignupLogin()
			}
			else
			{
				console.log("Not valid.");
			}
			

		});

		$("[data-action='PrevStep']").on("click", function() {
			Checkout.Steps.changeStep("previous");
		});

		$("[data-action='NextStep']").on("click", function() {
			Checkout.Steps.changeStep("next");
		});

		$("#confirmpay-button-submit").on("click", function() {
			
		});

		$("#RegistrationAgreeTerms").on("change", function() {
			if ($("#confirmpay-button-submit").prop("disabled") === true) {
				$("#confirmpay-button-submit").prop("disabled", false);
			}
			else
			if ($("#confirmpay-button-submit").prop("disabled") === false) {
				$("#confirmpay-button-submit").prop("disabled", true);
			}
		});

		$("[data-action='ProcessPayment']").on("click", Checkout.EventHandlers.processPayment);

	},

	EventHandlers: {

		expandCouponPanel: function(event) {

			$(event.currentTarget).closest(".row").fadeOut(function(){
				$("#coupon-panel").slideDown();	
			});

		},

		emailAddressKeyUp: function() {

			$("#email-exists-message").slideUp();

			$("#RegistrationEmailAddress").closest(".form-group")
				.removeClass("has-success has-info has-warning has-error has-feedback")
				.find('.glyphicon')
					.remove();

			Checkout.Storage.EMailAvailable = false;

		},

		domainKeyUp: function() {

			$("#domain-exists-message").slideUp();

			$("#RegistrationSubdomain").closest(".form-group")
				.removeClass("has-success has-info has-warning has-error has-feedback")
				.find('.glyphicon')
					.remove();

			Checkout.Storage.DomainAvailable = false;

		},

		checkEmailAvailable: function() {

			var myData = {
				username: $("#RegistrationEmailAddress").val()
			}

			$.ajax({
				url: API.Locations.CheckEmail,
				data: myData,
				// type: "post",
				beforeSend: function(){

					$("#RegistrationEmailAddress").closest(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

					$("#RegistrationEmailAddress").closest(".form-group")
						.addClass("has-feedback has-info")
						.append('<span class="glyphicon glyphicon-refresh spinning form-control-feedback" aria-hidden="true"></span>');

					$("#step-billing-submit").prop("disabled", true);

				},
			})
			.success(function(data, status){

				Checkout.Storage.EMailAvailable = false;

				$("#email-exists-message [data-content='EmailAddress']").text(data.email);

				$("#email-exists-message").slideDown();

				$("#RegistrationEmailAddress").closest(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

				$("#RegistrationEmailAddress").closest(".form-group")
					.addClass("has-warning has-feedback")
					.append('<span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>');


			})
			.error(function(jqxhr){

				if (jqxhr.status === 404) {

					$("#RegistrationEmailAddress").closest(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

					Checkout.Storage.EMailAvailable = true;

					$("#RegistrationEmailAddress").closest(".form-group")
						.addClass("has-success has-feedback")
						.append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');

					$("#step-billing-submit").prop("disabled", false);

				}
				else
				{
					Framework.UI.NotificationBanner.fire({ type: "error" });
				}

			})

		},

		checkDomainAvailable: function() {

			var mySubdomain = $("#RegistrationSubdomain").val();

			var myFQDN = Checkout.Templates.domain({
				subdomain: mySubdomain
			});

			var myData = {
				FQDN: myFQDN
			}

			$.ajax({
				url: API.Locations.CheckDomain,
				data: myData,
				// type: "post",
				beforeSend: function(){

					$("#RegistrationSubdomain").closest(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

					$("#RegistrationSubdomain").closest(".form-group")
						.addClass("has-feedback has-info")
						.append('<span class="glyphicon glyphicon-refresh spinning form-control-feedback" aria-hidden="true"></span>');

					$("#step-subdomain-submit").prop("disabled", true);

				},
			})
			.success(function(data, jqXHR){

				Checkout.Storage.DomainAvailable = false;

				$("#RegistrationSubdomain").closest(".form-group")
					.removeClass("has-success has-info has-warning has-error has-feedback")
					.find('.glyphicon')
						.remove();

				$("#RegistrationSubdomain").closest(".form-group")
					.addClass("has-error has-feedback")
					.append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');

				$("#step-subdomain-submit").prop("disabled", true);

				$("#domain-exists-message [data-content='Subdomain']").text(mySubdomain);
				$("#domain-exists-message").slideDown();


			})
			.error(function(jqxhr){

				if (jqxhr.status === 404) {

					Checkout.Storage.DomainAvailable = true;

					$("#RegistrationSubdomain").closest(".form-group")
						.removeClass("has-success has-info has-warning has-error has-feedback")
						.find('.glyphicon')
							.remove();

					$("#RegistrationSubdomain").closest(".form-group")
						.addClass("has-success has-feedback")
						.append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');

					$("#step-subdomain-submit").prop("disabled", false);

				}

			});

		},

		selectPricingPlan : function(event) {

			

		},

		processPayment: function(event){

			event.preventDefault();

			if (Checkout.Storage.PaymentGateway.id === "Stripe") {
				
				Stripe.configure();
				Stripe.fire();

			}
			else
			{
				throw "Could not find payment gateway."
			}

		},

	},

	Templates: {

		domain: function(options) {

			var returnHTML = "";

			var sub = options.subdomain;
			var tld = ".usebuild.co";

			returnHTML = sub + tld;

			return returnHTML;

		},

		printPaymentLine: function(options) {

			/*
				options = {
					type: "",
					couponType: "", // "percentage" || "amount"
					amount: 0,
					label: "",	
					class: "",	
					classAmount: "",
					classLabel: "",
				}
			*/

			console.log(options);

			var returnHTML = "";

			var myType;
			var myLabel;
			var myValue;
			var myClass;
			var myValueCellClass = "";
			var myLabelCellClass = "";
			var myCouponType = "";
			
			myType = options.type || "";
			myValue = options.value || "";
			myValueCellClass = options.classValue || "";
			myLabel = options.label || "";
			myLabelCellClass = options.classLabel || "";
			myClass = options.class || "";
			
			myCouponType = options.couponType || "amount";

			var myCurrencySymbol = Checkout.Storage.Currency.symbol;

			returnHTML +=	'<tr class="payment-line payment-line-' + myType + ' ' + myClass + '" data-type="' + myType + '">';
			returnHTML +=		'<td class="payment-line-label ' + myLabelCellClass + '">';
			returnHTML +=			'<span data-content="LineName">' + myLabel + '</span>';
			returnHTML +=		'</td>';
			returnHTML +=		'<td class="payment-line-value ' + myValueCellClass + '">';

			if (myCouponType === "amount") {

			returnHTML +=			'<span data-content="CurrencySymbol">' + myCurrencySymbol + '</span>';
			returnHTML +=			'<span data-content="LineValue">' + myValue + '</span>';

			}
			else
			if (myCouponType === "percentage") {

			returnHTML +=			'<span data-content="LineValue">' + myValue + '</span>';
			returnHTML +=			'<span>%</span>';

			}
			
			returnHTML +=		'</td>';
			returnHTML +=	'</tr>';

			return returnHTML;

		},

		printPricingPlan: function(options) {

			/*
			options = {
			    "name": "Build 1 Month Trial",
			    "currency": "usd",
			    "created": "/Date(1472648173)/",
			    "amount": 0,
			    "interval": "month",
			    "interval_count": 1,
			    "livemode": false,
			    "statement_descriptor": "string",
			    "trial_period_days": 30,
			    "metadata": {
			      "description": "This is the most awesome website builder ever!",
			      "tagline": "Do the thing."
			    },
			    "id": "trial"
			  },
			*/

			var myHTML = "";

			var myID = options.id;
			var myName = options.name;
			var myInterval = options.interval;
			var myAmount = new Number(options.amount / 100).toFixed(2);
			var myDescription = options.metadata.description;
			var myTagline = options.metadata.tagline;
			var myPriceSymbol;

			if (options.currency === "usd") {
				myPriceSymbol = "$";
			}

			myHTML +=	'<div class="pricingplan" data-id="' + myID + '">';
			myHTML +=		'<div class="pricingplan-title">';
			myHTML +=			'<span>' + myName + '</span>';
			myHTML +=		'</div>';
			myHTML +=		'<div class="pricingplan-price-container">';
			myHTML +=			'<div class="pricingplan-price">';
			myHTML +=				'<span class="pricingplan-price-symbol">' + myPriceSymbol + '</span><span class="pricingplan-price-amount">' + myAmount + '</span>';
			myHTML +=			'</div>';
			myHTML +=			'<span class="pricingplan-price-permonth">per ' + myInterval + '</span>';
			myHTML +=		'</div>';
			myHTML +=		'<div class="pricingplan-description">';
			myHTML +=			'<p>' + myDescription + '</p>';
			myHTML +=		'</div>';
			myHTML +=		'<div class="pricingplan-action">';
			myHTML +=			'<p class="pricingplan-action-description">' + myTagline + '</p>';
			myHTML +=			'<button type="button" data-action="SelectPricingPlan" class="pricingplan-action-button btn btn-primary btn-block">Choose this Plan</button>';
			myHTML +=		'</div>';
			myHTML +=	'</div>';

			return myHTML;

		},

	},

	reset: function(){

		Checkout.Storage.TemplateID = Framework.Utilities.getQueryStringVars().templateid;
		Checkout.Storage.ReferralID = Framework.Utilities.getQueryStringVars().referralid;
		Checkout.Storage.BillingAddress = null;

		Checkout.Storage.PaymentGateway = Stripe;
		Checkout.Storage.PaymentGateway.Storage.Plans = null;
		Checkout.Storage.PaymentGateway.API.getPlans();

		Checkout.Forms.validate();
		
		Checkout.addEventListeners();

		$(function () {
			$('#RegistrationBirthDate').datetimepicker({
				useCurrent: false,
				format: 'YYYY/MM/DD',
				viewMode: "years",
				// maxDate: new Date("2000-01-01")
			});
		});


	},

};

$(document).ready(function(){
	$.crs();
});

$(window).load(function(){

	Framework.UI.loadingOverlay.hide();

});

Stripe.reset();
Checkout.reset();
