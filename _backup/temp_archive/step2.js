﻿function changeFormActions(){selectionType=="new-domain"?($("#proceed-type-domain").removeClass("hidden"),$("#proceed-type-payment").addClass("hidden")):selectionType=="free-subdomain"||selectionType=="existing-domain"?($("#proceed-type-domain").addClass("hidden"),$("#proceed-type-payment").removeClass("hidden")):$("#proceed-actions").addClass("hidden")}function updateMessage(){console.log("updateMessage()");selectionType=="new-domain"?(console.log("New Domain"),$("#clarification-message").html("I want to register a new domain.")):selectionType=="existing-domain"?(console.log("Existing Domain"),$("#clarification-message").html("I already have a domain, and I want to use it. <span>"+myNewDomain+"<\/span>")):selectionType=="free-subdomain"&&(console.log("Free Subdomain"),$("#clarification-message").html("I want to use a free Build subdomain. I'd like it to be <span>"+mySubDomain+".build2trade.com<\/span>"))}var selectionType="",myNewDomain="",mySubDomain="";$("input[type=radio][name=domain-type]").change(function(){$("#proceed-actions").hasClass("hidden")==!0&&$("#proceed-actions").removeClass("hidden");$(this).val()=="new-domain"?(console.log($(this).val()),console.log("Registering your Own Domain"),selectionType="new-domain",$("#selection-new-domain").addClass("selected"),$("#inner-form-new-domain").slideDown(),$("#selection-existing-domain").removeClass("selected"),$("#inner-form-existing-domain").slideUp(),$("#selection-free-subdomain").removeClass("selected"),$("#inner-form-free-subdomain").slideUp(),changeFormActions(),updateMessage()):$(this).val()=="existing-domain"?(console.log($(this).val()),console.log("Using an Existing Domain"),selectionType="existing-domain",$("#selection-new-domain").removeClass("selected"),$("#inner-form-new-domain").slideUp(),$("#selection-existing-domain").addClass("selected"),$("#inner-form-existing-domain").slideDown(),$("#selection-free-subdomain").removeClass("selected"),$("#inner-form-free-subdomain").slideUp(),changeFormActions(),updateMessage()):$(this).val()=="free-subdomain"&&(console.log($(this).val()),console.log("Using a Free Build Domain"),selectionType="free-subdomain",$("#selection-new-domain").removeClass("selected"),$("#inner-form-new-domain").slideUp(),$("#selection-existing-domain").removeClass("selected"),$("#inner-form-existing-domain").slideUp(),$("#selection-free-subdomain").addClass("selected"),$("#inner-form-free-subdomain").slideDown(),changeFormActions(),updateMessage())});$("#registerSub").on("keyup",function(){mySubDomain=$("#registerSub").val();console.log("mySubDomain =="+mySubDomain);updateMessage()});