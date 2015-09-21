<!--#include file="../../Connections/MyConn.asp" -->
<%



Dim MyRS
Dim MyRS_numRows

Set DC = server.CreateObject("adodb.connection")
dc.open MM_MyConn_STRING
Set MyRS = Server.CreateObject("ADODB.Recordset")
MyRS.ActiveConnection = DC
MySQL = "SELECT * FROM UserDomains where FQDN= '" & replace(request.form("FQDN"),"'","''") & "'"
'response.write Mysql
MyRS.CursorType = 0
MyRS.CursorLocation = 2
MyRS.LockType = 1
MyRS.Open MySQL,DC
'response.write Mysql

if myrs.eof then
	response.write "true"
else
	response.write "false"
end if

MyRS.Close
set MyRS = nothing


%>
