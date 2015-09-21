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
    oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/ProcessRequest"
    
    sXMLString = "&lt;wapi clTRID=&quot;" & CreateGUID() & "&quot; account=&quot;1002189&quot; pwd=&quot;buildAPI3487&quot;&gt;&lt;manage&gt;&lt;script cmd=&quot;reset&quot;/&gt;&lt;/manage&gt;&lt;/wapi&gt;"
    	
	SOAPRequest = _
	"<?xml version='1.0' encoding='utf-8'?>" &_
	"<soap12:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap12='http://www.w3.org/2003/05/soap-envelope'>" &_
	  "<soap12:Body>" &_
	    "<ProcessRequest xmlns='http://wildwestdomains.com/webservices/'>" &_
	      "<sRequestXML>" & sXMLString & "</sRequestXML>" &_
	    "</ProcessRequest>" &_
	  "</soap12:Body>" &_
	"</soap12:Envelope>"

    oXmlHTTP.send SOAPRequest    
    Response.write oXmlHTTP.responseText

   ' Response.Write "<br>Request:<hr>" & SOAPRequest & "<hr>"
	'Response.Write"<br>Response:<hr>" & oXmlHTTP.responseText & "<hr>" 
%>