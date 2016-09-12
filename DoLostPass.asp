<!--#include file="./Connections/MyConn.asp" -->
<% response.ContentType = "text/xml" 

Dim MyRS
Dim MyRS_numRows

Set DC = server.CreateObject("adodb.connection")
dc.open MM_MyConn_STRING
Set MyRS = Server.CreateObject("ADODB.Recordset")
MyRS.ActiveConnection = DC
MySQL = "SELECT * FROM userlogins where emailAddress = '" & replace(request.form("forgotEmail"),"'","''") & "'"
MyRS.CursorType = 0
MyRS.CursorLocation = 2
MyRS.LockType = 1
MyRS.Open MySQL,DC
mysub = 0



if not myrs.eof then
		myMsg = myMsg & "Dear User," & vbcrlf & vbcrlf
		myMsg = myMsg & "You recieved this email because you have requested we send your password to your registered email." & vbcrlf
		myMsg = myMsg & "Your username: " & request.form("forgotEmail") & vbcrlf
		myMsg = myMsg & "Your password: " & MyRS("userpassword") & vbcrlf & vbcrlf
		myMsg = myMsg & "Team Build" 
		
		on error resume next
		Set myMail=CreateObject("CDO.Message")
		myMail.Subject="Lost Password Request: " & Now()
		myMail.From="support@getbuild.today"
		myMail.To= request.form("forgotEmail")
		myMail.TextBody= myMsg 
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/sendusing")= 2
		'Name or IP of remote SMTP server
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/smtpserver")="smtp.sendgrid.net"
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = False
		'Server port
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/smtpserverport")= 587
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/sendusername")= "Xtreame96"
		myMail.Configuration.Fields.Item _
		("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "xsmurf96"
		
		
		myMail.Configuration.Fields.Update
		
		myMail.Send
		set myMail=nothing
		mysub = 1

end if

%>
<XML><data><status>done</status><sub><%= mysub %></sub><EmailWas><%= request.form("forgotEmail") %></EmailWas></data></XML>