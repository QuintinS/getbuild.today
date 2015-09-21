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
	
	' Variables from 3a Response (Replace All)
'	Item1OrderID = "177203"
	Item1ResourceID = "domain:16933"
'	Item1RIID = "!riid_0!"
'	Item2OrderID = "177203"
	Item2ResourceID = "domain:14986" 
'	Item2RIID = "!riid_1!"

	ShopperUserID = "856399" 'Get from Task 2 response (Replace)
	ShopperPWD = "abcde"
	ShopperEmail = "agordon@wildwestdomains.com"
	ShopperFirstname = "Artemus"
	ShopperLastname = "Gordon"
	ShopperPhone = "(888)555-1212"
	
    oXmlHTTP.setRequestHeader "Content-Type", "text/xml; charset=utf-8" 		
	oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/OrderDomainPrivacy"
	
	SOAPRequest = _
	
	"<?xml version='1.0' encoding='utf-8'?>" &_
	"<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" &_
	  "<soap:Body>" &_
	    "<OrderDomainPrivacy xmlns='http://wildwestdomains.com/webservices/'>" &_
	      "<sCLTRID>" & CreateGUID() & "</sCLTRID>" &_
	      "<credential>" &_
	        "<Account>1002189</Account>" &_
	        "<Password>buildAPI3487</Password>" &_
	      "</credential>" &_
	      "<shopper>" &_
	      	"<acceptOrderTOS>agree</acceptOrderTOS>" &_
	      	"<user>" & ShopperUserID &"</user>" &_
	      	"<pwd>" & ShopperPWD & "</pwd>" &_
	      	"<email>" & ShopperEmail & "</email>" &_
	      	"<firstname>" & ShopperFirstname & "</firstname>" &_
	      	"<lastname>" & ShopperLastname & "</lastname>" &_
	      	"<phone>" & ShopperPhone & "</phone>" &_
			"<dbpuser>createNew</dbpuser>" &_
			"<dbppwd>defgh</dbppwd>" &_
			"<dbpemail>info@example.biz</dbpemail>" &_
	      "</shopper>" &_
	      "<items>" &_
	        "<DomainByProxy>" &_
	          "<order>" &_
	            "<productid>377001</productid>" &_
	          "</order>" &_
	          "<sld>example</sld>" &_
	          "<tld>biz</tld>" &_
	          "<resourceid>" & Item1ResourceID & "</resourceid>" &_
	        "</DomainByProxy>" &_
	      "</items>" &_
	      "<sROID>!roid!</sROID>" &_
	    "</OrderDomainPrivacy>" &_
	  "</soap:Body>" &_
	"</soap:Envelope>"

    oXmlHTTP.send SOAPRequest    
    'Response.write oXmlHTTP.responseText

	if request.QueryString("show") = "request" then
		response.write SOAPRequest
	end if 
	
	if request.QueryString("show") = "response" then
		response.write oXmlHTTP.responseText
	end if 
	
%>