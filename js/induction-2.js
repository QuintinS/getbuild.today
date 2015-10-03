var Stripe = {
    StripeHandler: null,
    StripeOptions: {
        data: {
            key: null,
            token: function(token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
                console.log(token.id);
            },
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
        capture: function() {
            var myAddress = "";
            myAddress += PaymentGateway.PostData.data.street_address + ", ";
            myAddress += PaymentGateway.PostData.data.street_address2 + ", ";
            myAddress += PaymentGateway.PostData.data.city + ", ";
            myAddress += PaymentGateway.PostData.data.state;
            Stripe.StripeOptions.data.token = function(token) {};
            Stripe.StripeOptions.data.key = PaymentGateway.API.Keys.TestPublishable;
            Stripe.StripeOptions.data.image = "/images/stripe-logo.png";
            Stripe.StripeOptions.data.locale = "auto";
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
            Stripe.StripeOptions.data.opened = PageLoadingOverlay.add;
            Stripe.StripeOptions.data.closed = function() {
                console.log("MOTHERFUCKERS");
            };
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
    API: {
        Keys: {
            TestPublishable: "pk_test_xAwJMiXYzWYs2FlhcXLVLX3M",
            LivePublishable: "pk_live_i85izWOGIij0CQIqFUFDCXIS"
        }
    },
    templates: {
        printCheckout: function(options) {
            if (options.amount === undefined || typeof options.amount !== "string") {
                throw "ArgumentError: Must pass argument 'amount' as type 'string'.";
            }
            myKey = PaymentGateway.API.Keys.TestPublishable;
            myImage = "/images/logo-build-b-large.png";
            myName = "GetBuild.Today";
            myDescription = options.description || null;
            myAmount = options.amount;
            myLocale = options.locale || "auto";
            returnHTML = "";
            returnHTML += "<script";
            returnHTML += ' src="https://checkout.stripe.com/checkout.js"';
            returnHTML += ' class="stripe-button"';
            returnHTML += ' data-key="' + myKey + '"';
            returnHTML += ' data-image="' + myImage + '"';
            returnHTML += ' data-name="' + myName + '"';
            returnHTML += ' data-description="' + myDescription + '"';
            returnHTML += ' data-amount="' + myAmount + '"';
            returnHTML += ' data-locale="' + myLocale + '">';
            returnHTML += "</script>";
            return returnHTML;
        }
    },
    PostData: {
        clear: function() {
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
            } else if (Checkout.storage.PricingPlan.code === "monthly") {
                ProductName = "Build - Monthly Subscription";
                ProductQuantity = 1;
                ProductPrice = 20;
                ProductDuration = "1 Month";
                ProductRecurrence = "1 Month";
            } else if (Checkout.storage.PricingPlan.code === "yearly") {
                ProductName = "Build - Yearly Subcription";
                ProductQuantity = 1;
                ProductPrice = 150;
                ProductDuration = "12 Months";
            } else {
                throw "Error: Checkout.storage.PricingPlan.code must be 'free', 'monthly' or 'yearly'.";
            }
            PaymentGateway.PostData.data = {
                card_holder_name: myFullName,
                street_address: myAddressLine1,
                street_address2: myAddressLine2,
                city: myCity,
                state: myRegionName,
                zip: myPostalCode,
                country: myCountryName,
                ship_name: myFullName,
                ship_street_address: myAddressLine1,
                ship_street_address2: myAddressLine2,
                ship_city: myCity,
                ship_state: myRegionName,
                ship_zip: myPostalCode,
                ship_country: myCountryName,
                email: myEmailAddress,
                phone: myPhoneNumber,
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
            card_holder_name: null,
            street_address: null,
            street_address2: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            ship_name: null,
            ship_street_address: null,
            ship_street_address2: null,
            ship_city: null,
            ship_state: null,
            ship_zip: null,
            ship_country: null,
            email: null,
            phone: null,
            product: null
        }
    },
    trigger: function() {
        // PaymentGateway.PostData.clear();
        // PaymentGateway.PostData.capture();
        PaymentGateway.PostData.capture();
        Stripe.StripeOptions.capture();
        PageLoadingOverlay.add();
        console.log(PaymentGateway.PostData.data);
        console.log(Stripe.StripeOptions.data);
        if (Checkout.storage.PricingPlan.code === "free") {
            documents.forms.RegistrationForm.submit();
        } else {
            myOptions = {
                id: Checkout.storage.PricingPlan,
                code: Checkout.storage.PricingPlan.code,
                name: "Build",
                description: Checkout.storage.PricingPlan.description + " Membership",
                amount: Checkout.storage.PricingPlan.amount * 100,
                token: Stripe.StripeOptions.data.token,
                image: Stripe.StripeOptions.data.image,
                // locale: Stripe.StripeOptions.data.locale,
                currency: Stripe.StripeOptions.data.currency
            };
            Stripe.StripeHandler.open(myOptions);
            $(window).on("DOMSubtreeModified", function(event) {
                PageLoadingOverlay.hide();
                $(window).off("DOMSubtreeModified");
            });
        }
    },
    successRedirect: function(options) {
        console.log(options);
    },
    reset: function() {
        PaymentGateway.PostData.clear();
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
        }
    },
    validateForms: function() {
        $("#RegistrationForm").validate({
            rules: {
                RegistrationFirstName: {
                    required: true
                },
                RegistrationLastName: {
                    required: true
                },
                RegistrationAddressLine1: {
                    required: true
                },
                // RegistrationAddressLine2 : { required: true	},
                RegistrationCity: {
                    required: true
                },
                RegistrationPostalCode: {
                    required: true
                },
                RegistrationCountry: {
                    required: true
                },
                RegistrationRegion: {
                    required: true
                },
                RegistrationPhoneNumber: {
                    required: true
                },
                emailaddress: {
                    required: true,
                    email: true
                },
                fqdn: {
                    pattern: "[A-Za-z0-9-]{0,61}",
                    required: true,
                    remote: {}
                }
            },
            messages: {
                RegistrationFirstName: "Please enter your first name.",
                RegistrationLastName: "Please enter your last name.",
                RegistrationAddressLine1: "Please enter your address.",
                RegistrationAddressLine2: "Please enter your address.",
                RegistrationCity: "Please enter your city.",
                RegistrationPostalCode: "Please enter your postal code.",
                RegistrationCountry: "Please select your country.",
                RegistrationRegion: "Please select your region.",
                RegistrationPhoneNumber: "Please enter your phone number.",
                emailaddress: {
                    required: "Please enter your e-mail address.",
                    remote: "Sorry, this e-mail address has already been taken!"
                },
                fqdn: {
                    pattern: "Sorry, this isn't a valid subdomain!",
                    required: "Please enter the subdomain you would like to use.",
                    remote: "Sorry, this subdomain has already been taken!"
                }
            },
            submitHandler: function(form) {
                PaymentGateway.trigger();
            },
            errorClass: "error",
            validClass: "valid",
            showErrors: generateErrorList
        });
    },
    assignEventListeners: function() {
        $("[data-action='SelectPricingPlan']").on("click", Checkout.eventHandlers.SelectPricingPlan);
        $(window).on("popstate", function() {
            Stripe.StripeHandler.close();
        });
        $(window).on("charge.succeeded", function(e) {
            console.log("Charge Succeeded.");
        });
    },
    eventHandlers: {
        SelectPricingPlan: function(event) {
            console.log(event);
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
            } else if (PricingPlanID === "PricingPlanMonthly") {
                Checkout.storage.PricingPlan = {
                    id: PricingPlanID,
                    code: "monthly",
                    name: "GetBuild.Today",
                    description: PricingPlanName,
                    amount: PricingPlanAmount
                };
            } else if (PricingPlanID === "PricingPlanYearly") {
                Checkout.storage.PricingPlan = {
                    id: PricingPlanID,
                    code: "yearly",
                    name: "GetBuild.Today",
                    description: PricingPlanName,
                    amount: PricingPlanAmount
                };
            } else {
                throw "Invalid Pricing Plan Selected.";
            }
        },
        isCheckoutReady: function() {
            if (PaymentGateway.ready === true) {
                PageLoadingOverlay.hide();
                return true;
            } else {
                return false;
            }
        }
    },
    reset: function() {
        Checkout.storage.TemplateID = utilities.getQueryStringVars().templateid;
        Checkout.validateForms();
        Checkout.assignEventListeners();
    }
};

var utilities = {
    getQueryStringVars: function() {
        a = window.location.search.substr(1).split("&");
        if (a === "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split("=", 2);
            if (p.length == 1) b[p[0]] = ""; else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    },
    createErrorPopover: function(element, text) {
        var _popover;
        _popover = $(element).popover({
            trigger: "manual",
            placement: "bottom",
            content: text,
            template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
        });
        _popover.data("bs.popover").options.content = text;
        return $(element).popover("show");
    }
};

var stripeResponseHandler = function(status, response) {
    if (response.error) {
        // Show the errors on the form
        var n = noty({
            layout: "bottom",
            theme: "relax",
            text: response.error.message,
            type: "error",
            animation: {
                open: "animated fadeInUp",
                close: "animated fadeOut"
            },
            timeout: 5e3
        });
    } else {
        var token = response.id;
        $("#RegistrationForm").attr("action", "/Purchase.asp");
        $("#RegistrationForm").append($('<input type="hidden" name="stripeToken" />').val(token));
        $("#RegistrationForm")[0].submit();
    }
};

Checkout.reset();

PaymentGateway.reset();

$(document).ready(function() {
    console.log("Document Ready");
    $.crs();
});

$(window).load(function() {
    console.log("Window Ready");
    Stripe.StripeHandler = StripeCheckout.configure({
        key: PaymentGateway.API.Keys.TestPublishable,
        locale: "auto"
    });
    PaymentGateway.ready = true;
    // Remove after testing
    Checkout.eventHandlers.isCheckoutReady();
});