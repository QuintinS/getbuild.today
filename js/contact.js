function sendContactEmail(){var myEmail=$("#ContactEmail").val(),myName=$("#ContactName").val(),myMessage=$("#ContactMessage").val(),myCheckbox=$("#ContactNewsletter").is(":checked");$.ajax({type:"POST",url:"/contactus.asp",data:{buildContactEmail:myEmail,buildContactName:myName,buildContactMessage:myMessage,buildContactCheckbox:myCheckbox},beforeSend:function(){Framework.UI.loadingOverlay.add({text:"Sending Message..."})}}).success(function(response){if(myAuth=$(response).find("authentication").text(),Framework.UI.loadingOverlay.hide(),"updated"==myAuth){noty({text:'<span class="glyphicon glyphicon-ok">&nbsp;</span><span class="value"><strong>Thank you!</strong> Your message has been sent.</span>',type:"success",theme:"relax",layout:"bottom",timeout:5e3,animation:{open:"animated fadeInUp",close:"animated fadeOutUp"}})}else{noty({text:"<span class='glyphicon glyphicon-remove'>&nbsp;</span><span class='value'>Oops! Something went wrong. Don't worry, it's nothing you did... we're looking into it. Please try again later!</span>",type:"error",modal:!0,theme:"relax",layout:"center",timeout:5e3,animation:{open:"animated fadeInUp",close:"animated fadeOutUp"}})}}).fail(function(){Framework.UI.loadingOverlay.hide();noty({text:"<span class='glyphicon glyphicon-remove'>&nbsp;</span><span class='value'>Oops! Something went wrong. Don't worry, it's nothing you did... we're looking into it. Please try again later!</span>",type:"error",modal:!0,theme:"relax",layout:"center",timeout:5e3,animation:{open:"animated fadeInUp",close:"animated fadeOutUp"}})})}var validateContactForm=function(){$("#ContactForm").validate({rules:{ContactEmail:{required:!0,email:!0},ContactName:{required:!0},ContactMessage:{required:!0}},messages:{ContactEmail:{required:"Please enter your e-mail address.",email:"Sorry, your email address is not valid. Please try again!"},ContactName:"Please enter your name.",ContactMessage:"Please enter your message."},submitHandler:function(){sendContactEmail()},showErrors:generateErrorList})};validateContactForm();
//# sourceMappingURL=contact.js.map