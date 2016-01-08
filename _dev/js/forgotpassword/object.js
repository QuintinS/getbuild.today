ForgotPassword = {

    storage: {

        ForgotPasswordData: {
            forgotEmail: null,
        }

    },

    API: {

        resetPassword: function() {

            $.ajax({
                url: "/DoLostPass.asp",
                method: "POST",
                data: ForgotPassword.storage.ForgotPasswordData,
                beforeSend: ForgotPassword.EventHandlers.resetPasswordOnBeforeSend,
                error: ForgotPassword.EventHandlers.resetPasswordOnError,
                success: function(data){
                    ForgotPassword.EventHandlers.resetPasswordOnSuccess(data);
                }
            });

        },

    },

    functions: {

    },

    EventHandlers: {

        resetPasswordOnBeforeSend: function(){
            Framework.UI.loadingOverlay.add({
                text: "Recovering your Password..."
            });
        },

        resetPasswordOnComplete: function(){
            Framework.UI.loadingOverlay.hide();
        },

        resetPasswordOnError: function(){

            var myHTML = Framework.UI.banner.print({
                type: "danger",
                animation: "animated shake",
                icon: "glyphicons remove",
                text: "Oops! Something went wrong. Please try again later."
            });

            Framework.UI.loadingOverlay.hide();

            $(".messages-container").append(myHTML);
            $(".messages-container").find(".banner").delay(5000).fadeOut(function() {
                $(this).remove();
            });

        },

        resetPasswordOnSuccess: function(data){

            var myHTML = Framework.UI.banner.print({
                type: "success",
                animation: "animated fadeIn",
                icon: "glyphicons ok",
                text: "Your password has been sent to you. Please check your e-mail inbox!"
            });

            Framework.UI.loadingOverlay.hide();

            $(".messages-container").append(myHTML);
            $(".messages-container").find(".banner").delay(5000).fadeOut(function() {
                $(this).remove();
            });

        },

    },

    forms: {

        validate: function() {

            $("#form-forgotpassword").validate({
                rules: {
                    forgotEmail: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    forgotEmail: {
                        required: "Please enter your account e-mail address.",
                        email: "Please enter a valid e-mail address."
                    }
                },
                submitHandler: function(form){

                    ForgotPassword.storage.ForgotPasswordData = {
                        forgotEmail: $("#forgotEmail").val()
                    };

                    ForgotPassword.API.resetPassword();
                },
                showErrors: generateErrorList
            });
        }

    },

    reset: function() {
        ForgotPassword.forms.validate();
    }

};

$(document).ready(function() {
    ForgotPassword.reset();
});