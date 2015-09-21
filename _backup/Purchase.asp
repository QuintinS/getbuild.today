<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>B2T Checkout Process</title>

		<link href="css/bootstrap.css" rel="stylesheet" media="screen, projection">
		<link href="css/screen.css" rel="stylesheet" media="screen, projection">
		<link href="css/generic.css" rel="stylesheet" media="screen, projection">
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
	</head>

<body>
<div class="generic-header home-header">
	<div class="container">
		<div class="row">
			<nav class="navbar navbar-default build-navbar" role="navigation">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a href="http://www.getbuild.today"><img src="images/logo.png" alt="Jump to home page" /></a>
			    </div>
			
			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">		      
			      <ul class="nav navbar-nav navbar-right">
			        <li><a href="step_1.html">Templates</a></li>
					<li><a href="support.html">Support</a></li>
					<li><a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-contactus.html'})">Contact Us</a></li>	
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
		</div>
	</div><!--/header-->
</div>

<div class="generic-content-white">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<h2>Hi, we love your enthusiasm!</h2> 
				<p>We're not quite ready to let you have our awesome sauce just yet though.</p>
				<p>Fear not, our global launch is really soon and we're just as excited as you are to get building (as soon as we're finished giving away awesome prizes).</p>
				<p>In the mean time, how about we give you a chance to win something as well as a <strong>voucher code for an extra 6 months free</strong>.</p>
				<ol>
					<li>Competition Page: <a href="https://www.facebook.com/getbuild">www.facebook.com/getbuild</a></li>
					<li>Link including voucher: <a href="http://www.getbuild.today/?voucher=VIPEARLYBIRD"/>www.getbuild.today/?voucher=VIPEARLYBIRD</a></li>
				</ol>
				<p>Regards<br>
				Team Build.</p>
				<p>PS: if you want us to let you know as soon as we launch, <a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-contactus.html'})">drop us a line.</a></p>
			</div>
			<div class="col-md-4">
				<div class="dark-form">
					<p><strong>Do you want to know as soon as we go live?</strong></p>
					<form id="build-contact-form-purchase" method="post" action="contactus.asp">
						<div class="form-group">
							<label for="buildContactEmail2">Your Email address</label>
							<input type="email" class="form-control" id="buildContactEmail2" name="buildContactEmail2" placeholder="Enter your email address here">
						</div>
						<div class="form-group">
							<label for="buildContactName2">Your Name</label>
							<input type="text" class="form-control" id="buildContactName2" name="buildContactName2" placeholder="Enter your name here">
						</div>
						<div class="form-group">
							<button type="submit" class="btn btn-lg btn-primary">Let me know</button>
						</div>
						
						<input type="hidden" value="launch reminder">
					</form>
				</div>
				<div id="ContactFormFeedbackMessage" class="ContactFeedbackMessage">
						
					<span class="state-2" style="display:none;">
						<div class="alert alert-success">
							<p class="text-align-center">Your message was sent successfully. Thanks for your interest!</p>
						</div>
					</span>
					<span class="state-3" style="display:none;">
						<div class="alert alert-warning">
							<p class="text-align-center">Oops. Something went... a bit pear-shaped. Sorry! Please try again later.</p>
						</div>
					</span>
					
				</div>
			</div>
		</div>
	</div><!--/content-white-->
</div>
<div class="generic-footer">
	<div class="container">
		<div class="row footer-top">
			<div class="col-md-6 col-sm-6 col-xs-6">
				<img src="images/logo-sm.png" alt="Build." class="logo-sm" />
			</div>
			<div class="col-md-6 col-sm-6  col-xs-6 text-right">
				<a href="step_1.html" type="button" class="btn btn-default build-site" style="width:180px;" >Build a Site Now</a>
			</div>
		</div>
		<div class="row footer-content">
			<div class="col-lg-5 col-md-6 col-sm-12">
				<p>Get your business online and trading fast. With Build. you can get a world class, fully functional professional business website up in record time and with almost no effort. We offer a fast and powerful website building tool that allows pretty much anyone to publish a professional web presence in record time.</p>
			</div>
			<div class="col-lg-offset-1 col-md-3 col-sm-4">
				<p>Quick Links</p>
				<ul class="list-unstyled">
					<li><a href="http://www.getbuild.today">Home</a></li>
					<li><a href="support.html">Support</a></li>
					<li><a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-contactus.html'})">Contact Us</a></li>
					
					<li><a href="https://plus.google.com/110585070515868031697" rel="publisher">Google+</a></li>
					<li><a href="https://twitter.com/getbuild" rel="publisher">Twitter</a></li>
					<li><a href="https://www.facebook.com/getbuild" rel="publisher">Facebook</a></li>
				</ul>
			</div>
			<div class="col-md-3 col-sm-4">
				<p>Legal</p>
				<ul class="list-unstyled">
					<li><a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-termsconditions.html'})">Terms of Use</a></li>
					<li><a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-privacypolicy.html'})">Privacy Policy</a></li>
					<li><a href="#_" onclick="$('#buildModal').buildModal({action: 'show', contentURL: '/includes/buildmodal-include-refundpolicy.html'})">Refund Policy</a></li>
				</ul>
			</div>
		</div>
		<div class="row footer-bottom">
			<div class="col-md-12">
				<p>Copyright Build2Trade &copy; 2001-2014 All rights reserved.</p>
			</div>
		</div>
	</div>
</div>

<div class="build-modals">
	<div id="build-menu-modal-container">
		<!-- Modal content gets imported here. -->
	</div>
</div>

<script src="https://code.jquery.com/jquery.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/custom.js" type="text/javascript"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/build-modal.js"></script>

<!-- Google Analytics  -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49577301-1', 'build2trade.com');
  ga('send', 'pageview');

</script>

<script>

/*	=====================================
	Contact Form
	===================================== */
	
function sendContactFormEmail() {

	console.log("sendContactFormEmail()");

	myEmail 				= $("#buildContactEmail2").val();
	myName 					= $("#buildContactName2").val();
	
	console.log("myEmail 	== " + myEmail);
	console.log("myName 	== " + myName);

	$.ajax({
	    type: "POST",
	    url: "/contactus.asp",
	    data: { 

	    	buildContactEmail : myEmail,
	    	buildContactName : myName,
	    	
	    }
	})
	.success(function(response){
	
		
		console.log(response);
		
		myAuth = $(response).find("authentication").text();
		
		if (myAuth == "updated") {
		
			$("#ContactFormFeedbackMessage > .state-2").fadeIn().delay(5000).fadeOut();
			console.log("sendContactEmail Success")
		
		}
		
		else
		
		{
		
			$("#ContactFormFeedbackMessage > .state-3").fadeIn().delay(5000).fadeOut();
			console.log("E-Mail Send Failed");
		
		}
		
	})
	.fail(function() {
		
		console.log("Call to 'contactus.asp' has failed.");
		$("#ContactFormFeedbackMessage > .state-3").fadeIn().delay(5000).fadeOut();
	})

}

var validateContactForm2 = $("#build-contact-form-purchase").validate({

	rules: {
	
		buildContactEmail2 : {
			required: true,
			email:true
		},

		buildContactName2 : {
			required: true
		},

	},


	messages : {

		buildContactEmail2: "Please enter a valid e-mail address.",
		buildContactName2: "Please enter your name.",

	},

	submitHandler : function(form) {
		console.log("Submitted");
		sendContactFormEmail();
	},
	
	showErrors: function(errorMap, errorList) {

		$.each(this.successList, function(index, value) {
			return $(value).popover("hide");
		});
	
		return $.each(errorList, function(index, value) {
		
			var _popover;
			console.log(value.message);
			
			_popover = $(value.element).popover({
				trigger: "manual",
				placement: "bottom",
				content: value.message,
				template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
			});
			
			_popover.data("bs.popover").options.content = value.message;
			return $(value.element).popover("show");
			
		});

		
	}


});


</script>

</body>
</html>

<%

	'session("TemplateID")
	'session("registerName") 
	'session("registerEmail") 
	'session("registerPassword")
	'session("registerSub") 
	'session("domain-type") : existing-domain / free-subdomain / new-domain
	'session("alternateDomain")

%>
