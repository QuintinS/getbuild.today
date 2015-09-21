/*	=====================================
	Contact Form
	===================================== */
function sendContactEmail() {
    myEmail = $("#ContactEmail").val();
    myName = $("#ContactName").val();
    myMessage = $("#ContactMessage").val();
    myCheckbox = $("#ContactNewsletter").is(":checked");
    $.ajax({
        type: "POST",
        url: "/contactus.asp",
        data: {
            buildContactEmail: myEmail,
            buildContactName: myName,
            buildContactMessage: myMessage,
            buildContactCheckbox: myCheckbox
        },
        beforeSend: function() {}
    }).success(function(response) {
        myAuth = $(response).find("authentication").text();
        if (myAuth == "updated") {
            var n = noty({
                text: '<span class="glyphicon glyphicon-ok">&nbsp;</span><span class="value"><strong>Thank you!</strong> Your message has been sent.</span>',
                type: "success",
                theme: "relax",
                layout: "bottom",
                timeout: 5e3,
                animation: {
                    open: "animated fadeInUp",
                    close: "animated fadeOutUp"
                }
            });
        } else {
            var n = noty({
                text: "<span class='glyphicon glyphicon-remove'>&nbsp;</span><span class='value'>Oops! Something went wrong. Don't worry, it's nothing you did... we're looking into it. Please try again later!</span>",
                type: "error",
                modal: true,
                theme: "relax",
                layout: "center",
                timeout: 5e3,
                animation: {
                    open: "animated fadeInUp",
                    close: "animated fadeOutUp"
                }
            });
        }
    }).fail(function() {
        var n = noty({
            text: "<span class='glyphicon glyphicon-remove'>&nbsp;</span><span class='value'>Oops! Something went wrong. Don't worry, it's nothing you did... we're looking into it. Please try again later!</span>",
            type: "error",
            modal: true,
            theme: "relax",
            layout: "center",
            timeout: 5e3,
            animation: {
                open: "animated fadeInUp",
                close: "animated fadeOutUp"
            }
        });
    });
}

var validateContactForm = $("#ContactForm").validate({
    rules: {
        ContactEmail: {
            required: true,
            email: true
        },
        ContactName: {
            required: true
        },
        ContactMessage: {
            required: true
        }
    },
    messages: {
        ContactEmail: {
            required: "Please enter your e-mail address.",
            email: "Sorry, your email address is not valid. Please try again!"
        },
        ContactName: "Please enter your name.",
        ContactMessage: "Please enter your message."
    },
    submitHandler: sendContactEmail,
    showErrors: generateErrorList
});