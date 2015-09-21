<!DOCTYPE html>

<html>

	<head>

		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />

		<title>Build - Registration</title>

		<link href="css/screen.css" rel="stylesheet" media="screen, projection">
		<link href="css/animate.css" rel="stylesheet" media="screen, projection">
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
		<link href="css/jquery.reject.css" rel="stylesheet" media="screen, projection">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->

	</head>
	
<body>
	<div id="header">
		<div class="black-bar"></div>
		<div class="navigation-bar">
			<div class="container">
				<ul class="nav list-inline right">
					<li><a href="step_1.html">Templates</a></li>
					<li><a href="http://build.myomnistar.com/users/main.php.html">Affiliates</a></li>
					<li><a href="support.html">Support</a></li>
					<li><a href="#_" onclick="$('#contactModal').modal('show')">Contact Us</a></li>	
				</ul>
			</div>
		</div>
		<div class="container">
			<div class="expander">
				<a href="#">+</a>
			</div>
			<div class="logo col-md-9">
				<h1>Build - Registration</h1>
			</div>
			<div class="col-md-3">
				<div class="progress-container">
					<div class="progress-header">
						<span>Making progress...</span>
					</div>
					<div class="progress">
						<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
							<span class="progress-percentage">50% <span class="sr-only">Complete</span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="content">

		<div class="container">

			<h1 class="step-header">Registration</h1>
			
			<div class="process col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">

				<form id="RegistrationForm" name="RegistrationForm" method="post" action="#">

					<div class="section">

						<h4>Please create your account</h4>

						<p class="text-center">Please fill out the form to create your account.</p>

						<hr>

						<div class="row">

							<div class="col-md-6">

								<div class="form-group">
									<label class="sr-only" for="RegistrationFirstName">First Name</label>
									<input class="form-control" type="text" id="RegistrationFirstName" name="RegistrationFirstName" placeholder="First Name" tabindex="1" />
								</div>

							</div>

							<div class="col-md-6">

								<div class="form-group">
									<label class="sr-only" for="RegistrationLastName">Last Name</label>
									<input class="form-control" type="text" id="RegistrationLastName" name="RegistrationLastName" placeholder="Last Name" tabindex="2" />
								</div>

							</div>

						</div>

						<hr>

						<div class="row">

							<div class="col-md-6">
								<div class="form-group">								
									<label class="sr-only" for="RegistrationAddressLine1">Address Line 1</label>
									<input class="form-control" type="text" id="RegistrationAddressLine1" nam e="RegistrationAddressLine1" placeholder="Address Line 1" tabindex="3" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="sr-only" for="RegistrationCity">City</label>
									<input class="form-control" type="text" id="RegistrationCity" name="RegistrationCity" placeholder="City" tabindex="5" />
								</div>
							</div>

						</div>

						<div class="row">
							<div class="col-md-6">
								<div class="form-group">								
									<label class="sr-only" for="RegistrationAddressLine2">Address Line 2</label>
									<input class="form-control" type="text" id="RegistrationAddressLine2" name="RegistrationAddressLine2" placeholder="Address Line 2" tabindex="4" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="sr-only" for="RegistrationPostalCode">Postal Code</label>
									<input class="form-control" type="text" id="RegistrationPostalCode" name="RegistrationPostalCode" placeholder="Postal Code" tabindex="6" />
								</div>
							</div>
						</div>

						<hr>

						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="sr-only" for="RegistrationCountry">Country</label>
									<select class="form-control crs-country" name="RegistrationCountry" id="RegistrationCountry" data-region-id="RegistrationRegion" tabindex="7">
										<option value="">- Select a Country -</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="sr-only" for="RegistrationRegion">Region</label>
									<select class="form-control" name="RegistrationRegion" id="RegistrationRegion" tabindex="8">
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
									<input class="form-control" type="text" id="RegistrationPhoneNumber" name="RegistrationPhoneNumber" placeholder="Phone Number" tabindex="9" />
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="sr-only" for="emailaddress">E-Mail Address</label>
									<input class="form-control" type="text" id="emailaddress" name="emailaddress" placeholder="E-Mail Address" tabindex="10" />
								</div>
							</div>
						</div>

					</div> <!-- section -->

					<div class="section">

						<h4>What would you like your domain to be?</h4>

						<div class="row subdomain">

							<div class="col-md-5 col-sm-6 col-la-4 col-md-offset-1 col-la-offset-2">

								<div class="form-group">
									<label class="sr-only" for="RegistrationSubdomain">Subdomain</label>
									<input class="form-control" type="text" id="RegistrationSubdomain" name="RegistrationSubdomain" placeholder="Subdomain" tabindex="11" />
								</div>

							</div>

							<div class="col-md-6 col-sm-6 col-la-6">
								<p class="SubdomainLabel">
									.usebuild.co
								</p>
							</div>

						</div>

					
						<!--
						<ul class="selections row">

							
								<li id="selection-new-domain" class="col-sm-12 col-md-12 col-la-12">

									<label for="domain-type-1">

										<input id="domain-type-1" class="" type="radio" name="domain-type" value="new-domain" />
										<span class="title">I would like to register a domain name</span>
										<small>If you choose this option we'll do this in the next step.</small>

									</label>

								</li>

							<li id="selection-existing-domain" class="col-sm-12 col-md-12 col-la-12">
								
								<label for="domain-type-2">

									<input id="domain-type-2" type="radio" name="domain-type" value="existing-domain" />
									<span class="title">I already have a domain name</span>
									<small>We'll help you point this after registration.</small>

								</label>

							</li>

							<li id="selection-free-subdomain" class="col-sm-12 col-md-12 col-la-12">

								<label for="domain-type-3">

									<input id="domain-type-3" type="radio" name="domain-type" value="free-subdomain" />
									<span class="title">I would like to use the free subdomain</span>
									<small>eg: mysite.usebuild.co</small>

								</label>

								<div id="inner-form-free-subdomain" class="inner-form row" style="display:none">
									<div class="col-md-6 col-sm-6 col-la-6">
										<div class="form-group">
											<input class="username " type="text" id="RegistrationSubdomain" name="RegistrationSubdomain" placeholder="Your Subdomain (e.g. mysite)" />
										</div>
									</div>
									<div class="col-md-6 col-sm-6 col-la-6">
										<label for="subdomain">.usebuild.co</label>
									</div>
								</div>

							</li>

						</ul>
						-->

						<div id="proceed-actions" class="proceed-actions">

							<div id="proceed-type-domain" class="row">

								<div class="col-sm-12 col-md-12 col-la-12 text-center margin-top-10">

									<button type="submit" id="submitButton1" name="submitButton1" value="submitButton1" class="btn btn-default btn-lg">
										Check Out
									</button>
									
								</div>

							</div>

						</div>

					</div> <!-- Section -->

				</form>

			</div>

		</div>

	</div>

	<form action='https://www.2checkout.com/checkout/purchase' method='post' id="CheckoutHiddenForm" class="hidden">

		<!--
		<input type='hidden' name='sid' value='2140176' />
		<input type='hidden' name='mode' value='2CO' />

		<input type='hidden' name='li_0_type' value='product' />
		<input type='hidden' name='li_0_name' value='invoice123' />
		<input type='hidden' name='li_0_price' value='25.99' />
		<input type='hidden' name='li_0_tangible' value='Y' />
		<input type='hidden' name='li_1_type' value='shipping' />
		<input type='hidden' name='li_1_name' value='Express Shipping' />
		<input type='hidden' name='li_1_price' value='13.99' />

		<input type='hidden' name='card_holder_name' value='Checkout Shopper' />

		<input type='hidden' name='street_address' value='123 Test Address' />
		<input type='hidden' name='street_address2' value='Suite 200' />
		<input type='hidden' name='city' value='Columbus' />
		<input type='hidden' name='state' value='OH' />
		<input type='hidden' name='zip' value='43228' />
		<input type='hidden' name='country' value='USA' />

		<input type='hidden' name='ship_name' value='Checkout Shopper' />
		<input type='hidden' name='ship_street_address' value='123 Test Address' />
		<input type='hidden' name='ship_street_address2' value='Suite 200' />
		<input type='hidden' name='ship_city' value='Columbus' />
		<input type='hidden' name='ship_state' value='OH' />
		<input type='hidden' name='ship_zip' value='43228' />
		<input type='hidden' name='ship_country' value='USA' />

		<input type='hidden' name='email' value='example@2co.com' />
		<input type='hidden' name='phone' value='614-921-2450' />

		<input name='submit' type='submit' value='Checkout' />
		-->

	</form>
	
<!-- 	<div id="footer"></div> -->

	<!-- Contact Modal -->
	<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-body">
			<h2>Contact Us</h2>
			<p>If you want to ask us a question or be in touch with us about something, please complete the form below.</p>
			<form id="contactForm" role="form" method="post" action="">
			  <div class="form-group">
				<label for="inputEmail">Email address</label>
				<input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Enter email">
			  </div>
			  <div class="form-group">
				<label for="inputName">Full Name</label>
				<input type="text" class="form-control" id="inputName" name="inputName" placeholder="Enter your full name">
			  </div>
			  <div class="form-group">
				<label for="inputMessage">Message</label>
				<textarea class="form-control" rows="3" name="inputMessage" id="inputMessage"></textarea>
			  </div>
			  <div class="checkbox">
				<label for="inputCheckbox">
				  <input type="checkbox" checked="checked" id="inputCheckbox" value="Subscribe" name="inputCheckbox"> Please keep me up to date about Build.
				</label>
			  </div>
			  <button type="submit" class="btn btn-primary">Send</button>
			</form>
			<div class="loading-overlay" style="display:none">
				<div class="throbber"></div>
				<div class="thankyou text-center" style="display:none;">
					<p class="text-center">Thank you for your interest!</p>
					<p class="text-center">We will be in touch with you soon.</p>
					<button type="button" onclick="$('#contactModal').modal('hide')" class="btn btn-primary">Close</button>
				</div>
			</div>
		  </div>
	    </div>
	  </div>
	</div>



	<!-- Include on All Pages -->
	<script src="https://code.jquery.com/jquery.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/custom.js" type="text/javascript"></script>
	<script src="js/allsteps.js" type="text/javascript"></script>
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
	<script src="js/jquery.reject.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/jquery.noty.packaged.min.js"></script> 
	<script type="text/javascript" src="js/utilities.js"></script> 
	
	<!-- Include on This Page Only -->		
	<script src="js/step2.js" type="text/javascript"></script>
	<script src="js/crs.js" type="text/javascript"></script>
	<script src="js/pattern.js" type="text/javascript"></script>

<!-- Google Analytics  --> 
 <script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)    [0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-49577301-1', 'auto');
 ga('send', 'pageview');
 </script>

</body>

</html>	