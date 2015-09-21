<% response.ContentType = "text/xml" %>
<%
' http://www.whatsonincapetown.com/feed/
TheFeed = "https://api.ote.wildwestdomains.com/wswwdapi/wapi.asmx?wsdl&account=86468603&password=Snuggle96"


Set xmlDOM = Server.CreateObject("MSXML2.DOMDocument")
xmlDOM.async = False
xmlDOM.setProperty "ServerHTTPRequest", True
xmlDOM.Load(TheFeed)
response.Write xmlDom.xml 

 
Set xmlDOM = Nothing
Set itemList = Nothing

%>
                                      

