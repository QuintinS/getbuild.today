<%
response.ContentType = "text/xml"
' http://www.whatsonincapetown.com/feed/
if request.querystring("command") = "check" then
	TheFeed = "https://api.sandbox.namecheap.com/xml.response?ApiUser=b2t&ApiKey=4b34ce3288a943fbb39ca14132b86b4a&UserName=b2t&Command=namecheap.domains.check&ClientIP=184.172.17.168&DomainList=" & request.querystring("domainList")
end if

if request.querystring("command") = "getPricing" then
	TheFeed = "https://api.sandbox.namecheap.com/xml.response?ApiUser=b2t&ApiKey=4b34ce3288a943fbb39ca14132b86b4a&UserName=b2t&Command=namecheap.users.getPricing&ClientIP=184.172.17.168&ProductType=DOMAIN" 
end if


Set xmlDOM = Server.CreateObject("MSXML2.DOMDocument")
xmlDOM.async = False
xmlDOM.setProperty "ServerHTTPRequest", True
xmlDOM.Load(TheFeed)

'If xmlDOM.parseError.errorCode <> 0  Then
'	Response.write "B2TErrorCode:Domain001<BR>"
 '   Response.Write(xmlDOM.parseError.reason)
  '  Response.Write(xmlDOM.parseError.errorCode)
'End If

response.Write xmlDom.xml 

 
Set xmlDOM = Nothing
Set itemList = Nothing

%>