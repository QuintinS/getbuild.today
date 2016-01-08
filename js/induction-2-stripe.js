var Stripe={StripeHandler:null,StripeResponseHandler:function(a){Checkout.storage.token=a,Stripe.StripeForm.add(),Stripe.StripeForm.populate(),Stripe.StripeForm.submit()},StripeForm:{add:function(){var a=document.createElement("form");a.setAttribute("method","post"),a.setAttribute("id","StripeForm"),a.setAttribute("action","/Stripe/DoStripe.asp"),a.setAttribute("style","display:none"),document.body.appendChild(a)},populate:function(){var a;a=Checkout.storage.token;var b=JSON.stringify(a);$("#StripeForm").append('<input type="hidden" name="JSON" value="'+b+'" />'),$("#StripeForm").append('<input type="hidden" name="card_holder_name" value="'+PaymentGateway.PostData.data.card_holder_name+'" />'),$("#StripeForm").append('<input type="hidden" name="street_address" value="'+PaymentGateway.PostData.data.street_address+'" />'),$("#StripeForm").append('<input type="hidden" name="street_address2" value="'+PaymentGateway.PostData.data.street_address2+'" />'),$("#StripeForm").append('<input type="hidden" name="city" value="'+PaymentGateway.PostData.data.city+'" />'),$("#StripeForm").append('<input type="hidden" name="state" value="'+PaymentGateway.PostData.data.state+'" />'),$("#StripeForm").append('<input type="hidden" name="zip" value="'+PaymentGateway.PostData.data.zip+'" />'),$("#StripeForm").append('<input type="hidden" name="country" value="'+PaymentGateway.PostData.data.country+'" />'),$("#StripeForm").append('<input type="hidden" name="email" value="'+PaymentGateway.PostData.data.email+'" />'),$("#StripeForm").append('<input type="hidden" name="phone" value="'+PaymentGateway.PostData.data.phone+'" />'),$("#StripeForm").append('<input type="hidden" name="li_0_description" value="'+PaymentGateway.PostData.data.li_0_description+'" />'),$("#StripeForm").append('<input type="hidden" name="li_1_description" value="'+PaymentGateway.PostData.data.li_1_description+'" />'),$("#StripeForm").append($('<input type="hidden" name="stripeTokenID" />').val(a.id)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenObject" />').val(a.object)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenClientIP" />').val(a.client_ip)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCreated" />').val(a.created)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenEmail" />').val(a.email)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenLiveMode" />').val(a.livemode)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenType" />').val(a.type)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenUsed" />').val(a.used)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenVerificationAllowed" />').val(a["verification allowed"])),"card"===Checkout.storage.token.type&&($("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Brand" />').val(a.card.brand)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Country" />').val(a.card.country)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_CVCCheck" />').val(a.card.cvc_check)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ExpMonth" />').val(a.card.exp_month)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ExpYear" />').val(a.card.exp_year)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Funding" />').val(a.card.funding)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_ID" />').val(a.card.id)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Last4" />').val(a.card.last4)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Name" />').val(a.card.name)),$("#StripeForm").append($('<input type="hidden" name="stripeTokenCard_Object" />').val(a.card.object)))},submit:function(){Framework.UI.loadingOverlay.add({text:"Setting up your Website..."}),document.forms.StripeForm.submit()}},StripeOptions:{data:{key:null,token:null,image:null,locale:null,currency:null,panelLabel:null,zipCode:null,billingAddress:null,shippingAddress:null,email:null,labelOnly:null,allowRememberMe:null,bitcoin:null,alipay:null,alipayReusable:null,opened:null,closed:null},capture:function(){var a="";a+=PaymentGateway.PostData.data.street_address+", ",a+=PaymentGateway.PostData.data.street_address2+", ",a+=PaymentGateway.PostData.data.city+", ",a+=PaymentGateway.PostData.data.state,Stripe.StripeOptions.data.token=Stripe.StripeResponseHandler,Stripe.StripeOptions.data.key=PaymentGateway.API.Keys.TestPublishable,Stripe.StripeOptions.data.image="/images/stripe-logo.png",Stripe.StripeOptions.data.locale="auto",Stripe.StripeOptions.data.currency="USD",Stripe.StripeOptions.data.panelLabel=null,Stripe.StripeOptions.data.zipCode=PaymentGateway.PostData.data.zip,Stripe.StripeOptions.data.email=PaymentGateway.PostData.data.email,Stripe.StripeOptions.data.labelOnly=null,Stripe.StripeOptions.data.allowRememberMe=null,Stripe.StripeOptions.data.bitcoin=null,Stripe.StripeOptions.data.alipay=null,Stripe.StripeOptions.data.alipayReusable=null,Stripe.StripeOptions.data.opened=Framework.UI.loadingOverlay.add,Stripe.StripeOptions.data.closed=Framework.UI.loadingOverlay.hide},clear:function(){Stripe.StripeOptions.data.key=null,Stripe.StripeOptions.data.token=null,Stripe.StripeOptions.data.image=null,Stripe.StripeOptions.data.locale=null,Stripe.StripeOptions.data.currency=null,Stripe.StripeOptions.data.panelLabel=null,Stripe.StripeOptions.data.zipCode=null,Stripe.StripeOptions.data.billingAddress=null,Stripe.StripeOptions.data.shippingAddress=null,Stripe.StripeOptions.data.email=null,Stripe.StripeOptions.data.labelOnly=null,Stripe.StripeOptions.data.allowRememberMe=null,Stripe.StripeOptions.data.bitcoin=null,Stripe.StripeOptions.data.alipay=null,Stripe.StripeOptions.data.alipayReusable=null,Stripe.StripeOptions.data.opened=null,Stripe.StripeOptions.data.closed=null}}},PaymentGateway={ready:!1,API:{Keys:{TestPublishable:"pk_test_xAwJMiXYzWYs2FlhcXLVLX3M",LivePublishable:"pk_live_i85izWOGIij0CQIqFUFDCXIS"}},templates:{printCheckout:function(a){if(void 0===a.amount||"string"!=typeof a.amount)throw"ArgumentError: Must pass argument 'amount' as type 'string'.";return myKey=PaymentGateway.API.Keys.TestPublishable,myImage="/images/logo-build-b-large.png",myName="GetBuild.Today",myDescription=a.description||null,myAmount=a.amount,myLocale=a.locale||"auto",returnHTML="",returnHTML+="<script",returnHTML+=' src="https://checkout.stripe.com/checkout.js"',returnHTML+=' class="stripe-button"',returnHTML+=' data-key="'+myKey+'"',returnHTML+=' data-image="'+myImage+'"',returnHTML+=' data-name="'+myName+'"',returnHTML+=' data-description="'+myDescription+'"',returnHTML+=' data-amount="'+myAmount+'"',returnHTML+=' data-locale="'+myLocale+'">',returnHTML+="</script>",returnHTML}},PostData:{clear:function(){PaymentGateway.PostData.data.card_holder_name=null,PaymentGateway.PostData.data.street_address=null,PaymentGateway.PostData.data.street_address2=null,PaymentGateway.PostData.data.city=null,PaymentGateway.PostData.data.state=null,PaymentGateway.PostData.data.zip=null,PaymentGateway.PostData.data.country=null,PaymentGateway.PostData.data.ship_name=null,PaymentGateway.PostData.data.ship_street_address=null,PaymentGateway.PostData.data.ship_street_address2=null,PaymentGateway.PostData.data.ship_city=null,PaymentGateway.PostData.data.ship_state=null,PaymentGateway.PostData.data.ship_zip=null,PaymentGateway.PostData.data.ship_country=null,PaymentGateway.PostData.data.email=null,PaymentGateway.PostData.data.phone=null},capture:function(){var a="",b=$("#RegistrationAddressLine1").val(),c=$("#RegistrationAddressLine2").val(),d=$("#RegistrationCity").val(),e=$("#RegistrationRegion").find("option:selected").text(),f=$("#RegistrationCountry").find("option:selected").text(),g=$("#RegistrationPostalCode").val(),h=$("#emailaddress").val(),i=$("#RegistrationPhoneNumber").val(),j=$("#RegistrationSubdomain").val();a+=$("#RegistrationFirstName").val(),a+=" ",a+=$("#RegistrationLastName").val();var k,l,m,n,o;if("free"===Checkout.storage.PricingPlan.code)k="Build - 14 Day Trial",l=1,m=0,n="14 Days";else if("monthly"===Checkout.storage.PricingPlan.code)k="Build - Monthly Subscription",l=1,m=20,n="1 Month",o="1 Month";else{if("yearly"!==Checkout.storage.PricingPlan.code)throw"Error: Checkout.storage.PricingPlan.code must be 'free', 'monthly' or 'yearly'.";k="Build - Yearly Subcription",l=1,m=150,n="12 Months"}PaymentGateway.PostData.data={card_holder_name:a,street_address:b,street_address2:c,city:d,state:e,zip:g,country:f,ship_name:a,ship_street_address:b,ship_street_address2:c,ship_city:d,ship_state:e,ship_zip:g,ship_country:f,email:h,phone:i,li_0_type:null,li_0_name:null,li_0_description:Checkout.storage.TemplateID,li_0_quantity:null,li_0_price:null,li_0_tangible:null,li_0_duration:null,li_1_type:null,li_1_name:null,li_1_description:j,li_1_quantity:null,li_1_price:null,li_1_tangible:null,product:{name:k,quantity:l,price:m,duration:n,recurrance:o}}},data:{card_holder_name:null,street_address:null,street_address2:null,city:null,state:null,zip:null,country:null,ship_name:null,ship_street_address:null,ship_street_address2:null,ship_city:null,ship_state:null,ship_zip:null,ship_country:null,email:null,phone:null,product:null,li_0_type:null,li_0_name:null,li_0_description:null,li_0_quantity:null,li_0_price:null,li_0_tangible:null,li_0_duration:null,li_1_type:null,li_1_name:null,li_1_description:null,li_1_quantity:null,li_1_price:null,li_1_tangible:null}},trigger:function(){PaymentGateway.PostData.clear(),PaymentGateway.PostData.capture(),Stripe.StripeOptions.capture();var a=PaymentGateway.PostData.data.card_holder_name,b=PaymentGateway.PostData.data.street_address,c=PaymentGateway.PostData.data.street_address2,d=PaymentGateway.PostData.data.country,e=PaymentGateway.PostData.data.state,f=PaymentGateway.PostData.data.city,g=PaymentGateway.PostData.data.zip,h=PaymentGateway.PostData.data.email,i=PaymentGateway.PostData.data.phone,j=PaymentGateway.PostData.data.li_0_description,k=PaymentGateway.PostData.data.li_1_description;"free"===Checkout.storage.PricingPlan.code?(Framework.UI.loadingOverlay.add({text:"Setting up your free trial Website..."}),$("#RegistrationForm [name='card_holder_name']").val(a),$("#RegistrationForm [name='street_address']").val(b),$("#RegistrationForm [name='street_address2']").val(c),$("#RegistrationForm [name='city']").val(f),$("#RegistrationForm [name='state']").val(e),$("#RegistrationForm [name='zip']").val(g),$("#RegistrationForm [name='country']").val(d),$("#RegistrationForm [name='email']").val(h),$("#RegistrationForm [name='phone']").val(i),$("#RegistrationForm [name='li_1_description']").val(k),$("#RegistrationForm [name='li_0_description']").val(j),document.forms.RegistrationForm.submit()):(myOptions={id:Checkout.storage.PricingPlan,code:Checkout.storage.PricingPlan.code,name:"Build",description:Checkout.storage.PricingPlan.description+" Membership",amount:100*Checkout.storage.PricingPlan.amount,token:Stripe.StripeResponseHandler,image:Stripe.StripeOptions.data.image,currency:Stripe.StripeOptions.data.currency,email:PaymentGateway.PostData.data.email},Stripe.StripeHandler.open(myOptions),$(window).on("DOMSubtreeModified",function(){Framework.UI.loadingOverlay.hide(),$(window).off("DOMSubtreeModified")}))},successRedirect:function(a){console.log(a)},reset:function(){PaymentGateway.PostData.clear()}},Checkout={storage:{TemplateID:null,PricingPlan:{id:null,code:null,name:null,description:null,amount:null},token:null},validateForms:function(){$("#RegistrationForm").validate({rules:{RegistrationFirstName:{required:!0},RegistrationLastName:{required:!0},RegistrationAddressLine1:{required:!0},RegistrationCity:{required:!0},RegistrationPostalCode:{required:!0},RegistrationCountry:{required:!0},RegistrationRegion:{required:!0},RegistrationPhoneNumber:{required:!0},emailaddress:{required:!0,email:!0},fqdn:{pattern:"[A-Za-z0-9-]{0,61}",required:!0,remote:{url:"/domains/subdomains/CheckDomains.asp",type:"post"}}},messages:{RegistrationFirstName:"Please enter your first name.",RegistrationLastName:"Please enter your last name.",RegistrationAddressLine1:"Please enter your address.",RegistrationAddressLine2:"Please enter your address.",RegistrationCity:"Please enter your city.",RegistrationPostalCode:"Please enter your postal code.",RegistrationCountry:"Please select your country.",RegistrationRegion:"Please select your region.",RegistrationPhoneNumber:"Please enter your phone number.",emailaddress:{required:"Please enter your e-mail address.",remote:"Sorry, this e-mail address has already been taken!"},fqdn:{pattern:"Sorry, this isn't a valid subdomain!",required:"Please enter the subdomain you would like to use.",remote:"Sorry, this subdomain has already been taken!"}},submitHandler:function(){var a={fqdn:$("#RegistrationSubdomain").val()+".usebuild.co"};return $.ajax({url:"http://www.getbuild.today/Domains/Subdomains/checkdomains.asp",type:"post",beforeSend:function(){Framework.UI.loadingOverlay.add({text:"Checking Domain Availability..."})},data:a}).success(function(a){var b=a;if(console.log(a),("true"===b||b===!0)&&PaymentGateway.trigger(),"false"===b||b===!1){Framework.UI.loadingOverlay.hide();{noty({layout:"bottomCenter",theme:"relax",text:"Sorry, that subdomain is already taken.",type:"error",animation:{open:"animated fadeInUp",close:"animated fadeOut"},timeout:5e3})}}}).fail(function(){}),!1},errorClass:"error",validClass:"valid",showErrors:generateErrorList})},assignEventListeners:function(){$("[data-action='SelectPricingPlan']").on("click",Checkout.eventHandlers.SelectPricingPlan),$(window).on("popstate",function(){Stripe.StripeHandler.close()}),$(window).on("charge.succeeded",function(){console.log("Charge Succeeded.")})},eventHandlers:{SelectPricingPlan:function(a){var b=$(a.currentTarget).closest(".PricingPlan"),c=b.attr("id"),d=b.find(".PricingPlanTitle").text(),e=(b.find(".PricingPlanDescription").text(),b.attr("data-amount").toString());if("PricingPlanFree"===c)Checkout.storage.PricingPlan={id:c,code:"free",name:"GetBuild.Today",description:d,amount:e};else if("PricingPlanMonthly"===c)Checkout.storage.PricingPlan={id:c,code:"monthly",name:"GetBuild.Today",description:d,amount:e};else{if("PricingPlanYearly"!==c)throw"Invalid Pricing Plan Selected.";Checkout.storage.PricingPlan={id:c,code:"yearly",name:"GetBuild.Today",description:d,amount:e}}},isCheckoutReady:function(){return PaymentGateway.ready===!0?(Framework.UI.loadingOverlay.hide(),!0):!1}},reset:function(){Checkout.storage.TemplateID=utilities.getQueryStringVars().templateid,Checkout.validateForms(),Checkout.assignEventListeners(),$("#StripeForm").remove()}},utilities={getQueryStringVars:function(){if(a=window.location.search.substr(1).split("&"),""===a)return{};for(var b={},c=0;c<a.length;++c){var d=a[c].split("=",2);b[d[0]]=1==d.length?"":decodeURIComponent(d[1].replace(/\+/g," "))}return b},createErrorPopover:function(a,b){var c;return c=$(a).popover({trigger:"manual",placement:"bottom",content:b,template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'}),c.data("bs.popover").options.content=b,$(a).popover("show")}};Checkout.reset(),PaymentGateway.reset(),$(document).ready(function(){$.crs()}),$(window).load(function(){Stripe.StripeHandler=StripeCheckout.configure({key:PaymentGateway.API.Keys.TestPublishable,locale:"auto",token:Stripe.StripeResponseHandler}),PaymentGateway.ready=!0,Checkout.eventHandlers.isCheckoutReady()});
//# sourceMappingURL=induction-2-stripe.js.map