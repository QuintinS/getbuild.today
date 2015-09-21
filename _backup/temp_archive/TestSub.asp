<%

if request.querystring("RegisterSub") = "awesomedemosite" then
	response.write "false"
else
	response.write "true"
end if

%>