<%

response.ContentType = "text/xml" 
On error resume next 

myMsg = ""
	For Each Item In Request.Form
  	    fieldName = Item
    	fieldValue = Request.Form(Item)

    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf
    Next


Set myMail=CreateObject("CDO.Message")
myMail.Subject="Contact from website"
myMail.From="website@getbuild.today"
myMail.To="support@getbuild.today"
myMail.TextBody="Website Contact from getbuild.today at:" & vbcrlf & myMsg & vbcrlf & vbcrlf & request.ServerVariables("HTTP_USER_AGENT") & vbcrlf & request.ServerVariables("REMOTE_ADDR") & vbcrlf & request.ServerVariables("REMOTE_HOST") & vbcrlf & request.ServerVariables("REMOTE_USER")
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


 
response.write "<XML><data>"
response.write "<authentication>updated</authentication>"
if Err.Number <> 0 Then
	response.write "<Error><![CDATA[" & Err.Description &  "]]></Error>"
end if

response.write "</data></XML>"

%>
