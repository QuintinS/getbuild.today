<!--#include file="../Connections/MyConn.asp" -->
<!-- 

<%	For Each Item In Request.Form
		fieldName = Item
		fieldValue = Request.Form(Item)

		Response.Write(""& fieldName &" = " & fieldValue  & vbcrlf )    
    Next 
%>
-->
<%
'Our Function generatePassword accepts one parameter 'passwordLength'
'passwordLength will obviously determine the password length.
'The aplhanumeric character set is assigned to the variable sDefaultChars
Function generatePassword(passwordLength)
'Declare variables
Dim sDefaultChars
Dim iCounter
Dim sMyPassword
Dim iPickedChar
Dim iDefaultCharactersLength
Dim iPasswordLength
'Initialize variables
sDefaultChars="abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789"
iPasswordLength=passwordLength
iDefaultCharactersLength = Len(sDefaultChars)
Randomize'initialize the random number generator
'Loop for the number of characters password is to have
For iCounter = 1 To iPasswordLength
'Next pick a number from 1 to length of character set
iPickedChar = Int((iDefaultCharactersLength * Rnd) + 1)
'Next pick a character from the character set using the random number iPickedChar
'and Mid function
sMyPassword = sMyPassword & Mid(sDefaultChars,iPickedChar,1)
Next
generatePassword = sMyPassword
End Function
'Response.write generatePassword(6) 'Call the function & pass in 6 as the parameter
	
	
' Derived from the RSA Data Security, Inc. MD5 Message-Digest Algorithm,
' as set out in the memo RFC1321.
'
'
' ASP VBScript code for generating an MD5 'digest' or 'signature' of a string. The
' MD5 algorithm is one of the industry standard methods for generating digital
' signatures. It is generically known as a digest, digital signature, one-way
' encryption, hash or checksum algorithm. A common use for MD5 is for password
' encryption as it is one-way in nature, that does not mean that your passwords
' are not free from a dictionary attack.
'
' This is 'free' software with the following restrictions:
'
' You may not redistribute this code as a 'sample' or 'demo'. However, you are free
' to use the source code in your own code, but you may not claim that you created
' the sample code. It is expressly forbidden to sell or profit from this source code
' other than by the knowledge gained or the enhanced value added by your own code.
'
' Use of this software is also done so at your own risk. The code is supplied as
' is without warranty or guarantee of any kind.
'
' Should you wish to commission some derivative work based on this code provided
' here, or any consultancy work, please do not hesitate to contact us.
'
' Web Site:  http://www.frez.co.uk
' E-mail:    sales@frez.co.uk

Private Const BITS_TO_A_BYTE = 8
Private Const BYTES_TO_A_WORD = 4
Private Const BITS_TO_A_WORD = 32

Private m_lOnBits(30)
Private m_l2Power(30)
 
    m_lOnBits(0) = CLng(1)
    m_lOnBits(1) = CLng(3)
    m_lOnBits(2) = CLng(7)
    m_lOnBits(3) = CLng(15)
    m_lOnBits(4) = CLng(31)
    m_lOnBits(5) = CLng(63)
    m_lOnBits(6) = CLng(127)
    m_lOnBits(7) = CLng(255)
    m_lOnBits(8) = CLng(511)
    m_lOnBits(9) = CLng(1023)
    m_lOnBits(10) = CLng(2047)
    m_lOnBits(11) = CLng(4095)
    m_lOnBits(12) = CLng(8191)
    m_lOnBits(13) = CLng(16383)
    m_lOnBits(14) = CLng(32767)
    m_lOnBits(15) = CLng(65535)
    m_lOnBits(16) = CLng(131071)
    m_lOnBits(17) = CLng(262143)
    m_lOnBits(18) = CLng(524287)
    m_lOnBits(19) = CLng(1048575)
    m_lOnBits(20) = CLng(2097151)
    m_lOnBits(21) = CLng(4194303)
    m_lOnBits(22) = CLng(8388607)
    m_lOnBits(23) = CLng(16777215)
    m_lOnBits(24) = CLng(33554431)
    m_lOnBits(25) = CLng(67108863)
    m_lOnBits(26) = CLng(134217727)
    m_lOnBits(27) = CLng(268435455)
    m_lOnBits(28) = CLng(536870911)
    m_lOnBits(29) = CLng(1073741823)
    m_lOnBits(30) = CLng(2147483647)
    
    m_l2Power(0) = CLng(1)
    m_l2Power(1) = CLng(2)
    m_l2Power(2) = CLng(4)
    m_l2Power(3) = CLng(8)
    m_l2Power(4) = CLng(16)
    m_l2Power(5) = CLng(32)
    m_l2Power(6) = CLng(64)
    m_l2Power(7) = CLng(128)
    m_l2Power(8) = CLng(256)
    m_l2Power(9) = CLng(512)
    m_l2Power(10) = CLng(1024)
    m_l2Power(11) = CLng(2048)
    m_l2Power(12) = CLng(4096)
    m_l2Power(13) = CLng(8192)
    m_l2Power(14) = CLng(16384)
    m_l2Power(15) = CLng(32768)
    m_l2Power(16) = CLng(65536)
    m_l2Power(17) = CLng(131072)
    m_l2Power(18) = CLng(262144)
    m_l2Power(19) = CLng(524288)
    m_l2Power(20) = CLng(1048576)
    m_l2Power(21) = CLng(2097152)
    m_l2Power(22) = CLng(4194304)
    m_l2Power(23) = CLng(8388608)
    m_l2Power(24) = CLng(16777216)
    m_l2Power(25) = CLng(33554432)
    m_l2Power(26) = CLng(67108864)
    m_l2Power(27) = CLng(134217728)
    m_l2Power(28) = CLng(268435456)
    m_l2Power(29) = CLng(536870912)
    m_l2Power(30) = CLng(1073741824)

Private Function LShift(lValue, iShiftBits)
    If iShiftBits = 0 Then
        LShift = lValue
        Exit Function
    ElseIf iShiftBits = 31 Then
        If lValue And 1 Then
            LShift = &H80000000
        Else
            LShift = 0
        End If
        Exit Function
    ElseIf iShiftBits < 0 Or iShiftBits > 31 Then
        Err.Raise 6
    End If

    If (lValue And m_l2Power(31 - iShiftBits)) Then
        LShift = ((lValue And m_lOnBits(31 - (iShiftBits + 1))) * m_l2Power(iShiftBits)) Or &H80000000
    Else
        LShift = ((lValue And m_lOnBits(31 - iShiftBits)) * m_l2Power(iShiftBits))
    End If
End Function

Private Function RShift(lValue, iShiftBits)
    If iShiftBits = 0 Then
        RShift = lValue
        Exit Function
    ElseIf iShiftBits = 31 Then
        If lValue And &H80000000 Then
            RShift = 1
        Else
            RShift = 0
        End If
        Exit Function
    ElseIf iShiftBits < 0 Or iShiftBits > 31 Then
        Err.Raise 6
    End If
    
    RShift = (lValue And &H7FFFFFFE) \ m_l2Power(iShiftBits)

    If (lValue And &H80000000) Then
        RShift = (RShift Or (&H40000000 \ m_l2Power(iShiftBits - 1)))
    End If
End Function

Private Function RotateLeft(lValue, iShiftBits)
    RotateLeft = LShift(lValue, iShiftBits) Or RShift(lValue, (32 - iShiftBits))
End Function

Private Function AddUnsigned(lX, lY)
    Dim lX4
    Dim lY4
    Dim lX8
    Dim lY8
    Dim lResult
 
    lX8 = lX And &H80000000
    lY8 = lY And &H80000000
    lX4 = lX And &H40000000
    lY4 = lY And &H40000000
 
    lResult = (lX And &H3FFFFFFF) + (lY And &H3FFFFFFF)
 
    If lX4 And lY4 Then
        lResult = lResult Xor &H80000000 Xor lX8 Xor lY8
    ElseIf lX4 Or lY4 Then
        If lResult And &H40000000 Then
            lResult = lResult Xor &HC0000000 Xor lX8 Xor lY8
        Else
            lResult = lResult Xor &H40000000 Xor lX8 Xor lY8
        End If
    Else
        lResult = lResult Xor lX8 Xor lY8
    End If
 
    AddUnsigned = lResult
End Function

Private Function F(x, y, z)
    F = (x And y) Or ((Not x) And z)
End Function

Private Function G(x, y, z)
    G = (x And z) Or (y And (Not z))
End Function

Private Function H(x, y, z)
    H = (x Xor y Xor z)
End Function

Private Function I(x, y, z)
    I = (y Xor (x Or (Not z)))
End Function

Private Sub FF(a, b, c, d, x, s, ac)
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac))
    a = RotateLeft(a, s)
    a = AddUnsigned(a, b)
End Sub

Private Sub GG(a, b, c, d, x, s, ac)
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac))
    a = RotateLeft(a, s)
    a = AddUnsigned(a, b)
End Sub

Private Sub HH(a, b, c, d, x, s, ac)
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac))
    a = RotateLeft(a, s)
    a = AddUnsigned(a, b)
End Sub

Private Sub II(a, b, c, d, x, s, ac)
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac))
    a = RotateLeft(a, s)
    a = AddUnsigned(a, b)
End Sub

Private Function ConvertToWordArray(sMessage)
    Dim lMessageLength
    Dim lNumberOfWords
    Dim lWordArray()
    Dim lBytePosition
    Dim lByteCount
    Dim lWordCount
    
    Const MODULUS_BITS = 512
    Const CONGRUENT_BITS = 448
    
    lMessageLength = Len(sMessage)
    
    lNumberOfWords = (((lMessageLength + ((MODULUS_BITS - CONGRUENT_BITS) \ BITS_TO_A_BYTE)) \ (MODULUS_BITS \ BITS_TO_A_BYTE)) + 1) * (MODULUS_BITS \ BITS_TO_A_WORD)
    ReDim lWordArray(lNumberOfWords - 1)
    
    lBytePosition = 0
    lByteCount = 0
    Do Until lByteCount >= lMessageLength
        lWordCount = lByteCount \ BYTES_TO_A_WORD
        lBytePosition = (lByteCount Mod BYTES_TO_A_WORD) * BITS_TO_A_BYTE
        lWordArray(lWordCount) = lWordArray(lWordCount) Or LShift(Asc(Mid(sMessage, lByteCount + 1, 1)), lBytePosition)
        lByteCount = lByteCount + 1
    Loop

    lWordCount = lByteCount \ BYTES_TO_A_WORD
    lBytePosition = (lByteCount Mod BYTES_TO_A_WORD) * BITS_TO_A_BYTE

    lWordArray(lWordCount) = lWordArray(lWordCount) Or LShift(&H80, lBytePosition)

    lWordArray(lNumberOfWords - 2) = LShift(lMessageLength, 3)
    lWordArray(lNumberOfWords - 1) = RShift(lMessageLength, 29)
    
    ConvertToWordArray = lWordArray
End Function

Private Function WordToHex(lValue)
    Dim lByte
    Dim lCount
    
    For lCount = 0 To 3
        lByte = RShift(lValue, lCount * BITS_TO_A_BYTE) And m_lOnBits(BITS_TO_A_BYTE - 1)
        WordToHex = WordToHex & Right("0" & Hex(lByte), 2)
    Next
End Function

Public Function MD5(sMessage)
    Dim x
    Dim k
    Dim AA
    Dim BB
    Dim CC
    Dim DD
    Dim a
    Dim b
    Dim c
    Dim d
    
    Const S11 = 7
    Const S12 = 12
    Const S13 = 17
    Const S14 = 22
    Const S21 = 5
    Const S22 = 9
    Const S23 = 14
    Const S24 = 20
    Const S31 = 4
    Const S32 = 11
    Const S33 = 16
    Const S34 = 23
    Const S41 = 6
    Const S42 = 10
    Const S43 = 15
    Const S44 = 21

    x = ConvertToWordArray(sMessage)
    
    a = &H67452301
    b = &HEFCDAB89
    c = &H98BADCFE
    d = &H10325476

    For k = 0 To UBound(x) Step 16
        AA = a
        BB = b
        CC = c
        DD = d
    
        FF a, b, c, d, x(k + 0), S11, &HD76AA478
        FF d, a, b, c, x(k + 1), S12, &HE8C7B756
        FF c, d, a, b, x(k + 2), S13, &H242070DB
        FF b, c, d, a, x(k + 3), S14, &HC1BDCEEE
        FF a, b, c, d, x(k + 4), S11, &HF57C0FAF
        FF d, a, b, c, x(k + 5), S12, &H4787C62A
        FF c, d, a, b, x(k + 6), S13, &HA8304613
        FF b, c, d, a, x(k + 7), S14, &HFD469501
        FF a, b, c, d, x(k + 8), S11, &H698098D8
        FF d, a, b, c, x(k + 9), S12, &H8B44F7AF
        FF c, d, a, b, x(k + 10), S13, &HFFFF5BB1
        FF b, c, d, a, x(k + 11), S14, &H895CD7BE
        FF a, b, c, d, x(k + 12), S11, &H6B901122
        FF d, a, b, c, x(k + 13), S12, &HFD987193
        FF c, d, a, b, x(k + 14), S13, &HA679438E
        FF b, c, d, a, x(k + 15), S14, &H49B40821
    
        GG a, b, c, d, x(k + 1), S21, &HF61E2562
        GG d, a, b, c, x(k + 6), S22, &HC040B340
        GG c, d, a, b, x(k + 11), S23, &H265E5A51
        GG b, c, d, a, x(k + 0), S24, &HE9B6C7AA
        GG a, b, c, d, x(k + 5), S21, &HD62F105D
        GG d, a, b, c, x(k + 10), S22, &H2441453
        GG c, d, a, b, x(k + 15), S23, &HD8A1E681
        GG b, c, d, a, x(k + 4), S24, &HE7D3FBC8
        GG a, b, c, d, x(k + 9), S21, &H21E1CDE6
        GG d, a, b, c, x(k + 14), S22, &HC33707D6
        GG c, d, a, b, x(k + 3), S23, &HF4D50D87
        GG b, c, d, a, x(k + 8), S24, &H455A14ED
        GG a, b, c, d, x(k + 13), S21, &HA9E3E905
        GG d, a, b, c, x(k + 2), S22, &HFCEFA3F8
        GG c, d, a, b, x(k + 7), S23, &H676F02D9
        GG b, c, d, a, x(k + 12), S24, &H8D2A4C8A
            
        HH a, b, c, d, x(k + 5), S31, &HFFFA3942
        HH d, a, b, c, x(k + 8), S32, &H8771F681
        HH c, d, a, b, x(k + 11), S33, &H6D9D6122
        HH b, c, d, a, x(k + 14), S34, &HFDE5380C
        HH a, b, c, d, x(k + 1), S31, &HA4BEEA44
        HH d, a, b, c, x(k + 4), S32, &H4BDECFA9
        HH c, d, a, b, x(k + 7), S33, &HF6BB4B60
        HH b, c, d, a, x(k + 10), S34, &HBEBFBC70
        HH a, b, c, d, x(k + 13), S31, &H289B7EC6
        HH d, a, b, c, x(k + 0), S32, &HEAA127FA
        HH c, d, a, b, x(k + 3), S33, &HD4EF3085
        HH b, c, d, a, x(k + 6), S34, &H4881D05
        HH a, b, c, d, x(k + 9), S31, &HD9D4D039
        HH d, a, b, c, x(k + 12), S32, &HE6DB99E5
        HH c, d, a, b, x(k + 15), S33, &H1FA27CF8
        HH b, c, d, a, x(k + 2), S34, &HC4AC5665
    
        II a, b, c, d, x(k + 0), S41, &HF4292244
        II d, a, b, c, x(k + 7), S42, &H432AFF97
        II c, d, a, b, x(k + 14), S43, &HAB9423A7
        II b, c, d, a, x(k + 5), S44, &HFC93A039
        II a, b, c, d, x(k + 12), S41, &H655B59C3
        II d, a, b, c, x(k + 3), S42, &H8F0CCC92
        II c, d, a, b, x(k + 10), S43, &HFFEFF47D
        II b, c, d, a, x(k + 1), S44, &H85845DD1
        II a, b, c, d, x(k + 8), S41, &H6FA87E4F
        II d, a, b, c, x(k + 15), S42, &HFE2CE6E0
        II c, d, a, b, x(k + 6), S43, &HA3014314
        II b, c, d, a, x(k + 13), S44, &H4E0811A1
        II a, b, c, d, x(k + 4), S41, &HF7537E82
        II d, a, b, c, x(k + 11), S42, &HBD3AF235
        II c, d, a, b, x(k + 2), S43, &H2AD7D2BB
        II b, c, d, a, x(k + 9), S44, &HEB86D391
    
        a = AddUnsigned(a, AA)
        b = AddUnsigned(b, BB)
        c = AddUnsigned(c, CC)
        d = AddUnsigned(d, DD)
    Next
    
    MD5 = LCase(WordToHex(a) & WordToHex(b) & WordToHex(c) & WordToHex(d))
End Function


 'ChockingHazard = UCASE(MD5("takeitlikeit" & "2140176" & request.form("order_number") & "12.50"))
 'ChockingHazard = UCASE(MD5("takeitlikeit" & "2140176" & "1" & "150.00"))
 'if ChockingHazard  =  ChockingHazard  then
 	'response.Write("This order is legit")<br>
	OrderLegit = "Legit Order"
 'else
 	'response.write("order was: " & request.form("key") & vbcrlf & "expect was: " & ChockingHazard) '& vbcrlf &  "unsalted: " & "takeitlikeit" & "2140176" & request.form("order_number") & "12.50" )	
'	OrderLegit = "Order is not legit!"
 'end if 


	myMsg = ""
	For Each Item In request.form
  	    fieldName = Item
    	fieldValue = request.form(Item)

    	myMsg = myMsg & fieldName & " = " & fieldValue & vbcrlf 

    Next
	
		myMsg = myMsg & vbcrlf & vbcrlf & vbcrlf & request.ServerVariables("HTTP_USER_AGENT") & vbcrlf & request.ServerVariables("REMOTE_ADDR") & vbcrlf & request.ServerVariables("REMOTE_HOST") & vbcrlf & request.ServerVariables("REMOTE_USER")
on error resume next
Set myMail=CreateObject("CDO.Message")
myMail.Subject="Promo Account Created" 
myMail.From="support@getbuild.today"
myMail.To="craig@b2tsa.com"
myMail.TextBody="Trial Data (Trial.asp):" & vbcrlf & myMsg 
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing")= 2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver")="oxmail.registrar-servers.com"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport")= 25
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername")= "support@getbuild.today"
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "As$fjsiskesifksf2342lasdfijasdfj"
myMail.Configuration.Fields.Update

myMail.Send
set myMail=nothing


NewPass = generatePassword(8)
Set myMail=CreateObject("CDO.Message")
myMail.Subject="Your new website login details: " & now() 
myMail.From="support@getbuild.today"
myMail.To= replace(request.form("email"),";","")
myMail.TextBody="Hi " & request.form("first_name") & "," & vbcrlf & vbcrlf & "Thank you for signing up with Build. We're certain you're going to love it!" & vbcrlf & vbcrlf & "Login Details" & vbcrlf & vbcrlf & "Your username: " & request.form("email") & vbcrlf & "Your password: " & NewPass  & vbcrlf & "Your Website: " & "http://" & request.form("li_1_description")  & ".usebuild.co" & vbcrlf & vbcrlf & "Help us make build even better!" & vbcrlf & vbcrlf & "We want to make sure that Build. is exactly what you want and need. For this reason we're opening up a direct line of communication for you to have your say. We're always interested to hear your opinion and suggestions. Please feel free to send an email to support@getbuild.today with your valued input." & vbcrlf & vbcrlf & "Congratluations on your awesome new website." & vbcrlf & "Team Build."


myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing")= 2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver")="oxmail.registrar-servers.com"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport")= 25
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername")= "support@getbuild.today"
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "As$fjsiskesifksf2342lasdfijasdfj"
myMail.Configuration.Fields.Update

myMail.Send
set myMail=nothing











if OrderLegit = "Legit Order" then

' Check if login exists already
	Set DC = server.CreateObject("adodb.connection")
	dc.open MM_MyConn_STRING
	Set MyRS = Server.CreateObject("ADODB.Recordset")
	MyRS.ActiveConnection = DC
	MySQL = "SELECT * FROM userlogins where emailAddress = '" & replace(request.form("email"),"'","''") & "'"
	MyRS.CursorType = 1
	MyRS.CursorLocation = 2
	MyRS.LockType = 3
	MyRS.Open MySQL,DC
	if not myrs.eof then 
		'response.write "This account already exisits!<BR>"
	else 
		MyRs.Addnew()
		MyRs("EmailAddress") = replace(request.form("email"),"'","''")
		
		MyRS("UserPassword") = NewPass
		MyRS("FirstName") = request.form("first_name")
		MyRS("Surname") = request.form("last_name")
		MyRS("UserCountry") = request.form("country")
		MyRs.Update()
		NewUserAccountID = MyRS("UserAccountID")
		
		'response.write "The New User AccountID: " & NewUserAccountID & "<BR> with passswod: " & NewPass & "<BR>"
		
		Set DC2 = server.CreateObject("adodb.connection")
		dc2.open MM_MyConn_STRING
		Set MyRS2 = Server.CreateObject("ADODB.Recordset")
		MyRS2.ActiveConnection = DC2
		MySQL2 = "SELECT * FROM useraccounts where UserID= '" & NewUserAccountID  & "';" 
		MyRS2.CursorType = 1
		MyRS2.CursorLocation = 2
		MyRS2.LockType = 3
		MyRS2.Open MySQL2,DC2
		
		if myrs2.eof then 
			MyRS2.AddNew()
			MyRS2("ExpireDate") = DateAdd("d",366,now())
			MyRS2("AccountStartDate") = Date(now)
			MyRS2("TemplateID") = request.form("li_0_description")
			MyRS2("UserID") =  NewUserAccountID
			'MyRS2("TrialMode") = 1
			MyRS2.Update
			NewVoAccountID = MyRs2("VoAccountID")
			'response.write "The New User AccountID: " & NewVoAccountID & "<BR>Template ID: " & MyRS2("TemplateID") & "<BR>"
		end if
		
		Set DC3 = server.CreateObject("adodb.connection")
		dc3.open MM_MyConn_STRING
		Set MyRS3 = Server.CreateObject("ADODB.Recordset")
		MyRS3.ActiveConnection = DC3
		MySQL3 = "SELECT * FROM userdomains where VOACCOUNTID= '" & NewVoAccountID  & "';" 
		MyRS3.CursorType = 1
		MyRS3.CursorLocation = 2
		MyRS3.LockType = 3
		MyRS3.Open MySQL3,DC3
		if myrs3.eof then
			MyRS3.addnew()
			MyRS3("VoAccountID") = NewVoAccountID
			MyRS3("FQDN") = request.form("li_1_description")  & ".usebuild.co"
			MyRS3.update()
			'response.write "The domain has been created (" & MyRS3("domainid") & ") :" & MyRS3("FQDN") & "<BR>"
		end if
		
		Set DC4 = server.CreateObject("adodb.connection")
		dc4.open MM_MyConn_STRING
		Set MyRS4 = Server.CreateObject("ADODB.Recordset")
		MyRS4.ActiveConnection = DC4
		MySQL4 = "SELECT * FROM UserPages where VOAccountID= '" &NewVoAccountID & "'"
		MyRS4.CursorType = 1
		MyRS4.CursorLocation = 2
		MyRS4.LockType = 3
		MyRS4.Open MySQL4,DC4
		if myrs4.eof then
			MyRS4.AddNew()
			MyRS4("isDefault") = "True"
			MyRS4("PageName") = "Home"
			MyRS4("TemplateFile") = "index.asp"
			MyRS4("MenuLocation") = "0"
			MyRS4("VoAccountID") = NewVoAccountID
			MyRS4.update()
			'response.write "Default Page Created: " & MyRS4("PageID") 
		end if 

		'response.write "Account Creation Complete"
	
	end if

else
	'response.write "This order seems to be invalid"
end if

%>

<!DOCTYPE html>
<html lang="en">

	<head>

		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />
        <meta name="creator" content="Build - www.getbuild.today">
        <meta name="author" content="Build - www.getbuild.today"/>
        <meta name="generator" content="Build - www.getbuild.today"/>

		<title>Website Order Confirmation</title>

		<link href="../css/order-old.css" rel="stylesheet" media="screen, projection">
		<link href="../css/jquery.reject.css" rel="stylesheet" media="screen, projection">

		<script src="https://code.jquery.com/jquery.js"></script>

	</head>

	<body>

		<div class="BuildBlueBackground">

			<div class="Header" id="Header">

				<div class="container">

					<div class="row">
						<div class="col-md-12 text-center">
							<h1>Congratulations!</h1>
							<h2>You have a shiny new web site. Your details are below:</h2>
						</div>
					</div>

				</div>

			</div>

			<div class="SiteDetails">

				<div class="container">

					<div class="row">
						<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
							<div class="DetailsBox">
								
								<div class="row">
									<div class="col-md-12">
										<div class="SiteAddress text-center" id="SiteAddress">
											<hr>
											<a href="http://<%= request.form("li_1_description") %>.usebuild.co?FirstTime=1" class="SiteAddressSpan" id="SiteAddressSpan"><%= request.form("li_1_description")  & ".usebuild.co" %></a>
											<hr>
										</div>
									</div>

									<div class="col-md-12">
										<div class="LoginDetails text-center" id="LoginDetails">
											
											<div class="LoginDetailsContainer">
												<span class="LoginEmailAddressLabel LoginDetailsLabel" id="LoginEmailAddressLabel">Use your e-mail address</span>
												<span class="LoginEmailAddress LoginDetailsValue" id="LoginEmailAddress"><%= request.form("email") %></span>
											</div>
											<div class="margin-top-20 LoginDetailsContainer">
												<span class="LoginPasswordLabel LoginDetailsLabel" id="LoginPasswordLabel">Your password is</span>
												<span class="LoginPassword LoginDetailsValue" id="LoginPassword"><%= NewPass %></span>
											</div>

											<hr>

										</div>
									</div>

									<div class="col-md-12">
										<div class="Actions text-center" id="Actions">
											
											<button class="btn btn-success btn-lg" id="GoToSite" data-siteaddress='http://<%= request.form("li_1_description") %>.usebuild.co?FirstTime=1'>Take me there now!</button>

										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>
			
		</div>

		<div class="BuildFooter">
			<div class="FooterCallsToAction" style="display:none">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							
						</div>
					</div>
				</div>
			</div>
			<div class="FooterMenu" style="display:none">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							
						</div>
					</div>
				</div>
			</div>
			<div class="LegalFooter">
				<div class="container">
					<div class="row">
						<div class="LegalFooterCopyright col-sm-6" id="LegalFooterCopyright">
							<span>&copy; Build 2001-2015. All rights reserved.</span>
						</div>
						<div class="LegalFooterLinks col-sm-6" id="LegalFooterLinks">
							<a href="#" id="FooterLinkRefund">Refund Policy</a>
							<a href="#" id="FooterLinkTerms">Terms of Use</a>
							<a href="#" id="FooterLinkPrivacy">Privacy Policy</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="build-modals">
			<div id="build-menu-modal-container">
				<!-- Modal content gets imported here. -->
			</div>
		</div>

		<script type="text/javascript" src="../js/order.js"></script>
		<script type="text/javascript" src="../js/bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/jquery.validate.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="../js/build-modal.js" type="text/javascript"></script>

<!-- Google Analytics  --> 
 <script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)    [0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-49577301-1', 'auto');
 ga('send', 'pageview');
 </script>

	</body>

</html>