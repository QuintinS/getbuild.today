<%

if request.querystring("registerEmail") = "craig@b2tsa.com" then
	response.write "false"
else
	response.write "true"
end if

%>