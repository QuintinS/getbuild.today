<% response.ContentType = "text/xml" 
On error resume next 

myMsg = ""
	For Each Item In Request.Form
  	    fieldName = Item
    	fieldValue = Request.Form(Item)

    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf
    Next


Set myMail=CreateObject("CDO.Message")
myMail.Subject="Contact from website"
myMail.From="support@beta.build2trade.com"
myMail.To="info@b2tsa.com"
myMail.TextBody="Website Contact from getbuild.today at:" & vbcrlf & myMsg & vbcrlf & vbcrlf & request.ServerVariables("HTTP_USER_AGENT") & vbcrlf & request.ServerVariables("REMOTE_ADDR") & vbcrlf & request.ServerVariables("REMOTE_HOST") & vbcrlf & request.ServerVariables("REMOTE_USER")
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver")="oxmail.registrar-servers.com"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25

myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername")= "craig@b2tsa.com"
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "123Cra!"


myMail.Configuration.Fields.Update



'myMail.Send
set myMail=nothing


 
response.write "<XML><data>"
response.write "<authentication>updated</authentication>"
if Err.Number <> 0 Then<
	response.write "<Error><![CDATA[" & Err.Description& &  "]]></Error>"
end if

response.write "</data></XML>"

%>