<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Sripe Feedback</title>
</head>

<body>
<%
 	For Each Item In Request.Form
    fieldName = Item
    fieldValue = Request.Form(Item)

    Response.Write(""& fieldName &" = Request.Form("""& fieldName &""")")  & "<br>"   
    Next 
%>
</body>
</html>
