<% response.ContentType = "text/xml" %>
<!--#include file="../Connections/MyConn.asp" -->
<%

TheHostHeader = request.ServerVariables("HTTP_HOST")
if Session("FailCount") ="" then
	Session("FailCount") = 0
end if

Dim MyRS
Dim MyRS_numRows

Set DC = server.CreateObject("adodb.connection")
dc.open MM_MyConn_STRING
Set MyRS = Server.CreateObject("ADODB.Recordset")
MyRS.ActiveConnection = DC
MySQL = "SELECT * FROM userlogins where emailAddress = '" & replace(request.form("buildLoginEmail"),"'","''") & "' and userpassword='" & replace(request.form("buildLoginPassword"),"'","''") & "'" 
MyRS.CursorType = 0
MyRS.CursorLocation = 2
MyRS.LockType = 1
MyRS.Open MySQL,DC


if not MyRS.eof and Session("FailCount") < 3 then
	session("B2TUID") = replace(MyRS("UserAccountID"),"{","")
	Set DC3 = server.CreateObject("adodb.connection")
	dc3.open MM_MyConn_STRING
	Set MyRS3 = Server.CreateObject("ADODB.Recordset")
	MyRS3.ActiveConnection = DC3
	MySQL3 = "SELECT * FROM useraccounts where UserID= '" & session("B2TUID") & "';" 
	MyRS3.CursorType = 0
	MyRS3.CursorLocation = 2
	MyRS3.LockType = 1
	MyRS3.Open MySQL3,DC3
	
	if not MyRS3.eof then
		session("VOAccountID") = replace(MyRS3("VOAccountID"),"{","")
		session("VOAccountID") = replace(Session("VOAccountID"),"}","")
		
		Set DC4 = server.CreateObject("adodb.connection")
		dc4.open MM_MyConn_STRING
		Set MyRS4 = Server.CreateObject("ADODB.Recordset")
		MyRS4.ActiveConnection = DC4
		MySQL4 = "SELECT * FROM UserDomains where VOAccountID= '" & session("VOAccountID") & "'"
		'response.write Mysql
		MyRS4.CursorType = 0
		MyRS4.CursorLocation = 2
		MyRS4.LockType = 1
		MyRS4.Open MySQL4, DC4
		'response.write Mysql
		
		if not myrs4.eof then
			CorrectDomain = "true"
			FoundDomain = MyRS4("FQDN")
		else
			'CorrectDomain = "false"
		end if

		MyRS4.Close
		set MyRS4 = nothing
		
	end if 
	MyRS3.Close
	set MyRS3 = nothing

	
	
end if

If CorrectDomain = "false" then
	response.write "<XML version='1.0' encoding='UTF-8'><data>" '<sql>" & mysql & "</sql>"
		Session("FailCount") = Session("FailCount") + 1
	response.write "<loggedin>false</loggedin>"
	response.write "<FailCount>" & Session("FailCount") & "</FailCount>"
	session("EditMode") = "false"
	session("EditCode") = "contenteditable=""false"""
	response.write "<FQDN>" & TheHostHeader & "</FQDN><FD>" & FoundDomain & "</FD>"
	response.write "</data></XML>"
	response.End()
end if

response.write "<XML version='1.0' encoding='UTF-8'><data>" '<sql>" & mysql & "</sql>"
if not MyRS.eof and Session("FailCount") < 3 then
	response.write "<loggedin>true</loggedin>"
	session("EditMode") = "true"
	session("EditCode") = "contenteditable=""true"""
	session("userFullName") = MyRS("FirstName")
	session("B2TUID") = replace(MyRS("UserAccountID"),"{","")
	session("B2TUID") = replace(session("B2TUID"),"}","")
	session("LoggedDomain") = Request.ServerVariables("SERVER_NAME") 
	
	Set DC2 = server.CreateObject("adodb.connection")
	dc2.open MM_MyConn_STRING
	Set MyRS2 = Server.CreateObject("ADODB.Recordset")
	MyRS2.ActiveConnection = DC2
	MySQL2 = "SELECT * FROM useraccounts where UserID= '" & session("B2TUID") & "';" 
	MyRS2.CursorType = 0
	MyRS2.CursorLocation = 2
	MyRS2.LockType = 1
	MyRS2.Open MySQL2,DC2
	
	if not MyRS2.eof then
		session("VOAccountID") = replace(MyRS2("VOAccountID"),"{","")
		session("VOAccountID") = replace(Session("VOAccountID"),"}","")
	end if 
	MyRS2.Close
	set MyRS2 = nothing
	
	ClientFolder = "/ClientData/" & session("VOAccountID")& "/"
	baseUrl = "/clientdata/" & session("VOAccountID") 

	Session("ClientFolder") = server.MapPath(ClientFolder) & "\"
	ClientFolder = server.MapPath(ClientFolder) & "\"
	'dim fs
	'set fs=Server.CreateObject("Scripting.FileSystemObject")
	'if fs.FolderExists(Session("ClientFolder"))=true then
	 '   response.write("<Status>Client exists</Status>")
	'else
	'  response.write("<Status>Folder does not exist</Status>")
	'  set f=fs.CreateFolder(ClientFolder)
	'  set f=fs.CreateFolder(ClientFolder & "\images")
	'  set f=fs.CreateFolder(ClientFolder & "\_thumbs")
	  
	'	set f=nothing
	'end if
	'set fs=nothing
	
	response.write "<userID><![CDATA[" & MyRS("UserAccountID") & "]]></userID><userEmail><![CDATA[" & MyRS("EmailAddress") & "]]></userEmail><userFullName><![CDATA[" & MyRS("FirstName") & "]]></userFullName>"
	response.write "<FQDN><![CDATA[" & TheHostHeader & "]]></FQDN><FD><![CDATA[" & FoundDomain & "]]></FD>"
else
	Session("FailCount") = Session("FailCount") + 1
	response.write "<loggedin>false</loggedin>"
	response.write "<FailCount>" & Session("FailCount") & "</FailCount>"
	session("EditMode") = "false"
	session("EditCode") = "contenteditable=""false"""
end if

' <![CDATA[   ]]>

response.write "</data></XML>"
MyRS.Close
set MyRS = nothing

%>