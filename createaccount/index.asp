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
								<a href="/getstarted/" aria-label="Select Template" title="Back to Select Template" class="btn btn-success">
									<span class="glyphicon glyphicon-ok"></span>
									<span>Select Template</span>
								</a>
								<span class="induction-progress-separator hidden-xs hidden-sm">
									<span class="glyphicon glyphicon-chevron-right"></span>
								</span>
								<a href="javascript:;" aria-label="Create Account" title="Back to Create Account" class="btn btn-primary active">
									<span class="glyphicon glyphicon-user"></span>
									<span>Create Account</span>
								</a>
								<span class="induction-progress-separator hidden-xs hidden-sm">
									<span class="glyphicon glyphicon-chevron-right"></span>
								</span>
								<a href="javascript:;" aria-label="Complete Order" title="Back to Complete Order" class="btn btn-primary" disabled>
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

				<div id="process-account" class="process step step-current col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">

					<form id="FormUserDetails" name="FormUserDetails" method="post" action="#">

						<div class="row">
							<div class="col-md-12">
								<h3 class="text-center">Please tell us some more about yourself!</h3>
							</div>
						</div>

						<div class="content-box">

							<h4>Your Account</h4>
							<p>Please give us some more information about yourself for billing and support purposes. We will never share the details you enter here with anyone.</p>

							<hr>

							<div class="row">

								<div class="col-md-2">
									<label class="sr-only" for="RegistrationTitle">Title</label>
									<select class="form-control" id="RegistrationTitle" name="RegistrationTitle" autocomplete="honorific-prefix">
										<option value="1" selected>Mr</option>
										<option value="2">Mrs</option>
										<option value="3">Miss</option>
										<option value="4">Ms</option>
										<option value="5">Dr</option>
										<!--
										<option value="6">Professor</option>
										<option value="7">The Rt Revd Dr</option>
										<option value="8">The Most Revd</option>
										<option value="9">The Rt Revd</option>
										<option value="10">The Revd Canon</option>
										<option value="11">The Revd</option>
										<option value="12">The Rt Revd Professor</option>
										<option value="13">The Ven</option>
										<option value="14">The Most Revd Dr</option>
										<option value="16">Rabbi</option>
										<option value="17">Canon</option>
										<option value="18">Dame</option>
										<option value="19">Chief</option>
										<option value="20">Sister</option>
										<option value="21">Reverend</option>
										<option value="22">Major</option>
										<option value="23">Other</option>
										<option value="24">Cllr</option>
										<option value="25">Sir</option>
										<option value="26">Rt Hon Lord</option>
										<option value="27">Rt Hon</option>
										<option value="28">The Lord </option>
										<option value="29">Viscount</option>
										<option value="30">Viscountess</option>
										<option value="31">Baroness</option>
										<option value="32">Captain</option>
										<option value="33">Master</option>
										<option value="34">Very Revd</option>
										<option value="35">Lady</option>
										<option value="38">MP</option>
										<option value="39">King of Kings and Lord of Lords</option>
										<option value="40">Conquering Lion of the Tribe of Judah</option>
										<option value="41">Elect of God and Light of this World</option>
										<option value="42">His Own Divine Majesty</option>
										<option value="43">First Ancient King of Creation</option>
										<option value="44">King Alpha</option>
										<option value="45">Queen Omega</option>
										<option value="46">Beginning with Our End and First with Our Last</option>
										<option value="47">Protector of All Human Faith</option>
										<option value="48">Ruler of the Universe</option>
										<option value="49">Dude</option>
										<option value="50">Mx (gender-netural)</option>
										<option value="51">His Holiness</option>
										<option value="52">Her Holiness</option>
										<option value="53">Lackey</option>
										<option value="54">Mother of Dragons</option>
										<option value="55">First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm</option>
										-->
									</select>
								</div>

								<div class="col-md-5">

									<div class="form-group">
										<label class="sr-only" for="RegistrationFirstName">First Name</label>
										<input class="form-control" type="text" id="RegistrationFirstName" name="RegistrationFirstName" placeholder="First Name *" autocomplete="given-name"/>
									</div>

								</div>

								<div class="col-md-5">

									<div class="form-group">
										<label class="sr-only" for="RegistrationLastName">Last Name</label>
										<input class="form-control" type="text" id="RegistrationLastName" name="RegistrationLastName" placeholder="Last Name *" autocomplete="family-name"/>
									</div>

								</div>

							</div>

							<hr>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationPhoneNumber">Phone Number</label>
										<input class="form-control" type="text" id="RegistrationPhoneNumber" name="RegistrationPhoneNumber" placeholder="Phone Number *" autocomplete="tel"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationEmailAddress">E-Mail Address</label>
										<input class="form-control" type="text" id="RegistrationEmailAddress" name="RegistrationEmailAddress" placeholder="E-Mail Address *" autocomplete="email"/>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationCompanyName">Company Name</label>
										<input class="form-control" type="text" id="RegistrationCompanyName" name="RegistrationCompanyName" placeholder="Company Name" autocomplete="org"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationBirthDate">Date of Birth</label>
										<input class="form-control" type="text" id="RegistrationBirthDate" name="RegistrationBirthDate" placeholder="Date of Birth *" autocomplete="birthday"/>
									</div>
								</div>
							</div>

							<hr>

							<div class="row">

								<div class="col-md-6">
									<div class="form-group">								
										<label class="sr-only" for="RegistrationAddressLine1">Address Line 1</label>
										<input class="form-control" type="text" id="RegistrationAddressLine1" name="RegistrationAddressLine1" placeholder="Address Line 1 *" autocomplete="address-line1"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationCity">City</label>
										<input class="form-control" type="text" id="RegistrationCity" name="RegistrationCity" placeholder="City *" autocomplete="address-level2"/>
									</div>
								</div>

							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">								
										<label class="sr-only" for="RegistrationAddressLine2">Address Line 2</label>
										<input class="form-control" type="text" id="RegistrationAddressLine2" name="RegistrationAddressLine2" placeholder="Address Line 2" autocomplete="address-line2"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationPostalCode">Postal Code</label>
										<input class="form-control" type="text" id="RegistrationPostalCode" name="RegistrationPostalCode" placeholder="Postal Code *" autocomplete="postal-code"/>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="sr-only" for="RegistrationCountry">Country</label>
										<select class="form-control crs-country" name="RegistrationCountry" id="RegistrationCountry" data-region-id="RegistrationRegion" autocomplete="country-name">
											<option value="">- Select a Country -</option>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group" style="display:none">
										<label class="sr-only" for="RegistrationRegion">Region</label>
										<select class="form-control" name="RegistrationRegion" id="RegistrationRegion" autocomplete="address-level1">
											<option value="">- Select a Region -</option>
										</select>
									</div>
								</div>
							</div>

							<div class="row" id="email-exists-message" style="display:none">
								
								<div class="col-md-12">
									
									<hr>

									<div class="bs-callout bs-callout-warning">
										
										<h4 class="bs-callout-heading">An account with the e-mail address <u><span data-content="EmailAddress"></span></u> already exists.</h4>
										
										<p><strong>Are you the owner of this account, and want to buy another website?</strong></p>
										<p>To reserve a new website, please log in and you will be taken to website signup.</p>

										<div class="signin-form panel panel-default">

											<div class="panel-body">
												
												<div class="row">
												
													<div class="col-md-6">
														<div class="form-group">
															<label class="sr-only" for="WebsiteSignupLoginPassword">E-Mail Address</label>
															<input class="form-control" type="password" id="WebsiteSignupLoginPassword" name="WebsiteSignupLoginPassword" placeholder="Password" tabindex="10"/>
														</div>
													</div>

													<div class="col-md-6">
														<button type="button" data-action="WebsiteSignupSubmit" class="btn btn-primary">Log In</button>
													</div>

												</div>

											</div>

										</div>

									</div>
								</div>
							</div>

							<div class="row step-actions">
								<div class="col-md-6">

								</div>	
								<div class="col-md-6">
									<div class="form-group">
										<button id="step-billing-submit" type="submit" class="btn btn-primary float-right" disabled>
											<span class="button-label">Continue to Domain</span>
											<span class="button-icon glyphicon glyphicon-globe"></span>
										</button>
									</div>
								</div>	
							</div>

						</div>

					</form>

				</div>

				<div id="process-domain" class="process step col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">

					<form id="FormSubdomain" name="FormSubdomain" method="post" action="#">

						<div class="row">
							<div class="col-md-12">
								<h3 class="text-center">Every website needs a home!</h3>
							</div>
						</div>

						<div class="content-box">

							<h4>Your Domain</h4>
							<p>Please enter what you would prefer your working web address to be. This is the address you will use to edit your site.</p>
							<div class="row subdomain margin-bottom-20">

								<div class="col-md-12">

									<div class="form-group">
										<div class="input-group">
											<label class="input-group-addon hidden-xs" for="RegistrationSubdomain" aria-label="Subdomain">
												http://
											</label>
											<div class="form-group subdomain-input-container">
												<input class="form-control" type="text" id="RegistrationSubdomain" name="RegistrationSubdomain" placeholder="Subdomain" />
											</div>
											<label class="input-group-addon" for="RegistrationSubdomain" aria-label="Subdomain">
												.usebuild.co
											</label>
										</div>
									</div>

								</div>

							</div>

							<div class="row" id="domain-exists-message" style="display:none">
								<div class="col-md-12">
									<div class="bs-callout bs-callout-danger">
										<p>Sorry, the domain <strong><span data-content="Subdomain"></span>.usebuild.co</strong> is already taken.</p>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12">
									<div class="bs-callout bs-callout-info">
										<p>You will be able to load your own domain after the site has been set up to use a custom address.</p>
									</div>
								</div>
							</div>

							<div class="row step-actions">
								<div class="col-md-6 col-xs-12">
									<button type="button" data-action="PrevStep" class="btn btn-default float-left">
										<span class="button-icon glyphicon glyphicon-chevron-left"></span>
										<span class="button-label">Back to Your Account</span>
									</button>
								</div>
								<div class="col-md-6 col-xs-12">
									<button id="step-subdomain-submit" type="submit" data-action="" class="btn btn-primary float-right" disabled>
										<span class="button-label">Continue to Plans</span>
										<span class="button-icon glyphicon glyphicon-tag"></span>
									</button>
								</div>
							</div>

						</div>

					</form>

				</div>

				<div class="process step col-md-10 col-sm-10 col-lg-8 col-sm-offset-1 col-md-offset-1 col-lg-offset-2">

					<div class="row">
						<div class="col-md-12">
							<h3 class="text-center">Please Select a Plan</h3>
						</div>
					</div>

					<h4>Please select the plan that is best for you.</h4>

					<div class="pricingplan-container" id="pricingplan-container">
						

					</div>

					<div class="row margin-top-50">

						<div class="col-md-6">
							<button type="button" data-action="PrevStep" class="btn btn-default float-left">
								<span class="button-icon glyphicon glyphicon-chevron-left"></span>
								<span class="button-label">Back to Domains</span>
							</button>
						</div>
						<div class="col-md-6">
							<button id="pricingplan-continue-button" class="btn btn-primary float-right" data-action="PricingPlansContinue" disabled>
								<span class="button-label">Continue to Payment</span>
								<span class="button-icon glyphicon glyphicon-credit-card"></span>
							</button>
						</div>

					</div>


				</div>

				<div id="process-payment" class="process step col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">

					<div class="row">
						<div class="col-md-12">
							<h3 class="text-center">Almost there! You'll soon have a shiny new website.</h3>
						</div>
					</div>

					<div class="content-box">

						<h4>Confirm and Pay</h4>
						<p>Please review the details of your purchase below. If you have a coupon code for a discount, you can apply it now.</p>

						<p></p>

						<table id="PaymentStatementTable" class="b-table-bordered">

							<thead>
								
							</thead>

							<tbody>
								
							</tbody>

							<tfoot>
								
							</tfoot>
							
						</table>

						<!--

						<div class="row">
							<div class="col-md-12 text-center">
								<button data-action="AddCoupon" class="btn btn-primary btn-hollow">
									<span class="button-icon glyphicon glyphicon-barcode"></span>
									<span class="button-label">Have a coupon?</span>
								</button>
							</div>	
						</div>



						<div id="coupon-panel" style="display:none">

							<div class="panel">
								<div class="panel-body">
									
									<h5 class="text-center">Please enter a coupon code.</h5>

									<p class="text-center">If you have a coupon that you would like to redeem for a discount, please enter the code below.</p>

									<form id="FormCoupon" method="post" action="#">
										<div class="form-group">
											<div class="input-group">
												<label class="input-group-addon hidden-xs" for="CouponCode" aria-label="Coupon Code">
													Coupon Code
												</label>
												<div class="form-group">
													<input class="form-control" type="text" id="CouponCode" name="CouponCode" placeholder="Enter your Coupon Code" tabindex="11" />
												</div>
												<span class="input-group-btn">
													<button id="CouponSubmitButton" class="btn btn-success" type="submit" data-loading-text="Loading...">Apply Coupon</button>
												</span>
											</div>
										</div>	
									</form>	

								</div>	
							</div>
							
						</div>

						-->

						<hr>

						<div class="row">
							<div class="col-md-12 text-center">
								<div class="b-checkbox b-checkbox-checkbox">
									<div class="b-checkbox-group">
										<input name="RegistrationAgreeTerms" id="RegistrationAgreeTerms" value="true" type="checkbox">
										<label for="RegistrationAgreeTerms"><span class="b-checkbox-label">I agree to Build's <a href="/terms.html" target="_blank">terms and conditions</a></span></label>
									</div>
									<label for="RegistrationAgreeTerms" class="b-checkbox-label"><span>I agree to Build's <a href="/terms.html" target="_blank">terms and conditions</a></span></label>
								</div>
							</div>	
						</div>

						<div class="row step-actions">

							<div class="col-md-6">
								<button type="button" data-action="PrevStep" class="btn btn-default float-left">
									<span class="button-icon glyphicon glyphicon-chevron-left"></span>
									<span class="button-label">Back to Plans</span>
								</button>
							</div>
							<div class="col-md-6">
								<button id="confirmpay-button-submit" type="button" data-action="ProcessPayment" class="btn btn-success float-right" disabled>
									<span class="button-label">Confirm and Pay</span>
									<span class="button-icon glyphicon glyphicon-credit-card"></span>
								</button>
							</div>

						</div>

					</div>

				</div>


			</div>
			
		</section>
		<!-- <div id="content"></div> -->
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
	<script type="text/javascript" src="/js/libs.js"></script>
	<script type="text/javascript" src="/js/framework.js"></script>

 	<!-- Page-Specific - Include only on this page -->
	<script src="/js/induction-2.js"></script>
			
	<!-- Include on This Page Only -->		
	<script src="https://checkout.stripe.com/checkout.js"></script>

</body>

</html>	