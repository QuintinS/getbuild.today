<% response.ContentType = "text/xml" %>
<%

Response.Write "<XML><DATA><GUID>" & CreateGUID() & "</GUID></DATA></XML>"

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
%>