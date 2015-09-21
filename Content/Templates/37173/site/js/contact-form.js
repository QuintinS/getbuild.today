﻿function isValidName(n){var t=new RegExp(/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/);return t.test(n)}function isValidEmailAddress(n){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return t.test(n)}function isValidPhoneNumber(n){var t=new RegExp(/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/);return t.test(n)}function validateName(){var n=$("input#name").val();return isValidName(n)?n:!1}function validateEmail(){var n=$("input#email").val();return isValidEmailAddress(n)?n:!1}function validatePhone(){var n=$("input#phone").val();return isValidPhoneNumber(n)?n:!1}function validateMessage(){var n=$("textarea#message").val();return n.length<=19?!1:n}function validateInput(n){var t=$("input#"+n+"").val();return t.length<1?!1:!0}function validateTextArea(n){var t=$("textarea#"+n+"").val();return t.length<1?!1:!0}$(function(){$(".error").fadeOut(0);$("a#clear").click(function(){$(".error").fadeOut(0);$("form#contact-form").clearForm()});$("input#name").blur(function(){validateInput("name")?validateName()||($("label#name_error").fadeOut(0),$("label#name_error2").fadeIn(250)):$("label#name_error2").fadeOut(0)});$("input#email").blur(function(){validateInput("email")?validateEmail()||($("label#email_error").fadeOut(0),$("label#email_error2").fadeIn(250)):$("label#email_error2").fadeOut(0)});$("input#phone").blur(function(){validateInput("phone")?validatePhone()||($("label#phone_error").fadeOut(0),$("label#phone_error2").fadeIn(250)):$("label#phone_error2").fadeOut(0)});$("textarea#message").blur(function(){validateTextArea("message")?validateMessage()||($("label#message_error").fadeOut(0),$("label#message_error2").fadeIn(250)):$("label#message_error2").fadeOut(0)});$("input#name").keydown(function(){validateInput("name")&&$("label#name_error").fadeOut(0);validateName()&&$("label#name_error2").fadeOut(0)});$("input#email").keydown(function(){validateInput("email")&&$("label#email_error").fadeOut(0);validateEmail()&&$("label#email_error2").fadeOut(0)});$("input#phone").keydown(function(){validateInput("phone")&&$("label#phone_error").fadeOut(0);validatePhone()&&$("label#phone_error2").fadeOut(0)});$("textarea#message").keydown(function(){validateTextArea("message")&&$("label#message_error").fadeOut(0);validateMessage()&&$("label#message_error2").fadeOut(0)});var n=$("input#owner_email").val();isValidEmailAddress(n)||$("#contact_form").html("<label class='error'>*Owner email is not valid<\/label>");$("a#submit").click(function(){var t=!1,r;if(validateName()?(name=validateName(),$("label#name_error").fadeOut(0),$("label#name_error2").fadeOut(0)):validateInput("name")?($("label#name_error").fadeOut(0),$("label#name_error2").fadeIn(250),t=!0):($("label#name_error").fadeIn(250),$("label#name_error2").fadeOut(0),t=!0),validateEmail()?(email=validateEmail(),$("label#email_error").fadeOut(0),$("label#email_error2").fadeOut(0)):validateInput("email")?($("label#email_error").fadeOut(0),$("label#email_error2").fadeIn(250),t=!0):($("label#email_error").fadeIn(250),$("label#email_error2").fadeOut(0),t=!0),validatePhone()?(phone=validatePhone(),$("label#phone_error").fadeOut(0),$("label#phone_error2").fadeOut(0)):validateInput("phone")?($("label#phone_error").fadeOut(0),$("label#phone_error2").fadeIn(250),t=!0):($("label#phone_error").fadeIn(250),$("label#phone_error2").fadeOut(0),t=!0),validateMessage()?(message=validateMessage(),$("label#message_error").fadeOut(0),$("label#message_error2").fadeOut(0)):validateTextArea("message")?($("label#message_error").fadeOut(0),$("label#message_error2").fadeIn(250),t=!0):($("label#message_error").fadeIn(250),$("label#message_error2").fadeOut(0),t=!0),t)return!1;var u=$("input#stripHTML").val(),f=$("input#smtpMailServer").val(),e="name="+name+"&email="+email+"&phone="+phone+"&message="+message+"&owner_email="+n+"&stripHTML="+u+"&smtpMailServer="+f,i=$("input#serverProcessorType").val();return fileExtension=i=="asp"?"ashx":i,r="bin/MailHandler."+fileExtension,$.ajax({type:"POST",url:r,data:e,success:function(){$(".error").fadeOut(0);$("form#contact-form").clearForm();$("#contact_form").html("<div class='download-box'>Contact form submitted!<\/div>").append("<br><label for='message'><b>We will be in touch soon.<\/b><\/label>").hide().fadeIn(1500,function(){$("#contact_form").append("<br><br><a id='back' onclick='window.location.reload(); return false;' class='button'>back<\/a>")})}}),!1})});$.fn.clearForm=function(){return this.each(function(){var n=this.type,t=this.tagName.toLowerCase();if(t=="form")return $(":input",this).clearForm();n=="text"||n=="password"||t=="textarea"?this.value="":n=="checkbox"||n=="radio"?this.checked=!1:t=="select"&&(this.selectedIndex=-1)})};