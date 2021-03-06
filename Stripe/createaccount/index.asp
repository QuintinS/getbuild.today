<!DOCTYPE html>

<html>

	<head>

		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />
		<meta name="creator" content="Build - www.getbuild.today">
		<meta name="author" content="Build - www.getbuild.today"/>
		<meta name="generator" content="Build - www.getbuild.today"/>

		<title>Build - Registration</title>

		<link rel="stylesheet" href="/css/generic.css">
		<link rel="stylesheet" href="/css/induction.css">
		<link rel="icon" type="image/png" href="/images/logo-build-b-favicon.png">

		<script src="/js/jquery.js"></script>
		<script type="text/javascript" src="/js/framework.js"></script>

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->

	</head>
	
<body id="page-induction-2" class="page-induction-2 induction">

	<div class="loading-overlay">
		<div class="loader"></div>
		<div class="loader-text">Loading Payment Gateway...</div>
	</div>
	
	<header>
		<div class="BuildHeader" id="BuildHeader">
			<div class="container">
				<div class="BuildHeaderBranding">
					<a class="LogoLink" href="/">
			    		<img class="Logo" src="/images/logo.png" alt="">
			    	</a>
				    <button id="BuildNavbarToggle" data-action="ToggleNavbar" class="BuildNavbarToggle btn btn-success">
						<span class="glyphicon glyphicon-menu-hamburger"></span>
						<span class="sr-only">Toggle navigation</span>
					</button>
				</div>
				<nav class="BuildHeaderNav">
					<div class="BuildHeaderMenu collapsed">
						<div class="text-right margin-top-10">
							<span class="induction-progress">
								<a href="/getstarted/" aria-label="Select Template" title="Back to Select Template" data-toggle="tooltip" data-placement="bottom" class="btn btn-success">
									<span class="glyphicon glyphicon-ok"></span>
									<span>Select Template</span>
								</a>
								<span class="induction-progress-separator hidden-xs hidden-sm">
									<span class="glyphicon glyphicon-chevron-right"></span>
								</span>
								<a href="javascript:;" aria-label="Create Account" title="Back to Create Account" data-toggle="tooltip" data-placement="bottom" class="btn btn-primary active">
									<span class="glyphicon glyphicon-user"></span>
									<span>Create Account</span>
								</a>
								<span class="induction-progress-separator hidden-xs hidden-sm">
									<span class="glyphicon glyphicon-chevron-right"></span>
								</span>
								<a href="javascript:;" aria-label="Complete Order" title="Back to Complete Order" data-toggle="tooltip" data-placement="bottom" class="btn btn-primary" disabled>
									<span class="glyphicon glyphicon-credit-card"></span>
									<span>Complete Order</span>
								</a>
							</span>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>

	<main>

		<section id="content">

			<div class="container">

				<form id="RegistrationForm" name="RegistrationForm" method="post" action="/trial.asp">
			
					<div class="process col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">			

						<div class="content-box">

							<h4>Please create your account</h4>

							<p class="text-center">Please fill out the form to create your account.</p>

							<hr>

							<div class="row">

								<div class="col-md-6">

									<div class="form-group">
										<label class="sr-only" for="RegistrationFirstName">First Name</label>
										<input class="form-control" type="text" id="RegistrationFirstName" name="RegistrationFirstName" placeholder="First Name *" tabindex="1" autocomplete="given-name"/>
									</div>

								</div>

								<div class="col-md-6">

									<div class="form-group">
										<label class="sr-only" for="RegistrationLastName">Last Name</label>
										<input class="form-control" type="text" id="RegistrationLastName" name="RegistrationLastName" placeholder="Last Name *" tabindex="2" autocomplete="family-name"/>
									</div>

								</div>

							</div>

							<hr>

							<div class="row">

								<div class="col-md-6">
									<div class="form-group">								
										<label class="sr-only" for="RegistrationAddressLine1">Address Line 1</label>
										<input class="form-control" type="text" id="RegistrationAddressLine1" name="RegistrationAddressLine1" placeholder="Address Line 1 *" tabindex="3" autocomplete="address-line1"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationCity">City</label>
										<input class="form-control" type="text" id="RegistrationCity" name="RegistrationCity" placeholder="City *" tabindex="5" autocomplete="address-level2"/>
									</div>
								</div>

							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">								
										<label class="sr-only" for="RegistrationAddressLine2">Address Line 2</label>
										<input class="form-control" type="text" id="RegistrationAddressLine2" name="RegistrationAddressLine2" placeholder="Address Line 2" tabindex="4" autocomplete="address-line2"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationPostalCode">Postal Code</label>
										<input class="form-control" type="text" id="RegistrationPostalCode" name="RegistrationPostalCode" placeholder="Postal Code *" tabindex="6" autocomplete="postal-code"/>
									</div>
								</div>
							</div>

							<hr>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationCountry">Country</label>
										<select class="form-control crs-country" name="RegistrationCountry" id="RegistrationCountry" data-region-id="RegistrationRegion" tabindex="7" autocomplete="country-name">
											<option value="">- Select a Country -</option>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationRegion">Region</label>
										<select class="form-control" name="RegistrationRegion" id="RegistrationRegion" tabindex="8" autocomplete="address-level1">
											<option value="">- Select a Region -</option>
										</select>
									</div>
								</div>
							</div>

							<hr>															

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationPhoneNumber">Phone Number</label>
										<input class="form-control" type="text" id="RegistrationPhoneNumber" name="RegistrationPhoneNumber" placeholder="Phone Number *" tabindex="9" autocomplete="tel"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="emailaddress">E-Mail Address</label>
										<input class="form-control" type="text" id="emailaddress" name="emailaddress" placeholder="E-Mail Address *" tabindex="10" autocomplete="email"/>
									</div>
								</div>
							</div>

						</div> <!-- section -->

						<div class="content-box">

							<h4>What would you like your domain to be?</h4>

							<div class="row subdomain">

								<div class="col-md-10 col-sm-12 col-la-4 col-md-offset-1 col-la-offset-2">

									<div class="form-group">
										<div class="input-group">
											<label class="input-group-addon hidden-xs" for="RegistrationSubdomain" aria-label="Subdomain">
												http://
											</label>
											<input class="form-control" type="text" id="RegistrationSubdomain" name="RegistrationSubdomain" placeholder="Subdomain" tabindex="11" />
											<label class="input-group-addon" for="RegistrationSubdomain" aria-label="Subdomain">
												.usebuild.co
											</label>
										</div>
									</div>

								</div>
							</div>

						</div> <!-- Section -->

					</div>

					<div class="process PricingPlansContainer col-md-10 col-sm-10 col-lg-8 col-sm-offset-1 col-md-offset-1 col-lg-offset-2">

						<div class="">

							<div class="PricingPlans" id="PricingPlans">
								
								<div id="PricingPlanFree" class="PricingPlan PricingPlanGrey" data-amount="0">

									<div class="PricingPlanTitle">
										<span>Free Trial</span>
									</div>

									<div class="PricingPlanPrice">
										<span><span class="CurrencySymbol">Free</span>
									</div>

									<div class="PricingPlanDescription">
										<p><strong>No-obligation, full-featured free trial. Try Build free for 14 days!</strong></p>
										<p>At the end of your trial, you have the option to upgrade. We’ll keep your site on ice for 30 days.</p>
									</div>

									<div class="PricingPlanAction">
										<p class="PricingPlanActionDescription">Try before you buy!</p>
										<button value="free" type="submit" data-action="SelectPricingPlan" class="btn btn-default">Choose this Plan</button>
									</div>

									<div class="PricingPlanExtras">
										<!-- <span class="PricingPlanSash SpecialOffer">Special Offer!</span> -->
									</div>
									
								</div>

								
								<div id="PricingPlanYearly" class="PricingPlan PricingPlanBlue" data-amount="150">

									<div class="PricingPlanTitle">
										<span>Yearly</span>
									</div>

									<div class="PricingPlanPrice">
										<span><span class="CurrencySymbol">$</span><span class="CurrencyUnits">12</span><span class="CurrencyCents">.50</span> p/m</span>
									</div>

									<div class="PricingPlanDescription">
										<p><strong>The best value for your money.</strong></p>
										<p><strong>Limited time offer:</strong> <br> Sign up now, and get <strong class="fontweight-normal">6 months extra</strong> for free!</p>
									</div>

									<div class="PricingPlanAction">
										<p class="PricingPlanActionDescription">Best value!</p>
										<button value="yearly" type="submit" data-action="SelectPricingPlan" class="btn btn-primary">Choose this Plan</button>
									</div>

									<div class="PricingPlanExtras">
										<div class="PricingPlanSash SpecialOffer"></div>
									</div>
									
								</div>

								<div id="PricingPlanMonthly" class="PricingPlan PricingPlanGreen" data-amount="20">

									<div class="PricingPlanTitle">
										<span>Monthly</span>
									</div>

									<div class="PricingPlanPrice">
										<span><span class="CurrencySymbol">$</span><span class="CurrencyUnits">20</span><span class="CurrencyCents">.00</span> p/m</span>
									</div>

									<div class="PricingPlanDescription">
										<p><strong>Our friendly, entry-level plan.</strong></p>
										<p>Pay at the beginning of each month. Includes hosting, use of the world’s easiest website builder, and over $1,000 worth of business vouchers!</p>
									</div>

									<div class="PricingPlanAction">
										<p class="PricingPlanActionDescription">Least Risk!</p>
										<button value="monthly" type="submit" data-action="SelectPricingPlan" class="btn btn-success">Choose this Plan</button>
									</div>

									<div class="PricingPlanExtras">
										<!-- <span class="PricingPlanSash SpecialOffer">Special Offer!</span> -->
									</div>
									
								</div>


							</div>

						</div>

					</div>

					<input type="hidden" name="li_0_type" value="" />
					<input type="hidden" name="li_0_name" value="" />
					<input type="hidden" name="li_0_description" value="" />
					<input type="hidden" name="li_0_quantity" value="" />
					<input type="hidden" name="li_0_price" value="" />
					<input type="hidden" name="li_0_tangible" value="N" />
					<input type="hidden" name="li_0_duration" value="" />

					<input type="hidden" name="li_1_type" value="" />
					<input type="hidden" name="li_1_name" value="" />
					<input type="hidden" name="li_1_description" value="" />
					<input type="hidden" name="li_1_quantity" value="" />
					<input type="hidden" name="li_1_price" value="" />
					<input type="hidden" name="li_1_tangible" value="N" />

					<input type='hidden' name='card_holder_name' value='' />
					<input type='hidden' name='street_address' value='' />
					<input type='hidden' name='street_address2' value='' />
					<input type='hidden' name='city' value='' />
					<input type='hidden' name='state' value='' />
					<input type='hidden' name='zip' value='' />
					<input type='hidden' name='country' value='' />
					<input type='hidden' name='email' value='' />
					<input type='hidden' name='phone' value='' />
					<!-- <input name='submit' type='submit' value='' /> -->

				</form>

			</div>
			
		</section>
		<div id="content"></div>
	</main>

	<footer class="BuildFooter">
		<div class="LegalFooter">
			<div class="container">
				<div class="row">
					<div class="LegalFooterLinks col-sm-6 col-sm-push-6" id="LegalFooterLinks">
						<a href="/refunds.html" id="FooterLinkRefund">Refund Policy</a>
						<a href="/terms.html" id="FooterLinkTerms">Terms of Service</a>
						<a href="/privacy.html" id="FooterLinkPrivacy">Privacy Policy</a>
					</div>
					<div class="LegalFooterCopyright col-sm-6 col-sm-pull-6" id="LegalFooterCopyright">
						<span>&copy; Build 2001-2015. All rights reserved.</span>
					</div>
				</div>
			</div>
		</div>
	</footer>


	<!-- SCRIPTS -->

	<!-- Global - Include on All Pages -->
	<script type="text/javascript" src="/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/js/velocity.min.js"></script>
	<script type="text/javascript" src="/js/trip.js"></script>
	<script type="text/javascript" src="/js/jquery.reject.js"></script>
	<script type="text/javascript" src="/js/fancybox/jquery.fancybox.pack.js"></script>
	<script type="text/javascript" src="/js/noty/packaged/jquery.noty.packaged.js"></script>
	<script type="text/javascript" src="/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="/js/utilities.js"></script>
	<script type="text/javascript" src="/js/header.js"></script>
	<script type="text/javascript" src="/js/build-modal.js"></script>
 	<script type="text/javascript"> (function(e,t,n,r,i,s,o){e["GoogleAnalyticsObject"]=i;e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-49577301-1","auto");ga("send","pageview") </script>
	<script type="text/javascript">window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');$.src='//v2.zopim.com/?1qRBkAJuMOVh3bZY7NkJuyzmBt5AfmSr';z.t=+new Date;$.type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');</script>

	<script type="text/javascript">
		/*	========================================
			JQuery Reject
			======================================== */

		jQuery.reject({
			
			reject : {
				msie: 9
			},
			
			imagePath: '/images/',

			paragraph1: "Looks like you're using an older browser! This site works best " +
						'with the latest versions of the major browsers. Please update yours' + 
						', or take a look at some of the excellent options below.',

			paragraph2: 'Note: If you use your current browser to view this site, your experience will be degraded.'
			
		});
	</script>

 	<!-- Page-Specific - Include only on this page -->
	<script src="/js/pattern.js" type="text/javascript"></script>
	<script src="/js/induction-2-stripe.js"></script>
			
	<!-- Include on This Page Only -->		
	<script src="/js/crs.js" type="text/javascript"></script>

	<script src="https://checkout.stripe.com/checkout.js"></script>
	<!-- <script type="text/javascript" src="https://js.stripe.com/v2/"></script> -->

		<!-- Start of getbuild Zendesk Widget script -->
	<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","getbuild.zendesk.com");
	/*]]>*/</script>

</body>

</html>	