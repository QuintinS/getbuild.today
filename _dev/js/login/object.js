Login = {

    storage: {

        userDomain : null,

        credentials: {

            buildLoginEmail: null,
            buildLoginPassword: null

        }

    },

    API: {

        loginValidate: function() {

            $.ajax({
                url: "/login/gologin.asp",
                method: "POST",
                dataType: "xml",
                // mimeType: "application/xml",
                // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: Login.storage.credentials,
                beforeSend: Login.EventHandlers.loginValidateOnBeforeSend,
                error: Login.EventHandlers.loginValidateOnError,
                // complete: Login.EventHandlers.loginValidateOnComplete,
                success: function(data){
                    Login.EventHandlers.loginValidateOnSuccess(data);
                }
            });

        },

    },

    functions: {

        login: function(){

            // "domain/VirtualOffice/Login/DirectLogin.asp"

            var loginForm = document.createElement("form");

            loginForm.setAttribute("method", "post");
            loginForm.setAttribute("action", "http://" + Login.storage.userDomain + "/VirtualOffice/Login/DirectLogin.asp");
            loginForm.setAttribute("style", "display:none");

            var inputLogin = document.createElement("input");
            inputLogin.setAttribute("name", "buildLoginEmail");
            inputLogin.setAttribute("value", Login.storage.credentials.buildLoginEmail);

            var inputPassword = document.createElement("input");
            inputPassword.setAttribute("name", "buildLoginPassword");
            inputPassword.setAttribute("value", Login.storage.credentials.buildLoginPassword);

            loginForm.appendChild(inputLogin);
            loginForm.appendChild(inputPassword);

            // document.getElementsByTagName("body")[0].appendChild(loginForm);

            loginForm.submit();

            
        }

    },

    EventHandlers: {

        loginValidateOnSuccess: function(data) {

            var myLoggedIn = $(data).find("loggedin").text();
            var myDomain;

            if (myLoggedIn === "true") {
                myDomain = $(data).find("FD").text();
                Login.storage.userDomain = myDomain;
            }
            else
            {
                Login.EventHandlers.loginValidateOnError();
                return;
            }

            if (myDomain.length > 0) {
                Login.functions.login();
            }
            else
            {
                Login.EventHandlers.loginValidateOnError();
                return;
            }

        },

        loginValidateOnError: function(jqxhr) {

            var myHTML = Framework.UI.banner.print({
                type: "danger",
                animation: "animated shake",
                icon: "",
                text: "Oops! Something went wrong. Please try again later."
            });

            Framework.UI.loadingOverlay.hide();

            $(".messages-container").append(myHTML);
            $(".messages-container").find(".banner").delay(5000).fadeOut(function() {
                $(this).remove();
            });
            
        },

        loginValidateOnComplete: function() {
            Framework.UI.loadingOverlay.hide();
        },

        loginValidateOnBeforeSend: function() {
            Framework.UI.loadingOverlay.add({
                text: "Logging In..."
            });
        }

    },

    forms: {

        validate: function() {
            $("#form-login").validate({
                rules: {
                    buildLoginEmail: {
                        required: true,
                        email: true
                    },
                    buildLoginPassword: {
                        required: true
                    }
                },
                messages: {
                    buildLoginEmail: {
                        required: "Please enter your e-mail address.",
                        email: "Sorry, your email address is not valid. Please try again!"
                    },
                    buildLoginPassword: "Please enter your password."
                },
                submitHandler: function(form){

                    Login.storage.credentials = {
                        buildLoginEmail: $("#buildLoginEmail").val(),
                        buildLoginPassword: $("#buildLoginPassword").val()
                    };

                    Login.API.loginValidate();
                },
                showErrors: generateErrorList
            });
        }

    },

    reset: function() {
        Login.forms.validate();
    }

};

$(document).ready(function() {
    Login.reset();
});