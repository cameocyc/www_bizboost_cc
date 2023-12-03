Function makeCredential(tbsData,pin)
    On Error Resume Next

    rCode = CredentialObj.MakeCredential(tbsData, pin, credential)
    //Msgbox(credential)
    //GetCertKey(1)
    if Err.number>0 then
        MakeCredential ="Fail,MakeCredential失敗,請確認是否已開啟Active X"
        Err.Clear
    else
        pf = "Fail,錯誤代碼:" & rCode & " "
        Select Case rCode
            Case 0
                MakeCredential = credential
            Case 162
                MakeCredential = pf & "憑證PIN碼錯誤，請進行HiCOS檢測"
            Case 25537
                MakeCredential = pf & "PIN碼驗證二次錯誤!!"
            Case 25538
                MakeCredential = pf & "PIN碼驗證一次錯誤!!"
            Case 27011
                MakeCredential = pf & "PIN碼已鎖死!!"
            Case 28692
                MakeCredential = pf & "憑證、讀卡機或卡片異常，請進行HiCOS檢測"
            Case 29443,33537
                MakeCredential = pf & "請確認讀卡機是否正常運作!!"
            Case 33540,33795,-637534158
                MakeCredential = pf & "憑證、讀卡機或卡片異常，請進行HiCOS檢測確認讀卡機與憑證是否正常，如正常請進行憑證註冊!!" & vbCrLf & "錯誤代碼:" & rCode & vbCrLf & "您可參考(帳號/憑證登入問題->憑證使用常見問題Q16)協助您排除問題。"
            Case -536838143
                MakeCredential = pf & "憑證、讀卡機或卡片異常，請確認PIN碼是否有誤或已被鎖卡，確認後請重新插拔卡片後測試登入。"
            Case -620686843
                MakeCredential = pf & "憑證、讀卡機或卡片異常，請重新插拔卡片後登入。"
            Case -620686844,-620686845
                MakeCredential = pf & "憑證已鎖卡，請洽詢所使用憑證的客服中心。"
            Case -620686846
                MakeCredential = pf & "PIN碼連續輸入錯誤第二次。"
            Case -620686847
                MakeCredential = pf & "PIN碼連續輸入錯誤第一次。"
            Case -637534202
                MakeCredential = pf & "請確認HiCos軟體是否正確安裝，如未安裝HiCOS，請參考憑證使用常見問題Q05。"
            Case Else
                MakeCredential = pf & "錯誤代碼:" & rCode
        End Select
        
    end if
End Function 
Function GetCertKey(keynum) 
    rcode = GetCertKeyObj.GetCert(keynum,GetCertKey) 
    MsgBox(GetCertKey)
End Function