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

    Set oXmlHTTP = CreateObject("Microsoft.XMLHTTP")
    oXmlHTTP.Open "POST", "https://api.ote.wildwestdomains.com/wswwdapi/wapi.asmx", False 
	



    oXmlHTTP.setRequestHeader "Content-Type", "text/xml; charset=utf-8" 
    oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/Describe"

    SOAPRequest = "<?xml version=""1.0"" encoding=""utf-8""?>" &_
		"<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/"">" &_
		"	<soap:Body>" &_
		"		<Describe xmlns=""http://wildwestdomains.com/webservices/"">" &_
		"			<sCLTRID>" & CreateGUID & "</sCLTRID>" &_
		"			<credential>" &_
		"				<Account>1002189</Account>" &_
		"				<Password>buildAPI3487</Password>" &_
		"			</credential>" &_
		"		</Describe>" &_
		"	</soap:Body>" &_
		"</soap:Envelope>"

' 		"				<Account>86468603</Account>" &_
' 		"				<Password>Snuggle96</Password>" &_

    oXmlHTTP.send SOAPRequest    
    Response.write oXmlHTTP.responseText

   ' Response.Write "<br>Request:<hr>" & SOAPRequest & "<hr>"
	'Response.Write"<br>Response:<hr>" & oXmlHTTP.responseText & "<hr>" 
%>