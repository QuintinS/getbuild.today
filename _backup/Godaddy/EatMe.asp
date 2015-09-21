<% response.ContentType = "text/xml" %>
<%
' http://www.whatsonincapetown.com/feed/
TheFeed = request.form("txtApi")


Set xmlDOM = Server.CreateObject("MSXML2.DOMDocument")
xmlDOM.async = False
xmlDOM.setProperty "ServerHTTPRequest", True
xmlDOM.Load(TheFeed)
MyText = xmlDom.xml 'replace(xmlDom.xml,"accountme=""WAPISoap"" type=""tns:WAPISoap""","accountme='WAPISoap' type='tns:WAPISoap'")
response.Write MyText

 
Set xmlDOM = Nothing
Set itemList = Nothing

%>
                                      

