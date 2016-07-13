<%
	myMsg = ""
	For Each Item In Request.Form
  	    fieldName = Item
    	fieldValue = Request.Form(Item)

    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf
    Next

on error resume next
Set myMail=CreateObject("CDO.Message")
myMail.Subject="2Checkout Order Data v2"
myMail.From="support@beta.build2trade.com"
myMail.To="craig@b2tsa.com"
myMail.TextBody="Order Confirmation data 2:" & vbcrlf & myMsg 
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



'myMail.Send
set myMail=nothing

' response.write "B2T Status: Data recieved and email sent to verify integrity of order."
	' 
	'session("TemplateID")
	'session("registerName") 
	'session("registerEmail") 
	'session("registerPassword")
	'session("registerSub") 
	'session("domain-type") : existing-domain / free-subdomain / new-domain
	
	server.Transfer("step4.html")
%>