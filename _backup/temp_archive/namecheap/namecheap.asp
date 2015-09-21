
<%
' http://www.whatsonincapetown.com/feed/
TheFeed = request.form("txtApi") ' "https://api.sandbox.namecheap.com/xml.response?ApiUser=b2t&ApiKey=4b34ce3288a943fbb39ca14132b86b4a&UserName=b2t&Command=namecheap.domains.check&ClientIP=184.172.22.11&DomainList=b2tsa.com%2Cb2tsa.net%2Cb2tsa.biz%2Cb2tsa.org%2Cb2tsa.info%2Cb2tsa.us%2Cb2tsa.co.uk%2Cb2tsa.de%2Cb2tsa.co%2Cb2tsa.io"


Set xmlDOM = Server.CreateObject("MSXML2.DOMDocument")
xmlDOM.async = False
xmlDOM.setProperty "ServerHTTPRequest", True
xmlDOM.Load(TheFeed)
response.write "You submitted: " & TheFeed & "<br><br><br> Return Value:<BR>"
%>
<textarea cols="60" rows="20"><%= xmlDom.xml %></textarea>
<%

'Set itemList = XMLDom.SelectNodes("ApiResponse") 
 
'myCount = 0
'response.write "Getting Cape Town News Feed."
'For Each itemAttrib In itemList
	'myCount = myCount + 1
	'response.write (myCount)
'   newsSubject =itemAttrib.SelectSingleNode("title").text
 '  newsExtract =itemAttrib.SelectSingleNode("description").text
  ' newsDate = itemAttrib.SelectSingleNode("pubDate").text
   'newsLink = itemAttrib.SelectSingleNode("guid").text
   '%>
   

<%
'next
 
Set xmlDOM = Nothing
Set itemList = Nothing

%>
                                      