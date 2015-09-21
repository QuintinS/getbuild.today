<%
	'	 For Each Item In Request.Form
    'fieldName = Item
    'fieldValue = Request.Form(Item)

    'Response.Write(fieldName & " = " & fieldValue & "<BR>")
   'Next
	'
	session("registerName") = request.form("registerName")
	session("registerEmail") = request.form("registerEmail")
	session("registerPassword") = request.form("registerPassword")
	session("registerSub") = request.form("registerSub")
	session("domain-type") = request.form("session")
	
	'registerName = Craig McLeod
	'registerEmail = craig@basa.com
	'registerPassword = hello
	'registerPasswordConfirm = hello
	'registerSub = test
	'domain-type = free-subdomain
	
	
	If request.form("domain-type") = "new-domain" then
		'response.Redirect("step_3.html")
		response.Redirect("purchase.asp")
	else
		'valid for: existing-domain and free-subdomain
		response.Redirect("purchase.asp")
	end if
	


	
%>