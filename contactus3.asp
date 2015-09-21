<% response.ContentType = "text/xml" 

response.write "<XML><data>"
response.write "<authentication>updated</authentication>"
if Err.Number <> 0 Then<
	response.write "<Error><![CDATA[" & Err.Description& &  "]]></Error>"
end if

response.write "</data></XML>"

%>