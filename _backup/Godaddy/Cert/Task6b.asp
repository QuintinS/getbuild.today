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

	ShopperUserID = "856399" 'Get from Task 3b response (Replace)
	ShopperPWD = "abcde"
	ShopperEmail = "agordon@wildwestdomains.com"
	ShopperFirstname = "Artemus"
	ShopperLastname = "Gordon"
	ShopperPhone = "(888)555-1212"	
	ShopperDBPUser = "856400" 'Get from Task 3b response (Replace)
	ShopperDBPPassword = "defgh"
	ShopperDBPEmail = "info@example.biz"	

	Item1ResourceID = "domain:16933" 'Get from Task 3a response (Replace)
	Item2ResourceID = "domain:14986" 'Get from Task 3a response (Replace)
	
	ItemPrivacyResourcedID = "dbp:24384" 'Get from Task 6a response (Replace)

    oXmlHTTP.setRequestHeader "Content-Type", "text/xml; charset=utf-8" 
	oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/OrderPrivateDomainRenewals"

	SOAPRequest = _
	
	"<?xml version='1.0' encoding='utf-8'?>" &_
	"<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>" &_
	  "<soap:Body>" &_
	    "<OrderPrivateDomainRenewals xmlns='http://wildwestdomains.com/webservices/'>" &_
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
			"<dbpuser>" & ShopperDBPUser & "</dbpuser>" &_
			"<dbppwd>" & ShopperDBPPassword & "</dbppwd>" &_
			"<dbpemail>" & ShopperDBPEmail & "</dbpemail>" &_
	      "</shopper>" &_
	      "<items>" &_
	        "<DomainRenewal>" &_
	          "<order>" &_
	            "<productid>350087</productid>" &_
	          "</order>" &_
	          "<resourceid>" & Item1ResourceID & "</resourceid>" &_
	          "<sld>example</sld>" &_
	          "<tld>biz</tld>" &_
	          "<period>1</period>" &_
	        "</DomainRenewal>" &_
	        "<DomainRenewal>" &_
	          "<order>" &_
	            "<productid>350137</productid>" &_
	          "</order>" &_
	          "<resourceid>" & Item2ResourceID & "</resourceid>" &_
	          "<sld>example</sld>" &_
	          "<tld>us</tld>" &_
	          "<period>1</period>" &_
	        "</DomainRenewal>" &_
	      "</items>" &_
	      "<dbpItems>" &_
	        "<ResourceRenewal>" &_
	          "<order>" &_
	            "<productid>387001</productid>" &_
	          "</order>" &_
	          "<resourceid>" & ItemPrivacyResourcedID & "</resourceid>" &_
	        "</ResourceRenewal>" &_
	      "</dbpItems>" &_
	      "<sROID>!roid!</sROID>" &_
	    "</OrderPrivateDomainRenewals>" &_
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