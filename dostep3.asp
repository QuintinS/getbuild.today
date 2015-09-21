<%
	For Each Item In Request.Form
  	  fieldName = Item
    	fieldValue = Request.Form(Item)

    	Response.Write(fieldName & " = " & fieldValue & "<BR>")
    Next
	
	session("alternateDomain") = request.form("alternateDomain")
	response.Redirect("purchase.asp")
%>