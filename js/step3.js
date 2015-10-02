﻿function toggleResultsPanel(){$("#results").slideToggle(function(){})}function openResultsPanel(){$("#results").slideDown(function(){})}function closeResultsPanel(){$("#results").slideUp(function(){})}function closeAllResults(){$("#results-nonefound-suggestions").slideUp();$("#results-nonefound").slideUp();$("#results-success").slideUp();$("#results-fail").slideUp()}function hideAllResults(){$("#results-nonefound-suggestions").hide();$("#results-nonefound").hide();$("#results-success").hide();$("#results-fail").hide()}function showLoadingOverlay(){$("#results-loading").fadeIn(300,function(){clearContents()})}function hideLoadingOverlay(){$("#results-loading").fadeOut(300,function(){})}function clearContents(){$("#alternateDomains").html("")}function domainSearch(){}function performSearch(n){var t,i;n==undefined?(t=$("#domainName").val(),i=$("#domain-dropdown input:checked").attr("value"),domainNameSearched=t,domainExtensionSearched=i,domainSearched=domainNameSearched+"."+domainExtensionSearched,console.log("domainSearched == "+domainSearched),CheckDomainAvailability(domainNameSearched,domainExtensionSearched),showLoadingOverlay(),openResultsPanel()):(domainSearched=n,console.log("domainSearched"==domainSearched),domainNameSearched=n.substr(0,n.indexOf(".")),console.log("domainNameSearched"==domainNameSearched),domainExtensionSearched=n.substr(n.indexOf(".")+1),console.log("domainExtensionSearched"==domainExtensionSearched),CheckDomainAvailability(domainNameSearched,domainExtensionSearched),showLoadingOverlay(),openResultsPanel());domainDropdownShowing==!0&&closeDropdown()}function performSearchWithSuggestion(){myDomain=$("#alternateDomains input:checked").attr("value");performSearch(myDomain)}function finishedSearching(){$("#results-loading").fadeOut(300,function(){})}function populateDomains(n){console.log("populateDomains()");var t=n;console.log("myDomains");console.log(t);(n==undefined||n==null)&&(t=[]);$(t).each(function(n){var i=t[n],r=n+1,u=printSearchResults(r,"radio",i);$("#alternateDomains").append(u)})}function populateSuggestions(n){var t=n;(n==undefined||n==null)&&(t=[]);$(t).each(function(n){var i=t[n],r=n+1,u=printSearchSuggestion(r,"radio",i);$("#alternateDomains").append(u)})}function populateSingleDomain(n){myHTML=printSingleSearchResult(n);$("#alternateDomains").append(myHTML)}function printSearchResults(n,t,i){var f;console.log("printSearchResults("+n+", "+t+", "+i+")");var u=i,r=n,e="radio",s=u.substr(0,u.indexOf(".")),o=u.substr(u.indexOf(".")+1);return(console.log("myOptionNumber == "+r),console.log("myCheckboxType == "+e),console.log("myDomain == "+u),console.log("myDomainName == "+s),console.log("myDomainExtension == "+o),f="",r==NaN||r<1||r==null||r==undefined||typeof r!="number")?(console.log("Problem with option number."),!1):(r%2==1&&(f="alt"),'\t<li class="'+f+'">\t\t<label for="option'+r+'" onclick="showProceedButtons()">\t\t\t<span class="left">\t\t\t\t<input id="option'+r+'" name="alternateDomain" type="'+e+'" name="alternate-domain-type" value="'+u+'" />\t\t\t\t<span class="name">'+u+'<\/span>\t\t\t<\/span>\t\t\t<span class="right">\t\t\t\t<span class="price">'+getExtensionPricing(o)+"<\/span>\t\t\t<\/span>\t\t<\/label>\t<\/li>\t")}function printSearchSuggestion(n,t,i){var r=n,f="radio",u=i,o=u.substr(0,u.indexOf(".")),s=u.substr(u.indexOf(".")+1),e="";return(f!="checkbox"||f!="radio"||f==undefined,r==NaN||r<1||r==null||r==undefined||typeof r!="number")?!1:(r%2==1&&(e="alt"),'\t<li class="'+e+'">\t\t<label for="option'+r+'" onclick="showProceedButtons()">\t\t\t<span class="left">\t\t\t\t<input id="option'+r+'" name="alternateDomain" type="'+f+'" name="alternate-domain-type" value="'+u+'" />\t\t\t\t<span class="name">'+u+'<\/span>\t\t\t<\/span>\t\t\t<span class="right">\t\t\t<\/span>\t\t<\/label>\t<\/li>\t')}function printSingleSearchResult(n){var t=n;return'\t\t\t\t<input id="singleDomain" name="singleDomain" type="hidden" value="'+t+'" />\t'}function getOfferedExtensions(){console.log("getOfferedExtensions()");$.ajax({url:"xml/domainpricing.xml",method:"GET"}).success(function(n){console.log("getOfferedExtensions Success.");console.log(n);buildOfferedExtensions=n;printOfferedExtensions(n)}).fail(function(){console.log("Fail.");console.log()})}function printOfferedExtensions(n){console.log("printOfferedExtensions()");strReturnExtensions="";var t;$(n).find("extension").each(function(){console.log($(this));t=$(this).attr("name");numMyPrice=$(this).text();console.log("strMyExtension == "+t);console.log("numMyPrice == "+numMyPrice);printExtensionRadioButton(t)});$("#popular-domains input").each(function(){allExtensionsArray.push($(this).attr("value"))});$("input[name='domainCheckbox']").on("click",function(){var n=$(this).attr("value");$("#selected-domain").html(n)})}function populateExtensionDropdown(){}function printExtensionRadioButton(n){strReturn='<div class="col-la-2 col-md-3 col-sm-6 col-xs-6">\t\t<label for="domain-checkbox-'+n+'"><input id="domain-checkbox-'+n+'" name="domainCheckbox" type="radio" value="'+n+'"> <span>'+n+"<\/span><\/label>\t<\/div>";$(strReturn).appendTo("#popular-domains")}function changeResultsMessage(n){if(console.log("changeResultsMessage("+n+")"),$("#proceed-buttons").hide(),typeof n!="string"||n==undefined)return console.log("Error - resultsType argument not defined or not type String."),!1;n=="found-single"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large domain-message'>Congratulations!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'><strong>"+domainAvailable+"<\/strong> is available for <strong>"+getExtensionPricing(domainExtensionAvailable)+"<\/strong><\/p>"),showProceedButtons(),showButton("proceedButton")):n=="found-single-multiple"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large domain-message'>Congratulations!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'><strong>"+domainAvailable+"<\/strong> is available for <strong>"+getExtensionPricing(domainExtensionAvailable)+"<\/strong><\/p>"),showProceedButtons(),showButton("proceedButton")):n=="found-multiple"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Success!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'>Congratulations, we've found some results that match your search! Please choose the one you would like.<\/p><p class='domain-message'>Otherwise, try searching again.<\/p>"),showButton("proceedButton")):n=="notfound"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Sorry!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'><strong>"+domainSearched+"<\/strong> is unfortunately already taken. Try searching again.<\/p>"),hideProceedButtons()):n=="notfound-suggestions"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Dang!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'><strong>"+domainSearched+"<\/strong> is unfortunately already taken. Try searching again, or choose one of these extensions:<\/p>"),showButton("searchButton")):n=="not-available"?(console.log("Not Available"),$("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Wowzer!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'>The domain name <strong>'"+domainNameSearched+"'<\/strong> is unfortunately not available in any way, shape or form.<\/p><p class='domain-message'>Try searching again.<\/p> <p class='domain-message'>"),hideProceedButtons()):n=="fail"?($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Whoops!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'>Sorry, it seems as though something has gone wrong. Please try again later.<\/p>"),hideProceedButtons()):($("#ResultsMessageHeader").html("<p class='domain-message'><strong class='large'>Whoops!<\/strong><\/p>"),$("#ResultsMessage").html("<p class='domain-message'>Sorry, it seems as though something has gone wrong. Please try again later.<\/p>"),hideProceedButtons());hideLoadingOverlay()}function showProceedButtons(){$("#proceed-buttons").show()}function hideProceedButtons(){$("#proceed-buttons").hide()}function getExtensionPricing(n){if(n!=undefined){if(typeof n!="string")return console.log("Incorrect type for paramater 'extension'. Must be type String."),!1}else console.log("Parameter 'Extension' (type String) is required.");var i=n.toLowerCase(),t,r;return i=="com"?t=7.49:i=="net"?t=7.49:i=="biz"?t=7.49:i=="org"?t=7.49:i=="info"?t=7.49:i=="us"&&(t=7.49),r=t+2,t!=null?"$"+r+" per year":"Could not retrieve price for domain."}function toggleDropdown(){domainDropdownShowing==!1?($("#dropdownButtonIcon").addClass("glyphicon-ok"),$("#dropdownButtonIcon").removeClass("glyphicon-chevron-down"),$("#domain-dropdown").slideDown(),domainDropdownShowing=!0):domainDropdownShowing==!0&&($("#dropdownButtonIcon").addClass("glyphicon-chevron-down"),$("#dropdownButtonIcon").removeClass("glyphicon-ok"),$("#domain-dropdown").slideUp(),domainDropdownShowing=!1)}function closeDropdown(){$("#dropdownButtonIcon").addClass("glyphicon-chevron-down");$("#dropdownButtonIcon").removeClass("glyphicon-ok");$("#domain-dropdown").slideUp();domainDropdownShowing=!1}function openDropdown(){$("#dropdownButtonIcon").addClass("glyphicon-ok");$("#dropdownButtonIcon").removeClass("glyphicon-chevron-down");$("#domain-dropdown").slideDown();domainDropdownShowing=!0}function showButton(n){if(typeof n!="string")return console.log("TypeError - buttonID must be of type String."),!1;if(n=="proceedButton")$("#proceedButton").show(),$("#searchButton").hide();else if(n=="searchButton")$("#proceedButton").hide(),$("#searchButton").show();else return console.log("ArgumentError - buttonID not valid. Must be either 'searchButton' or 'proceedButton'"),!1}function AjaxCallComplete(){hideLoadingOverlay()}console.log("included step3.js");var domainDropdownShowing=!1,searchType,buildOfferedExtensions,domainPrice,domainSearched,domainNameSearched,domainExtensionSearched,domainAvailable,domainNameAvailable,domainExtensionAvailable,allExtensionsArray=[];$(document).ready(function(){console.log("step3.js document ready.");getOfferedExtensions()});