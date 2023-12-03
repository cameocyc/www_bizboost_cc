﻿//API R1.0.0.53
//Version websock V1.3.4.103328(Win)、1.3.4.13(Mac)、1.3.4.3(Linux)
//21
"use strict";

function INObject()
{
    //console.log("check INObject");
    this.PstTrg=null;
    this.TbsPckg=null;
    this.RspDt=null;
    //this.WbSckVrsn="1.3.4.1015";
    this.WbSckVrsn="1.3.4.103328";
    this.PppFrmStyle="width=100,height=140,location=no,menubar=no,status=no,toolbar=no,scrollbars=no,resizable=yes";
    this.ISIE=false;
    this.GoOrBack="back";
    this.HTmOt=null;
}//function INObject()


//21
function ARevFun()
{
    this.FUN=null;
    this.Para=null;
    this.PopTout=120000;
    this.UrFUN=null;	
}//function ARevFun()

var InToken = null;
var Gbjct=null;
var GARevFun=null;
//22
function SendData(Target,OtTarget,Title,Style,RevFUN,UrRevFUN){
    var l_vRetData;
    var l_iRetCode;
    
    try{
        l_vRetData="";
        l_iRetCode=0;
        //alert("22 Gbjct.GoOrBack--"+Gbjct.GoOrBack);
        if (Gbjct.GoOrBack!="go") {	
            if (Gbjct.HTmOt!=null) {
                //alert("Gbjct.HTmOt");
                window.clearTimeout(Gbjct.HTmOt);
            }	
            if (Gbjct.PstTrg!=null && Gbjct.PstTrg.closed==false) {
                Gbjct.PstTrg.close();
                Gbjct.PstTrg =null;
            }//if (Gbjct.PstTrg!=null && Gbjct.PstTrg.closed==false)			
        }//if (Gbjct.GoOrBack!="go") 
        var MyAct=popInfo();
        if (CkBType()=="IE")
        {
            Gbjct.ISIE=true;
            Gbjct.PstTrg=window.open('','ChtPopupForm',Gbjct.PppFrmStyle);
            if (Gbjct.PstTrg!=null) {
                Gbjct.PstTrg.resizeTo(90,180);
                
                Gbjct.PstTrg.document.writeln("<div align='center'>");
                Gbjct.PstTrg.document.writeln(MyAct.outerHTML);
                Gbjct.PstTrg.document.writeln("</div>");
                Gbjct.TbsPckg=getInfo();
                var l_vSpan=document.getElementById("SendObject");
                if (l_vSpan==null) 
                {
                    l_vSpan.id="SendObject";
                    l_vSpan = document.createElement("span");
                }//if (l_vSpan==null)		
                l_vSpan.innerHTML = '<OBJECT id="http" width=1 height=1 style="LEFT: 1px; TOP: 1px" type="application/x-httpcomponent" VIEWASTEXT></OBJECT>';
                var http = document.getElementById("http");
                if (http.sendRequest!=null)
                {
                    http.url=Target;
                    http.actionMethod="POST";			
                    var code=http.sendRequest(postData(InToken.FUN));
                    if(code!=0) 
                    {
                        l_iRetCode=2200;
                        l_vRetData=rMsg(l_iRetCode,"(" + l_iRetCode +")");
                        l_iRetCode=code;
                        l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                        InToken.RetObj=JSON.parse(l_vRetData);
                    } else {
                        Gbjct.RspDt = http.responseText;    //add
                        l_vRetData = RevFUN(UrRevFUN);
                        InToken.RspDt = JSON.parse(Gbjct.RspDt);
                        InToken.RetObj=JSON.parse(l_vRetData);
                    }//if(code!=0)
                }  else {
                    l_iRetCode=2202;
                    l_vRetData=rMsg(l_iRetCode,"(" + l_iRetCode +")");
                    l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                    InToken.RetObj=JSON.parse(l_vRetData);				
                }//if (http.sendRequest==true)			
            } else {
                l_iRetCode=2201;
                l_vRetData=rMsg(l_iRetCode,"(1)");
                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData + '"}';
                InToken.RetObj=JSON.parse(l_vRetData);			
            }//if (Gbjct.PstTrg!=null && Gbjct.PstTrg.closed==false)
            
            if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)
            {		
                if (Gbjct.HTmOt!=null) {
                    //alert("Gbjct.HTmOt");
                    window.clearTimeout(Gbjct.HTmOt);
                }			
                Gbjct.PstTrg.close();
                Gbjct.PstTrg =null;
            }//if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)
            if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
        }
        else
        {
            console.log('TbsPackg');
            Gbjct.PppFrmStyle="width=200,height=200,left=100,top=30";
            Gbjct.TbsPckg=getInfo();
            Gbjct.PstTrg=window.open(OtTarget,"ChtPopupForm",Style);
            if (Gbjct.PstTrg!=null)
            {
                if (CkBType()!="Edge") Gbjct.PstTrg.resizeTo(230,250);
                //*
                var l_vTimeO;
                if (InToken.FUN=="CheckEnvir") {
                    l_vTimeO=20000;
                } else {
                    l_vTimeO=GARevFun.PopTout+50000;						
                }//if (InToken.FUN=="CheckEnvir")
                    
                Gbjct.HTmOt=window.setTimeout(function(){
                    var l_iRetCode;
                    var l_vRetData;
                    if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed) {
                        try 
                        {
                            if (Gbjct.HTmOt!=null) {
                                window.clearTimeout(Gbjct.HTmOt);
                            }					
                            Gbjct.PstTrg.close();
                            Gbjct.PstTrg =null;
                            if (Gbjct.RspDt==null) {
                                l_iRetCode=2202;
                                l_vRetData=rMsg(l_iRetCode,"");
                                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                                InToken.RetObj=JSON.parse(l_vRetData);
                                if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();					
                            }//if (Gbjct.RspDt==null)									
                        }  catch(e) {
                            l_iRetCode=2204;
                            l_vRetData='{"RCode":"' + "l_iRetCode" +'","RMsg":"'+ e.message +'"}';
                        }//try				
                    }//if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)				
                    },l_vTimeO);//*/
            } else {
                l_iRetCode=2201;
                l_vRetData=rMsg(l_iRetCode,"(2)");
                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData + '"}';
                InToken.RetObj=JSON.parse(l_vRetData);
                if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();			
            }//if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed))
        }//if (CkBType()=="IE")		
    } catch (e) {
        //alert("js 159 catch");
        l_iRetCode=2201;
        l_vRetData=rMsg(l_iRetCode,"(3)");
        l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ e.message + '"}';
        InToken.RetObj=JSON.parse(l_vRetData);
        if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();	
    }//try
}//function SendData(Target,OtTarget,Title,Style,Tken)

//23
function receiveMessage(event)
{
    var l_iRetCode=0;
    var l_vRetData;
    //console.log('ChtICTokenLite', event)
    Gbjct.RspDt=null;
    l_vRetData = "";
    console.log("event", Gbjct)
    Gbjct.GoOrBack="back";
    try {
        if (Gbjct.PstTrg!=null)
        {
            if (event.origin!="http://localhost:61161") {
                l_iRetCode=2300;
            } else {	
                var ret = JSON.parse(event.data);
                console.log("receiveMessage",ret)
                if (ret.func != null) {
                    switch(ret.func) {
                        case "getTbs":
                        case "CMCAtn":
                            Gbjct.GoOrBack="go";
                            Gbjct.PstTrg.postMessage(Gbjct.TbsPckg,"*");					
                            break;					
                        case "sign":
                        case "umakeSig":
                            Gbjct.RspDt=event.data;
                            l_vRetData=StSgn(GARevFun.UrFUN);
                            break;
                        case "changeUserPINCode":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UsrChgPn(GARevFun.UrFUN);
                            break;					
                        case "pkcs11info":
                            Gbjct.RspDt=event.data;						
                            switch(GARevFun.FUN)
                            {
                                case "gtCrt":
                                    l_vRetData=gtCrt(GARevFun.UrFUN);
                                    break;
                                case "PrsCrt":
                                    l_vRetData=PrsCrt(GARevFun.UrFUN);
                                    break;								
                                default:
                                    l_vRetData=stDa(GARevFun.UrFUN);
                                    break;
                            }//switch(GARevFun.FUN)
                            break;
                        case "bulidResetUserPINRequest":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrGtRstInf(GARevFun.UrFUN);
                            break;
                        case "resetUserPIN":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrRstInfo(GARevFun.UrFUN);
                            break;
                        case "bulidUnblockCardRequest":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrGtUBlkInfo(GARevFun.UrFUN);						
                            break;
                        case "unblockCard":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrRstUBlkInfo(GARevFun.UrFUN);						
                            break;
                        case "buildOpenCardValidateUserRequest":
                        case "buildOpenCardGetUserPINRequest":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrGtPnCrdInfo(GARevFun.UrFUN);						
                            break;					
                        case "openCard":
                            Gbjct.RspDt=event.data;
                            l_vRetData=UrPnCrdInfo(GARevFun.UrFUN);						
                            break;							
                        default:
                            if (ret.ret_code==1979711502)
                            {
                                l_iRetCode=2304;
                                l_vRetData=rMsg(l_iRetCode,"("+ret.func+":"+ret.ret_code+"--"+l_iRetCode+")");
                                l_iRetCode=ret.ret_code;
                                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                            } else {
                                l_iRetCode=2301;
                                l_vRetData=rMsg(l_iRetCode,"("+ret.func+":"+ret.ret_code+"--"+l_iRetCode+")");
                                if (ret.ret_code!=null) {
                                    l_iRetCode=ret.ret_code;
                                }//if (ret.ret_code!=null)
                                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                            }//if (ret.ret_code==1979711502)
                            break;
                    }//switch(ret.func)
                }else{
                    var l_vTemp;
                    l_iRetCode=2302;
                    if (ret.ret_code!=null) {
                        l_vTemp="(Error:"+ret.ret_code+" Msg:"+ret.message+"--"+l_iRetCode+")";
                    } else {
                        l_vTemp="";
                    }//if (ret.ret_code!=null)					
                    l_vRetData=rMsg(l_iRetCode,l_vTemp);
                    l_iRetCode=ret.ret_code;
                    l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
                }//if (ret.func != null)	
            }//if (event.origin!="http://localhost:61161")		
        } else {
            l_iRetCode=2303;
            l_vRetData=rMsg(l_iRetCode,"Popup Connection closed!!Retry!!");
            l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
        }//if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)

        //alert("Gbjct.GoOrBack"+Gbjct.GoOrBack);
        if (Gbjct.GoOrBack=="back") 
        {
            try
            {
                if (Gbjct.HTmOt!=null) {
                    window.clearTimeout(Gbjct.HTmOt);
                }			
                if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)
                {
                    //alert("back not closed");
                    Gbjct.PstTrg.close();
                    Gbjct.PstTrg =null;				
                }//if (Gbjct.PstTrg!=null && !Gbjct.PstTrg.closed)				
            } catch(e) {
                l_iRetCode=2303;
                l_vRetData=rMsg(l_iRetCode,e.message);
                l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';				
            }//try				
        }//if (l_vGoOrBack=="back")
    }catch(e){
        l_iRetCode=2303;
        l_vRetData=rMsg(l_iRetCode,e.message);
        l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRetData +'"}';
    }//try		
    
    if (l_vRetData!="") 
    {
        InToken.RetObj=JSON.parse(l_vRetData);		
        if (GARevFun.UrFUN && typeof(GARevFun.UrFUN) === "function") GARevFun.UrFUN();
    }//if (l_iRetCode!=0)
}//function receiveMessage(event)

//24
if (window.addEventListener) window.addEventListener("message", receiveMessage, false);

//25
function postData(FUN)
{
    var RetData;
    
    RetData="";
    if (FUN != null) {
        switch(FUN) {
            case "unblockCard":
            case "MakeSignature":
            case "changeUserPINCode":
            case "resetUserPIN":
            case "openCard":
            case "bulidUnblockCardRequest":
            case "buildOpenCardValidateUserRequest":
            case "buildOpenCardGetUserPINRequest":
            case "bulidResetUserPINRequest":
                RetData="tbsPackage="+Gbjct.TbsPckg;			
                break;			
            default:
                break;
        }//switch(FUN)
    }//if (ret.func != null)
    
    return RetData;
}//function postData(FUN)

//26
function checkEnv(UrRevFUN) {	
    console.log('start checkEnv');
    InToken.FUN="CheckEnvir";
    GARevFun.FUN="stDa";
    GARevFun.Para="";	
    GARevFun.UrFUN=UrRevFUN;
    
    SendData("http://localhost:61161/pkcs11info","http://localhost:61161/ChtPopupForm","IC卡讀取中",Gbjct.PppFrmStyle,stDa,UrRevFUN);	
}//function checkEnv()

//27 retrun
//object.RCode
//object.RMsg
function checkCondition()
{
    var l_vRMsg;
    var l_vRetCode;
    var l_vRetData;
    
    l_vRMsg="";
    l_vRetCode=0;
    if (InToken.ActvSltID[0]==-1) {
        l_vRetCode=2700;
        l_vRMsg=rMsg(l_vRetCode,"");
    }//if (this.ActvSltID[0]==-1)
    
    if (InToken.ActvSltID.length==0) {
        l_vRetCode=2701;
        l_vRMsg=rMsg(l_vRetCode,"");
    }//if (this.ActvSltID[0]==-1)	
    
    if (l_vRetCode==0) {
        if ((InToken.ActvSltID[0]<InToken.SlotID.length)&&(InToken.ActvSltID[0]>=0)) {
        } else {
            l_vRetCode=2702;
        }//if (this.ActvSltID<=this.SlotID.length)
    }//if (l_vRetCode.RCode==0)
        
    l_vRetData='{"RCode":"' + l_vRetCode +'","RMsg":"'+ l_vRMsg +'"}';
    
    return JSON.parse(l_vRetData);
}//function checkCondition()

//28
function rMsg(RCode,ExMsg)
{
    var l_vRetMsg;
    
    l_vRetMsg="";
    switch(RCode)
    {
        case 1000:
            l_vRetMsg="尚未初始化Token!" + ExMsg;
            break;		
        case 2200:
            l_vRetMsg="伺服器回傳錯誤!" + ExMsg;
            break;
        case 2202:
            l_vRetMsg="元件尚未安裝或啟動，請安裝或啟動相關元件!" + ExMsg;
            break;			
        case 2201:
            l_vRetMsg="開啟等待視窗時發生錯誤!" + ExMsg;
            break;
        case 2204://20161007
            l_vRetMsg="等待視窗已關閉發生錯誤!" + ExMsg;
            break;		
        case 2205://20161007
            l_vRetMsg="連線逾時發生錯誤!" + ExMsg;
            break;		
        case 2300:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 2301:
            l_vRetMsg="伺服器回傳錯誤訊息!"+ExMsg;
            break;
        case 2302:
            l_vRetMsg="伺服器回傳錯誤無法識別!"+ExMsg;
            break;
        case 2303:
            l_vRetMsg="執行發生錯誤回傳錯誤訊息!"+ExMsg;
            break;
        case 2304:
            l_vRetMsg="回傳資料錯誤找不到讀卡機或未啟動Token!"+ExMsg;
            break;			
        case 2700:
            l_vRetMsg="找不到讀卡機!" + ExMsg;
            break;
        case 2701:
            l_vRetMsg="找不任何卡片或讀卡機!"+ExMsg;
            break;
        case 2702:
            l_vRetMsg="找不到指定的卡片!" + ExMsg;
            break;
        case 3100:
            l_vRetMsg="伺服器未回傳任何資料!" + ExMsg;
            break;
        case 3101:
            l_vRetMsg="非合法授權連接的位址!" + ExMsg;
            break;
        case 3102:
            l_vRetMsg="請安裝新版本元件，版本至少需為：V_" + ExMsg;
            break;
        case 3103:
            l_vRetMsg="找不到指定的卡片或未安裝讀卡機!" + ExMsg;
            break			
        case 3104:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;
        case 3200:
            l_vRetMsg="輸入參數錯誤!"+ExMsg;
            break;
        case 3201:
            l_vRetMsg="伺服器未回傳任何資料!"+ExMsg;
            break;
        case 3202:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;		
        case 3203:
            l_vRetMsg="找不到指定的讀卡機"+ExMsg;
            break;	
        case 3204:
            l_vRetMsg="取得憑證失敗，讀不到憑證!"+ExMsg;
            break;				
        case 3205:
            l_vRetMsg="伺服器發生錯誤!"+ExMsg;
            break;
        case 3206://20161007
            l_vRetMsg="找不到讀卡機!"+ExMsg;
            break;			
        case 3300:
            l_vRetMsg="輸入參數錯誤!"+ExMsg;
            break;
        case 3301:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 3302:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;
        case 3400:
            l_vRetMsg="輸入參數錯誤!"+ExMsg;
            break;
        case 3401:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 3402:
        case 3403:
        case 3404:
        case 3405:		
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 3500:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 3501:
            l_vRetMsg="簽章發生錯誤，卡片不正確!"+ExMsg;
            break;
        case 3502:
            l_vRetMsg="伺服器發生錯誤!"+ExMsg;
            break;
        case 3600:
            l_vRetMsg="輸入參數錯誤!"+ExMsg;
            break;
        case 3601:
            l_vRetMsg="輸入參數長度錯誤!"+ExMsg;
            break;
        case 3602:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 3603:		
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 3700:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 3701:
            l_vRetMsg="修改PIN碼發生錯誤，卡片不正確!"+ExMsg;
            break;
        case 3702:
            l_vRetMsg="伺服器發生錯誤!"+ExMsg;
            break;
        case 3800:
            l_vRetMsg="輸入參數長度錯誤!"+ExMsg;
            break;
        case 3801:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 3802:		
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;
        case 3900:
            l_vRetMsg="輸入參數長度錯誤!"+ExMsg;
            break;
        case 3901:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 3902:
            l_vRetMsg="解析憑證發生錯誤，卡片不正確!"+ExMsg;
            break;
        case 3903:
            l_vRetMsg="伺服器發生錯誤!"+ExMsg;
            break;
        case 3904://20161007
            l_vRetMsg="找不到讀卡機!"+ExMsg;
            break;			
        case 4000:
        case 4001:
        case 4002:
        case 4004:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 4003:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 4100:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 4101:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;
        case 4300:
        case 4301:
        case 4302:
        case 4304:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 4303:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 4400:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 4401:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;
        case 4500:
        case 4501:
        case 4502:
        case 4504:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 4503:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 4600:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 4601:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;
        case 4700:
        case 4701:
        case 4702:
        case 4703:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 4704:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;	
        case 4800:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 4801:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;
        case 4900:
        case 4901:
        case 4902:
        case 4903:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 4904:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;			
        case 5000:
            l_vRetMsg="已初始化IC卡元件!"+ExMsg;
            break;
        case 5200:
            l_vRetMsg="清空已被IC卡元件!"+ExMsg;
            break;
        case 5500:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 5800:
            l_vRetMsg="設定的ID不存在!"+ExMsg;
            break;
        case 9000:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 9001:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;		
        case 9100:
        case 9101:
        case 9102:
        case 9103:
            l_vRetMsg="未輸入參數!"+ExMsg;
            break;			
        case 9104:
            l_vRetMsg="尚未啟用元件!"+ExMsg;
            break;
        case 9200:
            l_vRetMsg="非合法授權連接的位址!"+ExMsg;
            break;
        case 9201:
            l_vRetMsg="伺服器回傳錯誤!"+ExMsg;
            break;			
        default:
            l_vRetMsg=ExMsg;
            break;			
    }//swirch(RCode)

    return l_vRetMsg;
}//function returnMsg(RCode,ExMsg)

//29
function getInfo(){
    var PreData = {};
    PreData["tbs"]=InToken.TBS;
    PreData["tbsEncoding"]=InToken.TbsEncoding;
    PreData["hashAlgorithm"]=InToken.HashAlgorithm;
    PreData["pin"]=InToken.PIN;
    PreData["func"]=InToken.FUN;
    PreData["signatureType"]=InToken.SType;	
    if (typeof InToken.slots === 'undefined') 
    {
        PreData["readername"]="";
        PreData["slotDescription"]="";
    } else {
        PreData["readername"]=InToken.getSlotName(InToken.ActvSltID[0]);
        PreData["slotDescription"]=InToken.getSlotName(InToken.ActvSltID[0]);	
    }//if (typeof InToken.slots[0] == 'undefined' && InToken.slots[0] == null)
    PreData["currentPIN"]=InToken.OldPIN;
    PreData["newpin"]=InToken.NewPIN;
    PreData["sid"]=InToken.UID;
    PreData["caname"]=InToken.CrdSys;
    PreData["msresponse"]=InToken.KpMsg;
    PreData["cmsresponse"]=InToken.KpMsg;
    PreData["cardid"]=InToken.SmrtCrdID[InToken.ActvSltID[0]];
    var ReData = JSON.stringify(PreData ).replace(/\+/g,"%2B");
    
    return ReData;
}//function getInfo()

//30
function popInfo() {
    var objInfo = new Image();
    objInfo.src = 'data:image/gif;base64,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';
    
    return objInfo;
}//function popInfo()

//31
function stDa(UrRevFUN) {
    console.log("start stDa");
    var l_iRetCode=0;
    var l_iSlotCounter=0;
    var l_vRetData;
    var l_vRMsg;

    
    l_vRetData="";
    l_vRMsg="";	

    if (Gbjct.RspDt==null) {
        l_iRetCode=3100;
        l_vRMsg=rMsg(l_iRetCode,"");
    } else {
        //alert("Gbjct.RspDt："+Gbjct.RspDt);
        var ret = JSON.parse(Gbjct.RspDt);
        console.log("stDA_ret", ret)
        if(ret.ret_code==0x76000031)
        {
            l_iRetCode=3101;
            l_vRMsg=rMsg(l_iRetCode,"("+l_iRetCode+")");
            l_iRetCode=ret.ret_code;
        } else {
            if (ret.ret_code==0)
            {
                var l_vTemp;
                l_vTemp=Gbjct.WbSckVrsn;
                //alert("ret.serverVersion："+ret.serverVersion)
                if (l_vTemp.localeCompare(ret.serverVersion)>0) {
                    l_iRetCode=3102;
                    l_vRMsg=rMsg(l_iRetCode,l_vTemp);				
                } else {
                    var slots;
                    //if (typeof ret.slots !== 'undefined')
                    if (typeof ret.slots[0] !== 'undefined' && ret.slots[0] !== null) 
                    {
                        slots = ret.slots;
                        for(var index in slots)
                        { 
                            InToken.SlotID[index]=slots[index].slotDescription;
                            InToken.SlotName[slots[index].slotDescription]=index;
                            if (slots[index].token!=null) 
                            {
                                InToken.SmrtCrdID[index]=slots[index].token.serialNumber;
                                InToken.ActvSltID[0]=index;
                                l_iSlotCounter++;
                            } else  {
                                InToken.SmrtCrdID[index]="";
                            }//if (slots[index].token.serialNumber!="") 
                        }//for(var index in slots)
                            
                        if (l_iSlotCounter==0) {
                            l_iRetCode=3103;
                            l_vRMsg=rMsg(l_iRetCode,"");
                        } else {
                            if (l_iSlotCounter>1) {
                                InToken.ActvSltID[0]=-1;
                            }//if (l_iSlotCounter>1)					
                        }//if (l_iSlotCounter>1)
                    } else {
                        l_iRetCode=3103;
                        l_vRMsg=rMsg(l_iRetCode,"(Location 2)");					
                    }//if (slots.length!=0)						
                }//if (l_vTemp.localeCompare(ret.serverVersion)>0)
            } else {
                l_iRetCode=3104;
                l_vRMsg=rMsg(l_iRetCode,ret.message+"("+ret.ret_code+"--"+l_iRetCode+")");
                l_iRetCode=ret.ret_code;
            }//if (ret.ret_code==0)	
        }//if(ret.ret_code==0x76000031)		
    }//if (Gbjct.RspDt==null)
        
    l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRMsg +'"}';
    //InToken.RetObj=JSON.parse(l_vRetData);	
    //if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    
    //return JSON.parse(l_vRetData);
    return l_vRetData;
}//function stDa(Gbjct,InToken

//32
function gtCrt(UrRevFUN) {
    var l_iRetCode;
    var l_vRMsg;
    var l_vExp;
    var l_vRetData;
    var l_B64Cert;	

    
    l_vRMsg="";
    l_B64Cert="";
    l_iRetCode=0;
    
    switch(GARevFun.Para)
    {
        case 1:
            l_vExp=/digitalSignature/i;
            break;
        case 2:
            l_vExp=/keyEncipherment|dataEncipherment/i;
            break;		
        default:
            l_iRetCode=3200;
            l_vRMsg=rMsg(l_iRetCode,"");
            break;
    }//switch(index)
    
    if (l_iRetCode==0) {
        if (Gbjct.RspDt==null) {
            l_iRetCode=3201;
            l_vRMsg=rMsg(l_iRetCode,"");
        } else {
            var ret=JSON.parse(Gbjct.RspDt);
            if(ret.ret_code==0x76000031)
            {
                l_iRetCode=3202;
                l_vRMsg=rMsg(l_iRetCode,l_iRetCode);
                l_iRetCode=ret.ret_code;
            } else {
                if (ret.ret_code==0) {
                    var slots;
                    //if (typeof ret.slots !== 'undefined')
                    if (typeof ret.slots[0] !== 'undefined' && ret.slots[0] !== null) 
                    {
                        slots = ret.slots;
                        for (var index in slots) { 
                            if(slots[index].slotDescription == InToken.SlotID[InToken.ActvSltID[0]])
                            {													
                                if (InToken.SmrtCrdID[InToken.ActvSltID[0]]==slots[index].token.serialNumber) {
                                    var certs=slots[index].token.certs;	
                                    for(var indexCert in certs){								
                                        if (l_vExp.test(certs[indexCert].usage)==true) {
                                            l_B64Cert=certs[indexCert].certb64;
                                        }//if (l_vExp.test(certs[indexCert].usage)==true)
                                    }//for(var indexCert in certs)
                                } else {
                                    l_iRetCode=3203;
                                    l_vRMsg=rMsg(l_iRetCode,"");					
                                }//if (InToken.SmrtCrdID[InToken.ActvSltID[0]]==certs.serialNumber)										
                            }//if(slots[index].slotDescription == InToken.SlotID[InToken.getSlotName(InToken.ActvSltID)])
                        }//for (var index in slots)
                        if (l_iRetCode==0) {
                            if (l_B64Cert=="") {
                                l_iRetCode=3204;
                                l_vRMsg=rMsg(l_iRetCode,"");
                            }//if (l_B64Cert="")
                        }//if (l_iRetCode==0)						
                    } else {
                        l_iRetCode=3206;
                        l_vRMsg=rMsg(l_iRetCode,"");						
                    }//if (slots.length!=0)				
                } else {
                    l_iRetCode=3205;
                    l_vRMsg=rMsg(l_iRetCode,ret.message+"("+ret.ret_code+"--"+l_iRetCode+")");
                    l_iRetCode=ret.ret_code;
                }//if (ret.ret_code==0)
            }//if(ret.ret_code==0x76000031)		
        }//if (Gbjct.RspDt==null)	
    }//if (l_iRetCode==0)

    l_vRetData='{"RCode":"' + l_iRetCode + '", "Certificate":"' + l_B64Cert +'","RMsg":"'+ l_vRMsg +'"}';
    //InToken.RetObj=JSON.parse(l_vRetData);
    
    //if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
        
    //return JSON.parse(l_vRetData);
    return l_vRetData;
}//function gtCrt() 

//33
function getCert(index,UrRevFUN) {
    var l_iRetCode;
    var l_vRMsg;
    var l_vExp;
    var l_vRetData;
    var l_B64Cert;	

    
    l_vRMsg="";
    l_B64Cert="";
    l_iRetCode=0;	
    InToken.FUN="GetUserCert";
    GARevFun.FUN="gtCrt";
    GARevFun.Para=index;
    //GARevFun.PopTout=900000;
    GARevFun.UrFUN=UrRevFUN;	
    
    switch(GARevFun.Para)
    {
        case 1:
            l_vExp=/digitalSignature/i;
            break;
        case 2:
            l_vExp=/keyEncipherment|dataEncipherment/i;
            break;		
        default:
            l_iRetCode=3300;
            l_vRMsg=rMsg(l_iRetCode,"");
            break;
    }//switch(index)
    
    if (UrRevFUN==null) 
    {
        l_iRetCode=3302;
        l_vRMsg=rMsg(l_iRetCode,"");			
        alert("輸入參數錯誤或不足");		
    }//if (UrRevFUN==null) 
            
    if (checkGoodDay()==false) {
        l_iRetCode=3301;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (checkGoodDay()==false)
        
    if (l_iRetCode==0) {
        l_vRetData=checkCondition(InToken);
        if (l_vRetData.RCode!=0) {
            l_iRetCode=l_vRetData.RCode;
            l_vRMsg=rMsg(l_iRetCode,"");		
        }//if (l_vRetData.RCode!=0)
    }//if (l_iRetCode==0)
    
    if (l_iRetCode==0) {	
        SendData("http://localhost:61161/pkcs11info?withcert=true","http://localhost:61161/ChtPopupForm","IC卡讀取中",Gbjct.PppFrmStyle,gtCrt,UrRevFUN);
    } else {
        l_vRetData='{"RCode":"' + l_iRetCode + '", "Certificate":"' + l_B64Cert +'","RMsg":"'+ l_vRMsg +'"}';
        InToken.RetObj=JSON.parse(l_vRetData);
        if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    }//if (l_iRetCode==0)
}//function getCert()

//34
function UserSign(B64ToBeSign,UserPIN,HashAlg,UrRevFUN,SignType) {
    var l_iRetCode=0;
    var l_B64Signature="";
    var l_vRMsg;
    var l_vRetData;
    
    InToken.FUN="MakeSignature";
    InToken.PIN=UserPIN;
    InToken.TBS = B64ToBeSign;
    GARevFun.FUN="StSgn";
    GARevFun.Para=HashAlg.toUpperCase();
    //GARevFun.PopTout=900000;
    GARevFun.UrFUN=UrRevFUN;
    
    switch(GARevFun.Para)
    {
        case "SHA256":
            InToken.HashAlgorithm="SHA256";
            break;
        case "SHA1":
            InToken.HashAlgorithm="SHA1";
            break;		
        default:
            l_iRetCode=3400;
            l_vRMsg=rMsg(l_iRetCode,"");
            break;
    }//switch(index)

    if (B64ToBeSign==null) 
    {
        l_iRetCode=3402;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (B64ToBeSign==null) 
        
    if (UserPIN==null) 
    {
        l_iRetCode=3403;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (UserPIN==null) 
        
    if (HashAlg==null) 
    {
        l_iRetCode=3404;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (HashAlg==null) 
        
    if (UrRevFUN==null) 
    {
        l_iRetCode=3405;
        l_vRMsg=rMsg(l_iRetCode,"");			
        alert("輸入參數錯誤或不足");		
    }//if (UrRevFUN==null) 		
        
    if (checkGoodDay()==false) {
        l_iRetCode=3401;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (checkGoodDay()==false)
        
    if (l_iRetCode==0) {
        if (SignType.localeCompare("Cryp")==0) {
            SendData("http://localhost:61161/umakeSig","http://localhost:61161/ChtPopupForm","IC卡讀取中",Gbjct.PppFrmStyle,StSgn,UrRevFUN);			
        } else {
            SendData("http://localhost:61161/sign","http://localhost:61161/ChtPopupForm","IC卡讀取中",Gbjct.PppFrmStyle,StSgn,UrRevFUN);				
        }//if (SignType.localeCompare("Cryp")==0)
    } else {
        l_vRetData='{"RCode":"' + l_iRetCode + '", "B64Signature":"' + l_B64Signature +'","RMsg":"'+ l_vRMsg +'"}';
        InToken.RetObj=JSON.parse(l_vRetData);
        if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    }//if (l_iRetCode==0)
}//TokenSign(B64ToBeSign,UserPIN,HashAlg,RevFun)

//35
function StSgn(UrRevFUN) {
    var l_iRetCode=0;
    var l_B64Signature="";
    var l_vRMsg;
    var l_vRetData;

    var ret=JSON.parse(Gbjct.RspDt);
    if(ret.ret_code==0x76000031)
    {
        l_iRetCode=3500;
        l_vRMsg=rMsg(l_iRetCode,"("+l_iRetCode+")");
        l_iRetCode=ret.ret_code;
    } else {
        if (ret.ret_code==0) {
            if (InToken.SmrtCrdID[InToken.ActvSltID[0]]==ret.cardSN) {
                l_B64Signature=ret.signature;
            } else {
                l_iRetCode=3501;
                l_vRMsg=rMsg(l_iRetCode,"");					
            }//if (InToken.SmrtCrdID[InToken.ActvSltID[0]]==ret.cardSN)
        } else {
            l_iRetCode=3502;
            l_vRMsg=rMsg(l_iRetCode,ret.message+"("+ret.ret_code+"--"+l_iRetCode+")");
            l_iRetCode=ret.ret_code;
        }//if (ret.ret_code==0)
    }//if(ret.ret_code==0x76000031)

    InToken.OldPIN="";
    InToken.NewPIN="";
    
    l_vRetData='{"RCode":"' + l_iRetCode + '", "B64Signature":"' + l_B64Signature +'","RMsg":"'+ l_vRMsg +'"}';
    //InToken.RetObj=JSON.parse(l_vRetData);
    
    //if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    //return JSON.parse(l_vRetData)
    return l_vRetData;
}//ICToken.prototype.sign = function (B64ToBeSign,UserPIN,HashAlg)

//36
function UChngPin(NewPIN,OldPIN,UrRevFUN)	
{	
    var l_iRetCode=0;
    var l_B64Signature="";
    var l_vTemp;
    var l_vRMsg;
    var l_vRetData;
    
    l_vRMsg="";	
    InToken.FUN="changeUserPINCode";
    GARevFun.FUN="UsrChgPn";
    GARevFun.Para="";
    //GARevFun.PopTout=900000;
    GARevFun.UrFUN=UrRevFUN;		
    if ((NewPIN=="")||(OldPIN=="")||(NewPIN==null)||(OldPIN==null))
    {
        l_iRetCode=3600;
        l_vRMsg=rMsg(l_iRetCode,"");
    }//if ((NewPIN=="")||(OldPIN=="")||NewPIN==null)||(OldPIN==null))

    if (UrRevFUN==null) 
    {
        l_iRetCode=3603;
        l_vRMsg=rMsg(l_iRetCode,"");			
        alert("輸入參數錯誤或不足");		
    }//if (UrRevFUN==null) 	
        
    if (checkGoodDay()==false) {
        l_iRetCode=3602;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (checkGoodDay()==false)
        
    if (l_iRetCode==0)
    {
        if ((NewPIN.length>8)||(OldPIN.length>8))
        {
            l_iRetCode=3601;
            l_vRMsg=rMsg(l_iRetCode,"");		
        }//if ((NewPIN.length>8)||(OldPIN.length>8))
    }//if (l_iRetCode==0)
    
    if (l_iRetCode==0) {
        InToken.OldPIN=OldPIN;
        InToken.NewPIN=NewPIN;
        SendData("http://localhost:61161/CardManagement/sendCardCommand","http://localhost:61161/ChtPopupForm",
                    "處理中", Gbjct.PppFrmStyle,UsrChgPn,UrRevFUN);
    } else {
        l_vRetData='{"RCode":"' + l_iRetCode + '","RMsg":"'+ l_vRMsg +'"}';
        InToken.RetObj=JSON.parse(l_vRetData);
        if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    }//if (l_iRetCode==0)	
}//ICToken.prototype.changePIN = function (NewPIN,OldPIN)

//37
function UsrChgPn(UrRevFUN)
{
    var l_vRetData;
    var l_iRetCode;
    var l_vRMsg;
    
    var ret=JSON.parse(Gbjct.RspDt);
    if(ret.ret_code==0x76000031)
    {
        l_iRetCode=3700;
        l_vRMsg=rMsg(l_iRetCode,"("+l_iRetCode+")");
        l_iRetCode=ret.ret_code;
    } else {
        if (ret.ret_code==0) {
            l_iRetCode=0;
        } else {
            l_iRetCode=3702;
            l_vRMsg=rMsg(l_iRetCode,ret.message+"("+ret.ret_code+"--"+l_iRetCode+")");
            l_iRetCode=ret.ret_code;
        }//if (ret.ret_code==0)
    }//if(ret.ret_code==0x76000031)
        
    InToken.OldPIN="";
    InToken.NewPIN="";
    
    l_vRetData='{"RCode":"' + l_iRetCode + '","RMsg":"'+ l_vRMsg +'"}';
    //InToken.RetObj=JSON.parse(l_vRetData);
    //if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    return l_vRetData;
}//function UsrChgPn(UrRevFUN)

//38
function UsrPrsCrt(index,UrRevFUN)
{
    var l_iRetCode=0;
    var l_CertInfo="";
    var l_vExp;
    var l_vRetData;
    var l_vTemp;
    var l_vRMsg;
    
    l_vRMsg="";
    InToken.FUN="GetUserCert";
    GARevFun.FUN="PrsCrt";
    GARevFun.Para=index;
    //GARevFun.PopTout=900000;
    GARevFun.UrFUN=UrRevFUN;	
    
    switch(index)
    {
        case 1:
            l_vExp=/digitalSignature/i;
            break;
        case 2:
            l_vExp=/keyEncipherment|dataEncipherment/i;
            break;		
        default:
            l_iRetCode=3800;
            l_vRMsg=rMsg(l_iRetCode,"");
            break;
    }//switch(index)

    if (UrRevFUN==null) 
    {
        l_iRetCode=3802;
        l_vRMsg=rMsg(l_iRetCode,"");			
        alert("輸入參數錯誤或不足");		
    }//if (UrRevFUN==null)
        
    if (checkGoodDay()==false) {
        l_iRetCode=3801;
        l_vRMsg=rMsg(l_iRetCode,"");		
    }//if (checkGoodDay()==false)
        
    if (l_iRetCode==0) {
        SendData("http://localhost:61161/pkcs11info?withcert=true","http://localhost:61161/ChtPopupForm"
                ,"IC卡讀取中",Gbjct.PppFrmStyle,PrsCrt,UrRevFUN);
    } else {
        l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRMsg + '"}';
        InToken.RetObj=JSON.parse(l_vRetData);
        if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    }//if (l_iRetCode==0)
}//function UsrPrsCrt(index,UrRevFUN)

//39
function PrsCrt(UrRevFUN)
{
    var l_vExp;
    var l_iRetCode;
    var l_CertInfo;
    var l_vRMsg;
    var l_vRetData;
    
    
    l_iRetCode=0;	
    l_CertInfo=null;
    l_vRMsg="";
    switch(GARevFun.Para)
    {
        case 1:
            l_vExp=/digitalSignature/i;
            break;
        case 2:
            l_vExp=/keyEncipherment|dataEncipherment/i;
            break;		
        default:
            l_iRetCode=3900;
            l_vRMsg=rMsg(l_iRetCode,"");
            break;
    }//switch(GARevFun.Para)	
    
    if (l_iRetCode==0) {
        var ret=JSON.parse(Gbjct.RspDt);
        if(ret.ret_code==0x76000031)
        {
            l_iRetCode=3901;
            l_vRMsg=rMsg(l_iRetCode,"("+l_iRetCode+")");
            l_iRetCode=ret.ret_code;
        } else {
            if (ret.ret_code==0) {
                var slots;
                //if (typeof ret.slots !== 'undefined')
                if (typeof ret.slots[0] !== 'undefined' && ret.slots[0] !== null) 
                {
                    slots = ret.slots;
                    for (var index in slots) { 
                        if(slots[index].slotDescription == InToken.SlotID[InToken.ActvSltID[0]])
                        {													
                            if (InToken.SmrtCrdID[InToken.ActvSltID[0]]==slots[index].token.serialNumber) {
                                var certs=slots[index].token.certs;	
                                for(var indexCert in certs){								
                                    if (l_vExp.test(certs[indexCert].usage)==true) {
                                        var notAfter=new Date(certs[indexCert].notAfterT*1000);
                                        var notBefore=new Date(certs[indexCert].notBeforeT*1000);
                                        l_CertInfo= '"NotAfterYear":"' + notAfter.getFullYear() +'","NotAfterMonth":"'+(notAfter.getMonth()+1)+'","NotAfterDate":"'+notAfter.getDate()
                                                    +'","NotBeforeYear":"' + notBefore.getFullYear() +'","NotBeforeMonth":"'+(notBefore.getMonth()+1)+'","NotBeforeDate":"'+notBefore.getDate()
                                                    +'","Subject":"' +certs[indexCert].subjectDN +'","CertSN":"'+certs[indexCert].sn
                                                    +'","IssuerDN":"'+certs[indexCert].issuerDN+'","KeyUsage":"'+certs[indexCert].usage+'"';
                                    }//if (l_vExp.test(certs[indexCert].usage)==true)
                                }//for(var indexCert in certs)
                            } else {
                                l_iRetCode=3902;
                                l_vRMsg=rMsg(l_iRetCode,"");					
                            }//if (this.SmrtCrdID[this.ActvSltID[0]]==certs.serialNumber)										
                        }//if(slots[index].slotDescription == this.SlotID[this.getSlotName(this.ActvSltID)])
                    }//for (var index in slots)					
                } else {
                    l_iRetCode=3904;
                    l_vRMsg=rMsg(l_iRetCode,"")					
                }//if (ret.slots.length!=0)
                
            } else {
                l_iRetCode=3903;
                l_vRMsg=rMsg(l_iRetCode,ret.message+"("+ret.ret_code+"--"+l_iRetCode+")");
                l_iRetCode=ret.ret_code;
            }//if (ret.ret_code==0)
        }//if(ret.ret_code==0x76000031)			
    }//if (l_iRetCode==0) 
    
    if (l_CertInfo!=null) {
        l_vRetData='{"RCode":"' + l_iRetCode + '","RMsg":"'+ l_vRMsg +'",'+l_CertInfo+'}';			
    } else {
        l_vRetData='{"RCode":"' + l_iRetCode + '","RMsg":"'+ l_vRMsg +'"}';		
    }//if (l_CertInfo!=null)
    //InToken.RetObj=JSON.parse(l_vRetData);
    //if (UrRevFUN && typeof(UrRevFUN) === "function") UrRevFUN();
    
    return l_vRetData;
}//function PrsCrt(UrRevFUN)

//42
function checkGoodDay()
{
    var l_vCardID;
    var l_vGoodDayOK;
    var l_vRetData;
    
    l_vGoodDayOK=false;
    
    l_vRetData=checkCondition();
    if (l_vRetData.RCode==0) {
        if ((InToken.ActvSltID[0]<InToken.SlotID.length)&&(InToken.ActvSltID[0]>=0)) {
            l_vGoodDayOK=true;
        }//if (InToken.ActvSltID<=InToken.SlotID.length)
    }//if (l_vRetData.RCode==0)	
        
    return l_vGoodDayOK;
}//function checkGoodDay()

//80
function CkBType(){
    var retCode = "Chrome"; // Return IE or Chrome

    if (navigator.appName == 'Microsoft Internet Explorer'){
       var l_RegExp;
       l_RegExp= new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
       if (l_RegExp.exec(navigator.userAgent) !== null) retCode = "IE";    }
    else if(navigator.appName == "Netscape"){
       if(navigator.appVersion.indexOf('Edge') >= 0)
       {
           retCode = "Edge";
       } else if (navigator.appVersion.indexOf('rv:11') >= 0)
       {
           retCode = "IE";
       }//if(navigator.appVersion.indexOf('Edge') >= 0)
    }//if (navigator.appName == 'Microsoft Internet Explorer')

    return retCode;          
}//function CkBType()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ICToken
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//50
function ICToken() {
    this.SmrtCrdID=[];
    this.SlotID =[];
    this.SlotName =[];
    
    this.ActvSltID=[];
    
    this.OldPIN="";	
    this.NewPIN="";
    this.UID="";
    this.CrdSys="";	
    
    this.KpMsg="";
    
    this.TBS="TBS";
    this.TbsEncoding="base64";
    this.HashAlgorithm="SHA256";
    this.PIN="";
    this.FUN="MakeSignature";
    this.SType="PKCS1";	
    this.RetObj=JSON.parse('{"RCode":"' + 5000 +'","RMsg":"'+ rMsg(5000,"") +'"}');
}//function ICToken()

//51
function getICToken(){
    if (InToken == null) InToken = new ICToken();
    //console.log("get ICToken:",InToken);
    return InToken;
}//function ICToken()

//52
ICToken.prototype.clean = function(){
    InToken.SmrtCrdID=[];
    InToken.SlotID =[];
    InToken.SlotName =[];
    
    InToken.ActvSltID=[];
    
    InToken.OldPIN="";
    InToken.NewPIN="";
    InToken.UID="";
    InToken.CrdSys="";
    
    InToken.KpMsg="";
    
    InToken.TBS="TBS";
    InToken.TbsEncoding="base64";
    InToken.HashAlgorithm="SHA256";
    InToken.PIN="";
    InToken.FUN="MakeSignature";
    InToken.SType="PKCS1";;
    InToken.RetObj=JSON.parse('{"RCode":"' + 5200 +'","RMsg":"'+ rMsg(5200,"") +'"}');	
}//ICToken.prototype.clean


//53 return
//object.RCode
//object.RMsg
ICToken.prototype.goodDay = function (RevFun) {
    console.log("ICToken.prototype.goodDay");
    if (InToken==null) InToken = new ICToken();
    if (Gbjct!=null) Gbjct=null;
    Gbjct=new INObject();
    if (GARevFun!=null) GARevFun=null;
    GARevFun=new ARevFun();	
    InToken.clean();
    checkEnv(RevFun);
}//ICToken.prototype.goodDay

//54 staleness
ICToken.prototype.close = function () {
    InToken=null;
    Gbjct=null;
    GARevFun=null;
    return true;
}//ICToken.prototype.close

//55 retrun
//object.RCode
//object.CardID
//object.RMsg
ICToken.prototype.getSmartCardID = function (RevFun) {
    var l_vCardID;
    var l_vRetData;
    var l_iRetCode;
    var l_vRMsg;
    
    l_iRetCode=0;
    if (checkGoodDay()==false) {
        l_iRetCode=5500;
        l_vRMsg=rMsg(l_iRetCode,"");		
    } else {
        l_vRetData=checkCondition();
        if (l_vRetData.RCode==0) {
            if ((InToken.ActvSltID[0]<InToken.SlotID.length)&&(InToken.ActvSltID[0]>=0)) {
                l_vCardID=InToken.SmrtCrdID[InToken.ActvSltID[0]];
            }//if (InToken.ActvSltID<=InToken.SlotID.length)
        } else {
            l_iRetCode=l_vRetData.RCode;
            l_vRMsg=l_vRetData.RMsg;
        }//if (l_vRetData.RCode==0)			
    }//if (checkGoodDay()==false)
        
    l_vRetData='{"RCode":"' + l_iRetCode + '", "CardID":"' + l_vCardID +'","RMsg":"'+ l_vRMsg +'"}';	
    InToken.RetObj=JSON.parse(l_vRetData);
    if (RevFun && typeof(RevFun) === "function") RevFun();
}//ICToken.prototype.getSmartCardID

//56
ICToken.prototype.countSlotID = function () {
    return InToken.SlotID.length
}//ICToken.prototype.countSlotID

//57
ICToken.prototype.getSlotName = function (SlotIDNum) {
    var RetData;
    
    RetData="";
    if ((SlotIDNum<InToken.SlotID.length)&&(SlotIDNum>=0)) {
        RetData=InToken.SlotID[SlotIDNum];
    }//if (SlotIDNum<=InToken.SlotID.length)
    
    return RetData;
}//ICToken.prototype.getSlotNumber

//58 if there are more then one smart card, you must set this function first.
//return 
//object.RCode
//object.RMsg
ICToken.prototype.setActiveSlotID = function (SlotIDNum) {
    var l_iRetCode;
    var l_vRMsg;
    var l_vRetData;
    
    l_iRetCode=0;
    l_vRMsg="";
    if ((SlotIDNum<InToken.SlotID.length)&&(SlotIDNum>=0)) {
        InToken.ActvSltID[0]=SlotIDNum;
    } else {
        l_iRetCode=5800;
        l_vRMsg=rMsg(l_iRetCode,"");
    }//if (SlotIDNum<=InToken.SlotID.length)
    
    l_vRetData='{"RCode":"' + l_iRetCode +'","RMsg":"'+ l_vRMsg +'"}';
    
    return JSON.parse(l_vRetData);
}//ICToken.prototype.setActiveSlotID

//59 retrun
//object.RCode
//object.Certificate
//object.RMsg
ICToken.prototype.getB64Certificate = function (index,RevFun) {
    getCert(index,RevFun);
}//ICToken.prototype.getB64Certificate = function (index)

//60
ICToken.prototype.getActiveSlotID = function () {
    return this.ActvSltID[0];
}//ICToken.prototype.readSmartCardID

//61 retrun
//object.RCode
//object.B64Signature
//object.RMsg
ICToken.prototype.sign = function (B64ToBeSign,UserPIN,HashAlg,RevFun) {	
    UserSign(B64ToBeSign,UserPIN,HashAlg,RevFun,"none");
}//ICToken.prototype.sign = function (B64ToBeSign,UserPIN,HashAlg)

//62 retrun
//object.RCode
//object.RMsg
ICToken.prototype.changePIN = function (NewPIN,OldPIN,RevFun)
{
    UChngPin(NewPIN,OldPIN,RevFun);
}//ICToken.prototype.changePIN = function (NewPIN,OldPIN,RevFun)

//63 retrun
//object.RCode
//object.CertInfo
//object.RMsg
ICToken.prototype.parseCertificate = function (index,RevFun)
{
    UsrPrsCrt(index,RevFun);	
}//ICToken.prototype.parseCertificate = function (index,RevFun)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reset User PIn
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//70 retrun
//object.RCode
//object.data[0]
//object.RMsg
ICToken.prototype.getRSInfo = function (CardSystem,UID,RevFun)
{
    UsrGtRstInfo(CardSystem,UID,RevFun);	
}//ICToken.prototype.getRSInfo = function (index,RevFun)

//71
ICToken.prototype.resetInfo= function (CardSystem,UID,ServerRetData,RevFun)
{
    UsrRstInfo(CardSystem,UID,ServerRetData,RevFun);	
}//ICToken.prototype.resetInfo = function (index,RevFun)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//unbolck User PIn
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//72 retrun
//object.RCode
//object.data[0]
//object.RMsg
ICToken.prototype.getUBlkInfo = function (CardSystem,UID,NewPIN,RevFun)
{
    UsrGtUBlkInfo(CardSystem,UID,NewPIN,RevFun);	
}//ICToken.prototype.getUBlkInfo = function (CardSystem,UID,NewPIN,RevFun)

//73
ICToken.prototype.resetUBlkInfo= function (CardSystem,UID,ServerRetData,RevFun)
{
    UsrRstUBlkInfo(CardSystem,UID,ServerRetData,RevFun);	
}//ICToken.prototype.resetUBlkInfo = function (index,RevFun)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GCA\XCA Open Card
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//74 retrun
//object.RCode
//object.data[0]
//object.RMsg
ICToken.prototype.getPnCrdInfo = function (CardSystem,UID,PIN,RevFun)
{
    UsrGtPnCrdInfo(CardSystem,UID,PIN,RevFun);	
}//ICToken.prototype.getPnCrdInfo = function (CardSystem,UID,PIN,RevFun)

//75
ICToken.prototype.openCrdInfo= function (CardSystem,UID,ServerRetData,RevFun,Step)
{
    UsrPnCrdInfo(CardSystem,UID,ServerRetData,RevFun,Step);	
}//ICToken.prototype.openCrdInfo= function (CardSystem,UID,ServerRetData,RevFun)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CrypSign
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//76 retrun
//object.RCode
//object.B64Signature
//object.RMsg
ICToken.prototype.CrypSign = function (B64ToBeSign,CrypUserPIN,HashAlg,RevFun) {	
    UserSign(B64ToBeSign,CrypUserPIN,HashAlg,RevFun,"Cryp");
}//ICToken.prototype.sign = function (B64ToBeSign,UserPIN,HashAlg)