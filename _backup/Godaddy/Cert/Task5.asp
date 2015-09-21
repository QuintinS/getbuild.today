<% response.ContentType = "text/xml" %>
<%
	Function CreateGUID()
		  Dim tmpTemp
		  tmpTemp = Right(String(4,48) & Year(Now()),4)
		  tmpTemp = tmpTemp & Right(String(4,48) & Month(Now()),2)
		  tmpTemp = tmpTemp & Right(String(4,48) & Day(Now()),2)
		  tmpTemp = tmpTemp & Right(String(4,48) & Hour(Now()),2)
		  tmpTemp = tmpTemp & Right(String(4,48) & Minute(Now()),2)
		  tmpTemp = tmpTemp & Right(String(4,48) & Second(Now()),2)
		  CreateGUID = tmpTemp
	End Function

    'Response.Write "<br>START<hr>"

	Item1ResourceID = "domain:16933" 'Replace from Task 3b

    Set oXmlHTTP = CreateObject("Microsoft.XMLHTTP")
    oXmlHTTP.Open "POST", "https://api.ote.wildwestdomains.com/wswwdapi/wapi.asmx", False 
	
    oXmlHTTP.setRequestHeader "Content-Type", "text/xml; charset=utf-8" 
	oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/Info"
		
	SOAPRequest = _
	
	"<?xml version='1.0' encoding='utf-8'?>" &_
	"<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" &_
	  "<soap:Body>" &_
	    "<Info xmlns='http://wildwestdomains.com/webservices/'>" &_
	      "<sCLTRID>" & CreateGUID() & "</sCLTRID>" &_
	      "<credential>" &_
	        "<Account>1002189</Account>" &_
	        "<Password>buildAPI3487</Password>" &_
	      "</credential>" &_
	      "<sResourceID>" & Item1ResourceID & "</sResourceID>" &_
	    "</Info>" &_
	  "</soap:Body>" &_
	"</soap:Envelope>"

    oXmlHTTP.send SOAPRequest    

	if request.QueryString("show") = "request" then
		response.write SOAPRequest
	end if 
	
	if request.QueryString("show") = "response" then
		response.write oXmlHTTP.responseText
	end if 
%>