
<%
	myMsg = ""
	For Each Item In Request.Form
  	    fieldName = Item
    	fieldValue = Request.Form(Item)

    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf
    Next

on error resume next
Set myMail=CreateObject("CDO.Message")
myMail.Subject="2Checkout Order Data: " & request.form("order_number")
myMail.From="support@beta.build2trade.com"
myMail.To="craig@b2tsa.com"
myMail.TextBody="Order Confirmation:" & vbcrlf & myMsg 
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver")="localhost"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25

myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername")= "support@beta.build2trade.com"
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "3Ly9j9B14f9Hz9S6D"


myMail.Configuration.Fields.Update



myMail.Send
set myMail=nothing
%>
<!DOCTYPE html>
<html>

<head>

		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=9" />

		<meta property="og:title" value="Build - The Best Website Builder" />
		<meta property="og:description" value="Get your website up and running in a few clicks!" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />

		<!-- <meta property="og:image" value=""> -->

		<title>Build - Share and Earn</title>

		<link href="css/screen.css" rel="stylesheet" media="screen, projection">
		<link href="css/animate.css" rel="stylesheet" media="screen, projection">
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->

		<!-- <script src="js/functions.js" type="text/javascript"></script> -->

		<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>

	</head>

	<body>

    <div id="fb-root"></div>
    <script>
    
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '627851397270490',
          status     : true,
          xfbml      : true
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/all.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
       
    </script>

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

					<h1>Build 2 Trade</h1>

				</div>

				<div class="col-md-3">

					<div class="progress-container">

						<div class="progress-header">

							<span>And you're done!</span>

						</div>

						<div class="progress">

							<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">

								<span class="progress-percentage">100% <span class="sr-only">Complete</span></span>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	
		<div id="content">

			<div class="container">

				<div class="process">

					<h1 class="step-header">Share and Earn</h1>

					<div class="section col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">
					
						<div class="form sharing row">

							<div class="email col-sm-6 col-md-6 col-la-6">

								<form id="emailForm" action="doreferemail.asp" method="post">

									<div class="share-label share-email">Earn 2 free months per successful referral by simply recommending Build to your friends</div>
								
									<div class="friends">	
										<div>
											<input type="text" id="friendEmail1" name="friendEmail1" placeholder="Friend's email address" />
										</div>
										<div>
											<input type="text" id="friendEmail2" name="friendEmail2" placeholder="Friend's email address" />
										</div>
										<div>
											<input type="text" id="friendEmail3" name="friendEmail3" placeholder="Friend's email address" />
										</div>
										<div>
											<input type="text" id="friendEmail4" name="friendEmail4" placeholder="Friend's email address" />
										</div>
										<div>
											<input type="text" id="friendEmail5" name="friendEmail5" placeholder="Friend's email address" />
										</div>
										<div class="invite">
											<button id="emailFormSubmit" type="button" class="btn btn-default btn-lg invite">
												<span class="text">Invite Friends</span>
												<span class="spinner hidden"></span>
											</button>
										</div>
									</div>

								</form>

								<div class="messages">
									<p class="alert alert-success" style="display:none">Thank you for telling your friends about Build! When they sign up using the link sent to them, you will get <strong>2 free months</strong> per friend who signs up.</p>
									<p class="alert alert-danger" style="display:none">Looks like something went wrong and we couldn't send your e-mail invites. Please try again later.</p>
								</div>

							</div>

							<div class="socialmedia col-sm-6 col-md-6 col-la-6">

								<div class="share-label  share-social">Earn 2 free months per successful referral by simply recommending Build to your friends</div>

								<ul class="platforms">

									<a id="facebook-share-link" class="social-link facebook" onclick="shareFacebook()" href="#_">
										<span class="text"><em>Share</em> Build on Facebook. </span>
										<span class="tick glyphicon glyphicon-ok hidden"></span>
									</a>
									<!-- <a id="facebook-share-link" class="social-link facebook" href="#_" onclick="shareFacebook()" data-lang="en"><em>Share</em> Build on Facebook now and get a free month.</a> -->
									
									<a id="twitter-share-link" class="social-link twitter" href="https://twitter.com/intent/tweet?url=http://www.getbuild.com&text=I%20just%20got%20an%20awesome%20website%20with%20Build.%20Give%20it%20a%20try!">
										<span class="text"><em>Tweet</em> about Build.</span>
										<span class="tick glyphicon glyphicon-ok hidden"></span>
									</a>
									<!-- <a id="twitter-share-link" class="social-link twitter twitter-share-button" href="https://twitter.com/share?url=http://www.build2trade.com&text=Just%got%1%month%free%on%Build,%the%best%website%builder!%http://www.build2trade.com" onclick="" ><em>Tweet</em> about Build now and get a free month.</a> -->

								</ul>

							</div>

						</div>

					</div>

					<div class="section col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-la-6 col-la-offset-3">

						<form action="dostep4.asp" method="post"></form>

							<div class="form go row">
								<button type="button" class="btn btn-default btn-lg">Go to your new site.</button>
							</div>

						</form>

					</div>
				
				</div>

			</div>

		</div>

	
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
	<script type="text/javascript" src="js/jquery.noty.packaged.min.js"></script> 
	<script type="text/javascript" src="js/utilities.js"></script> 
	
	<!-- Include on This Page Only -->		
	<script src="js/step4.js" type="text/javascript"></script>

	<script type="text/javascript">

		var validator = $("#emailForm").validate({

			// debug: true,

			rules: {

				friendEmail1: {	email:true },
				friendEmail2: {	email:true },
				friendEmail3: {	email:true },
				friendEmail4: {	email:true },
				friendEmail5: {	email:true }

			},

			messages : {

				friendEmail1: "Invalid e-mail address.",
				friendEmail2: "Invalid e-mail address.",
				friendEmail3: "Invalid e-mail address.",
				friendEmail4: "Invalid e-mail address.",
				friendEmail5: "Invalid e-mail address."

			}


		});

		// Validate Contact Form
		var validateContactForm = $("#contactForm").validate({

			debug: true,

			rules: {

				inputEmail : {
					required: true,
					email: true
				},

				inputName : {
					required: true
				},

				inputMessage : {
					required: true
				},

			},

			messages : {

				inputEmail: "Please enter a valid e-mail address.",
				inputName: "Please enter your name.",
				inputMessage: "Please type a message."

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
				
			},

			submitHandler : function(form) {
				// console.log("submitHandler();");
				submitContactForm();
			}


		});

		

		/*
		window.twttr = (function (d,s,id) {
		  var t, js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
		  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
		  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
		}(document, "script", "twitter-wjs"));

		*/

	</script>

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