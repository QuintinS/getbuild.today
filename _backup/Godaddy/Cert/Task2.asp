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
	oXmlHTTP.setRequestHeader "SOAPAction", "http://wildwestdomains.com/webservices/OrderDomains"
	
	SOAPRequest = _
	"<?xml version='1.0' encoding='utf-8'?>" &_
	"<soap12:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap12='http://schemas.xmlsoap.org/soap/envelope/'>" &_
	  "<soap12:Body>" &_
	    "<OrderDomains xmlns='http://wildwestdomains.com/webservices/'>" &_
	      "<sCLTRID>" & CreateGUID() & "</sCLTRID>" &_  
	      "<credential>" &_
	        "<Account>1002189</Account>" &_
	        "<Password>buildAPI3487</Password>" &_
	      "</credential>" &_
	      "<shopper>" &_
	      	"<acceptOrderTOS>agree</acceptOrderTOS>" &_
	      	"<user>createNew</user>" &_
	      	"<pwd>abcde</pwd>" &_
 	      	"<pwdh></pwdh>" &_
	      	"<email>agordon@wildwestdomains.com</email>" &_
	      	"<firstname>Artemus</firstname>" &_
	      	"<lastname>Gordon</lastname>" &_
	      	"<phone>(888)555-1212</phone>" &_
	      "</shopper>" &_
	      "<items>" &_
	      	"<DomainRegistration>" &_
	      		"<order>" &_
	      			"<productid>350077</productid>" &_
	      		"</order>" &_
	      		"<sld>example</sld>" &_
	      		"<tld>biz</tld>" &_
	      		"<idnScript>ACE</idnScript>" &_
	      		"<period>2</period>" &_
	      		"<registrant>" &_
	      			"<fname>Artemus</fname>" &_
	      			"<lname>Gordon</lname>" &_
	      			"<org></org>" &_
	      			"<email>agordon@wildwestdomains.com</email>" &_
	      			"<sa1>2 N. Main St.</sa1>" &_
	      			"<city>Valdosta</city>" &_
	      			"<sp>Georgia</sp>" &_
	      			"<pc>17123</pc>" &_
	      			"<cc>United States</cc>" &_
	      			"<phone>(888)555-1212</phone>" &_
	      		"</registrant>" &_
	      		"<nsArray>" &_
	      			"<NS>" &_
	              "<name>ns1.example.com</name>" &_
	            "</NS>" &_
	            "<NS>" &_
	              "<name>ns2.example.com</name>" &_
	            "</NS>" &_
	      		"</nsArray>" &_
	      	"</DomainRegistration>" &_
	      	"<DomainRegistration>" &_
	      		"<order>" &_
	      			"<productid>350127</productid>" &_
	      		"</order>" &_
	          "<sld>example</sld>" &_
	          "<tld>us</tld>" &_
	      		"<period>2</period>" &_
	      		"<registrant>" &_
	      			"<fname>Artemus</fname>" &_
	      			"<lname>Gordon</lname>" &_
	      			"<org></org>" &_
	      			"<email>agordon@wildwestdomains.com</email>" &_
	      			"<sa1>2 N. Main St.</sa1>" &_
	      			"<city>Valdosta</city>" &_
	      			"<sp>Georgia</sp>" &_
	      			"<pc>17123</pc>" &_
	      			"<cc>United States</cc>" &_
	      			"<phone>(888)555-1212</phone>" &_
	      		"</registrant>" &_
	      		"<nexus>" &_
	      			"<category>citizen of US</category>" &_
	      			"<use>personal</use>" &_
	      		"</nexus>" &_
	          "<nsArray>" &_
	            "<NS>" &_
	              "<name>ns1.example.com</name>" &_
	            "</NS>" &_
	            "<NS>" &_
	              "<name>ns2.example.com</name>" &_
	            "</NS>" &_
	          "</nsArray>" &_
	      	"</DomainRegistration>" &_
	      "</items>" &_
	    "</OrderDomains>" &_
	  "</soap12:Body>" &_
	"</soap12:Envelope>"

    oXmlHTTP.send SOAPRequest    
    'Response.write oXmlHTTP.responseText
	if request.QueryString("show") = "request" then
		response.write SOAPRequest
	end if 
	
	if request.QueryString("show") = "response" then
		response.write oXmlHTTP.responseText
	end if 

  ' Response.Write "<br>Request:<hr>" & server.HTMLEncode(SOAPRequest) & "<hr>"
	'Response.Write"<br>Response:<hr>" & server.HTMLEncode(oXmlHTTP.responseText) & "<hr>" 
   
%>
