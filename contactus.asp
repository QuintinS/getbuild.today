<%

response.ContentType = "text/xml" 
On error resume next

function RecaptchaPassed()

	GRecaptchaResponse = Request.Form("GRecaptchaResponse")
	GRecaptchaSecret = "6LcbqykTAAAAAO2lE_2x5_uBHMAZcHPmVONnYD24"

	data = "secret=" & GRecaptchaSecret
	data = data & "&response=" & GRecaptchaResponse
	
	Set httpRequest = Server.CreateObject("MSXML2.ServerXMLHTTP")
	httpRequest.Open "POST", "https://www.google.com/recaptcha/api/siteverify", False
	httpRequest.SetRequestHeader "Content-Type", "application/x-www-form-urlencoded"
	httpRequest.Send data

	postResponse = httpRequest.ResponseText

	success = InStr(httpRequest.ResponseText, """success"": true")

	if success > 0 Then
		SendEmail()
	Else
		CaptchaError()
	End If

	'response.write	"<XML>"
	'response.write 		"<text>"
	'response.write 		postResponse
	'response.write 		"</text>"
	'response.write 		"<response>"
	'response.write 		responseText
	'response.write 		"</response>"
	'response.write 	"</XML>"

end function

function CaptchaError()

	response.write	"<XML>"
	response.write 		"<data>"
	response.write 			"<authentication>error</authentication>"
	response.write 			"<Error><![CDATA[Captcha not passed]]></Error>"
	response.write 		"</data>"
	response.write 	"</XML>"

end function


function SendEmail()

	myMsg = ""
	myMsg = myMsg & "<strong>From:</strong>" & "<br>" & Request.Form("buildContactName") & "<br>"
	myMsg = myMsg & "<strong>E-mail:</strong>" & "<br>" & Request.Form("buildContactEmail") & "<br>"
	myMsg = myMsg & "<hr>"
	myMsg = myMsg & "<strong>Subject:</strong>" & "<br>" & Request.Form("buildContactSubject") & "<br>"
	myMsg = myMsg & "<strong>Message:</strong>" & "<br>" & Request.Form("buildContactMessage") & "<br>"
	myMsg = myMsg & "<strong>Receive Newsletter:</strong>" & "<br>" & Request.Form("buildContactCheckbox") & "<br>"
		
	'	For Each Item In Request.Form
	'  	    fieldName = Item
	'    	fieldValue = Request.Form(Item)
	'    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf
	'    Next

	Set myMail=CreateObject("CDO.Message")

	myMail.Subject="Contact from website"
	myMail.From="website@getbuild.today"
	myMail.To="support@getbuild.today"
	myMail.HTMLBody="<h2>Website Contact from getbuild.today<h2><br><br>" & vbcrlf & myMsg & vbcrlf & vbcrlf & request.ServerVariables("HTTP_USER_AGENT") & vbcrlf & request.ServerVariables("REMOTE_ADDR") & vbcrlf & request.ServerVariables("REMOTE_HOST") & vbcrlf & request.ServerVariables("REMOTE_USER")
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/sendusing")= 2
	'Name or IP of remote SMTP server
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/smtpserver")="smtp.sendgrid.net"
	'Server port
	myMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = False
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/smtpserverport")= 587
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/sendusername")= "Xtreame96"
	myMail.Configuration.Fields.Item _
	("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "xsmurf96"
	myMail.Configuration.Fields.Update


	myMail.Configuration.Fields.Update
	myMail.Send
	set myMail=nothing
	 
	response.write	"<XML>"
	response.write 		"<data>"
	response.write 			"<authentication>updated</authentication>"
	if Err.Number <> 0 Then
	response.write 			"<Error><![CDATA[" & Err.Description &  "]]></Error>"
	end if
	response.write 		"</data>"
	response.write 	"</XML>"

end function

RecaptchaPassed()

%>
