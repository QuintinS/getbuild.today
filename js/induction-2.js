var TemplateID = "";

var SelectedPricingPlan = "";

var FormPostLocation = "";

var TwoCheckoutPostData = {
    sid: "2140176",
    mode: "2CO",
    li_0_name: null,
    li_0_price: null,
    li_0_recurrence: null,
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
    phone: null
};

var ClearTwoCheckoutPostData = function() {
    TwoCheckoutPostData = {
        sid: "2140176",
        mode: "2CO",
        li_0_name: null,
        li_0_price: null,
        li_0_recurrence: null,
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
        phone: null
    };
};

var CaptureTwoCheckoutPostData = function() {
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
    var Product2Name;
    var Product2Quantity;
    var Product2Price;
    var Product2Duration;
    var Product2Recurrence;
    TwoCheckoutPostData = {
        sid: "2140176",
        mode: "2CO",
        // li_0_name : null,
        // li_0_price : null,
        // li_0_recurrence : null,
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
        phone: myPhoneNumber
    };
    if (SelectedPricingPlan === "free") {
        FormPostLocation = "/trial.asp";
        ProductName = "Build - 14 Day Trial";
        ProductQuantity = 1;
        ProductPrice = 0;
        ProductDuration = "14 Days";
        $("#RegistrationForm [name='card_holder_name']").val(myFullName);
        $("#RegistrationForm [name='street_address']").val(myAddressLine1);
        $("#RegistrationForm [name='street_address2']").val(myAddressLine2);
        $("#RegistrationForm [name='city']").val(myCity);
        $("#RegistrationForm [name='state']").val(myRegionName);
        $("#RegistrationForm [name='zip']").val(myPostalCode);
        $("#RegistrationForm [name='country']").val(myCountryName);
        $("#RegistrationForm [name='email']").val(myEmailAddress);
        $("#RegistrationForm [name='phone']").val(myPhoneNumber);
        // $("#RegistrationForm [name='country']").val(ProductDuration);
        $("#RegistrationForm [name='li_0_type']").val("product");
        $("#RegistrationForm [name='li_0_name']").val(ProductName);
        $("#RegistrationForm [name='li_0_description']").val(TemplateID);
        $("#RegistrationForm [name='li_0_quantity']").val(ProductQuantity);
        $("#RegistrationForm [name='li_0_price']").val(ProductPrice);
        $("#RegistrationForm [name='li_0_tangible']").val("N");
        $("#RegistrationForm [name='li_0_duration']").val(ProductDuration);
        $("#RegistrationForm [name='li_1_type']").val("product");
        $("#RegistrationForm [name='li_1_name']").val("Your chosen subdomain");
        $("#RegistrationForm [name='li_1_description']").val(mySubDomain);
        $("#RegistrationForm [name='li_1_quantity']").val(1);
        $("#RegistrationForm [name='li_1_price']").val(0);
        $("#RegistrationForm [name='li_1_tangible']").val("N");
    } else if (SelectedPricingPlan === "monthly") {
        FormPostLocation = "2checkout";
        ProductName = "Build - Monthly Subscription";
        ProductQuantity = 1;
        ProductPrice = 20;
        ProductDuration = "1 Month";
        ProductRecurrence = "1 Month";
    } else if (SelectedPricingPlan === "yearly") {
        FormPostLocation = "2checkout";
        ProductName = "Build - Yearly Subcription";
        ProductQuantity = 1;
        ProductPrice = 150;
        ProductDuration = "12 Months";
        // ProductRecurrence = "12 Months";
        Product2Name = "6 Months Free";
        Product2Quantity = 1;
        Product2Price = 0;
        Product2Duration = "6 Months";
    } else {
        throw "Error: SelectedPricingPlan must be 'free', 'monthly' or 'yearly'.";
    }
    if (SelectedPricingPlan !== "free") {
        TwoCheckoutPostData.li_0_type = "product";
        TwoCheckoutPostData.li_0_name = ProductName;
        TwoCheckoutPostData.li_0_description = TemplateID;
        TwoCheckoutPostData.li_0_quantity = ProductQuantity;
        TwoCheckoutPostData.li_0_price = ProductPrice;
        TwoCheckoutPostData.li_0_tangible = "N";
        TwoCheckoutPostData.li_0_duration = ProductDuration;
        if (ProductRecurrence !== undefined) {
            TwoCheckoutPostData.li_0_recurrence = ProductRecurrence;
        }
        if (Product2Name !== undefined) {
            TwoCheckoutPostData.li_1_type = "product";
            TwoCheckoutPostData.li_1_name = "Your chosen subdomain";
            TwoCheckoutPostData.li_1_price = 0;
            TwoCheckoutPostData.li_1_description = mySubDomain;
            TwoCheckoutPostData.li_2_type = "product";
            TwoCheckoutPostData.li_2_tangible = "N";
            TwoCheckoutPostData.li_2_name = Product2Name;
            TwoCheckoutPostData.li_2_quantity = Product2Quantity;
            TwoCheckoutPostData.li_2_price = Product2Price;
            TwoCheckoutPostData.li_2_duration = Product2Duration;
        } else {
            TwoCheckoutPostData.li_1_type = "product";
            TwoCheckoutPostData.li_1_name = "Your chosen subdomain";
            TwoCheckoutPostData.li_1_price = 0;
            TwoCheckoutPostData.li_1_description = mySubDomain;
        }
        TwoCheckoutPostData.currency_code = "USD";
    }
};

var ResetCheckout = function(form) {
    ClearTwoCheckoutPostData();
    RemoveCheckoutIFrame();
};

var RemoveCheckoutIFrame = function() {
    if (document.getElementById("tco_lightbox")) {
        $("body").find(".tco_lightbox").remove();
    }
};

var IncludeCheckoutScript = function() {
    CaptureTwoCheckoutPostData();
    PopulateTwoCheckoutPostData();
    if (SelectedPricingPlan === "free") {
        document.forms.RegistrationForm.submit();
    } else if (SelectedPricingPlan === "monthly" || SelectedPricingPlan === "yearly") {
        console.log("Posting to 2Checkout");
        if (!document.getElementById("tco_lightbox")) {
            $.getScript("/js/direct.min.js", function() {
                $("#tco_lightbox").on("remove", function() {
                    console.log("Lightbox Removed");
                    HideLoadingOverlay();
                });
                SubmitTwoCheckoutPostData();
            });
        } else {
            throw "Could not submit 2Checkout Post Data - no lightbox present.";
        }
    } else {
        throw "Error: SelectedPricingPlan must be 'free', 'monthly' or 'yearly'.";
    }
};

var TriggerCheckout = function() {
    IncludeCheckoutScript();
};

var PopulateTwoCheckoutPostData = function() {
    var myFormInputName = "";
    var myFormInputValue = "";
    var myFormInput = "";
    $("#CheckoutHiddenForm").empty();
    for (var property in TwoCheckoutPostData) {
        if (TwoCheckoutPostData.hasOwnProperty(property)) {
            myFormInputName = "" + property;
            myFormInputValue = "" + TwoCheckoutPostData[property];
            myFormInput = "<input type='hidden' name='" + myFormInputName + "' value='" + myFormInputValue + "' />";
            $("#CheckoutHiddenForm").append(myFormInput);
        }
    }
    var mySubmitButton = "<input name='submit' type='submit' value='Checkout' />";
    $("#CheckoutHiddenForm").append(mySubmitButton);
};

var SubmitTwoCheckoutPostData = function() {
    $("#CheckoutHiddenForm input[type='submit']").click();
};

var ValidateStep2Form = function() {
    validator = $("#RegistrationForm").validate({
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
                email: true,
                remote: {
                    url: "/Testmail.asp",
                    type: "post"
                }
            },
            RegistrationSubdomain: {
                pattern: "[A-Za-z0-9-]{0,61}",
                // pattern: "[A-Za-z0-9][A-Za-z0-9\-\.]{0,61}[A-Za-z0-9]|[A-Za-z0-9]",
                // pattern: "^[a-z\d]+([-_][a-z\d]+)*$",
                required: true
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
            RegistrationSubdomain: {
                pattern: "Sorry, this isn't a valid subdomain!",
                required: "Please enter the subdomain you would like to use.",
                remote: "Sorry, this subdomain has already been taken!"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url: "/domains/subdomains/CheckDomains.asp",
                type: "post",
                data: {
                    fqdn: $("#RegistrationSubdomain").val() + ".usebuild.co"
                }
            }).success(function(data) {
                var myAuth = data;
                if (myAuth === "true" || myAuth === true) {
                    PageLoadingOverlay.show();
                    ResetCheckout();
                    TriggerCheckout();
                }
                if (myAuth === "false" || myAuth === false) {
                    createErrorPopover($("#RegistrationSubdomain"), "Sorry, that subdomain is already taken.");
                } else {}
            }).fail(function() {});
        },
        errorClass: "error",
        validClass: "valid",
        showErrors: generateErrorList
    });
};

function mySubmitHandler() {
    self.document.all.RegistrationForm.submit();
}

function changeFormActions() {
    selectionType == "new-domain" ? ($("#proceed-type-domain").removeClass("hidden"), 
    $("#proceed-type-payment").addClass("hidden")) : selectionType == "free-subdomain" || selectionType == "existing-domain" ? ($("#proceed-type-domain").addClass("hidden"), 
    $("#proceed-type-payment").removeClass("hidden")) : $("#proceed-actions").addClass("hidden");
}

var selectionType = "free-subdomain", myNewDomain = "", mySubDomain = "";

$("input[type=radio][name=domain-type]").change(function() {
    $("#proceed-actions").hasClass("hidden") == !0 && $("#proceed-actions").removeClass("hidden");
});

$("#registerSub").on("keyup", function() {
    mySubDomain = $("#registerSub").val();
    updateMessage();
});

var SelectPricingPlan = function(event) {
    var PricingPlanID = $(event.currentTarget).closest(".PricingPlan").attr("id");
    // $("#PricingPlans > .PricingPlan.Selected").removeClass("Selected");
    // $("#PricingPlans > .PricingPlan:not('.Selected')").addClass("NotSelected");
    // $(event.currentTarget).closest(".PricingPlan").removeClass("NotSelected").addClass("Selected");	
    if (PricingPlanID === "PricingPlanFree") {
        SelectedPricingPlan = "free";
    } else if (PricingPlanID === "PricingPlanMonthly") {
        SelectedPricingPlan = "monthly";
    } else if (PricingPlanID === "PricingPlanYearly") {
        SelectedPricingPlan = "yearly";
    }
};

// Event Listeners
$("[data-action='SelectPricingPlan']").on("click", SelectPricingPlan);

var createErrorPopover = function(element, text) {
    var _popover;
    _popover = $(element).popover({
        trigger: "manual",
        placement: "bottom",
        content: text,
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
    });
    _popover.data("bs.popover").options.content = text;
    return $(element).popover("show");
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

TemplateID = getParameterByName("templateid");

ValidateStep2Form();

$(document).ready(function() {
    $.crs();
});