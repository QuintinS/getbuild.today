<%


Function URLDecode(sConvert)
    Dim aSplit
    Dim sOutput
    Dim I
    If IsNull(sConvert) Then
       URLDecode = ""
       Exit Function
    End If

    ' convert all pluses to spaces
    sOutput = REPLACE(sConvert, "+", " ")

    ' next convert %hexdigits to the character
    aSplit = Split(sOutput, "%")

    If IsArray(aSplit) Then
      sOutput = aSplit(0)
      For I = 0 to UBound(aSplit) - 1
        sOutput = sOutput & _
          Chr("&H" & Left(aSplit(i + 1), 2)) &_
          Right(aSplit(i + 1), Len(aSplit(i + 1)) - 2)
      Next
    End If

    URLDecode = sOutput
End Function

%>

<form action="namecheap.asp" method="post">
Please enter the Namcheap Call you would like to test. (Beta.build2trade.com is 184.172.22.11)
<input type="text" id="txtApi" name="txtApi">
<input type="submit">
</form>
<br>
Example: 

<textarea><% response.write URLDecode("https://api.sandbox.namecheap.com/xml.response?ApiUser=b2t&ApiKey=4b34ce3288a943fbb39ca14132b86b4a&UserName=b2t&Command=namecheap.domains.check&ClientIP=184.172.22.11&DomainList=b2tsa.com%2Cb2tsa.net%2Cb2tsa.biz%2Cb2tsa.org%2Cb2tsa.info%2Cb2tsa.us%2Cb2tsa.co.uk%2Cb2tsa.de%2Cb2tsa.co%2Cb2tsa.io") %></textarea>
