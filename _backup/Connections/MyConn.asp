<%
' FileName="Connection_ado_conn_string.htm"
' Type="ADO" 
' DesigntimeType="ADO"
' HTTP="true"
' Catalog=""
' Schema=""
' Dim MM_MyConn_STRING

'MM_MyConn_STRING = "Driver={SQL Server Native Client 11.0};Server=tcp:builddbs.database.windows.net,1433;Database=BuildEngineLive;Uid=BuildAdmin@builddbs;Pwd=Snuggle96;Encrypt=yes;Connection Timeout=30;"
'MM_MyConn_STRING = "Driver={SQL Server Native Client 10.0};Server=tcp:builddbs.database.windows.net,1433;Database=BuildEngineLive;Uid=BuildAdmin@builddbs;Pwd=Snuggle96;Connection Timeout=30;"
MM_MyConn_STRING = "Provider=SQLNCLI11;Server=tcp:builddbs.database.windows.net,1433;Database=BuildEngineLive;Uid=BuildAdmin@builddbs;Pwd=Snuggle96;Encrypt=yes;Connection Timeout=30;"

%>