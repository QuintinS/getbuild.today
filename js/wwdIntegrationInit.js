﻿console.log("included wwdIntegrationInit.js");var validateWwdCreateNewShopper=$("#wwdCreateNewShopper").validate({rules:{wwdFirstName:{required:!0},wwdLastName:{required:!0},wwdPassword:{required:!0,minlength:5},wwdPasswordConf:{required:!0,minlength:5,equalTo:"#wwdPassword"},wwdEmail:{required:!0,email:!0},wwdEmailConf:{required:!0,email:!0,equalTo:"#wwdEmail"},wwdPhoneNumber:{required:!0}},messages:{wwdFirstName:"Please enter your first name.",wwdLastName:"Please enter your last name.",wwdPassword:"Please enter a password (must be at least 5 characters long).",wwdPasswordConf:"Your password does not match.",wwdEmail:"Please enter your e-mail address.",wwdEmailConf:"Your e-mail address does not match.",wwdPhoneNumber:"Please enter your phone number."},submitHandler:function(){wwdCreateNewShopper({wwdFirstName:$(wwdFirstName).val(),wwdLastName:$(wwdLastName).val(),wwdPassword:$(wwdPassword).val(),wwdEmail:$(wwdEmail).val(),wwdPhoneNumber:$(wwdPhoneNumber).val()})},showErrors:function(n,t){return $.each(this.successList,function(n,t){return $(t).popover("hide")}),$.each(t,function(n,t){var i;return console.log(t.message),i=$(t.element).popover({trigger:"manual",placement:"bottom",content:t.message,template:'<div class="popover"><div class="arrow"><\/div><div class="popover-inner"><div class="popover-content"><p><\/p><\/div><\/div><\/div>'}),i.data("bs.popover").options.content=t.message,$(t.element).popover("show")})}});