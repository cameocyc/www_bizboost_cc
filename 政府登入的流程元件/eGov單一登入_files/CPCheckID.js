function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, "$1" + key + "=" + value + "$2");
    }
    else {
        return uri + separator + key + "=" + value;
    }
}
function checkID(value, element) {
    var id = value.toUpperCase();
    var alphabet = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; //按照轉換後權數的大小進行排序(A=10,B=11...)
    //格式，用正則表示式檢驗格式
    //這邊把身分證字號轉換成準備要對應的
    if (id.match(/^[A-Z](1|2)\d{8}$/i) == null && id.match(/^[A-Z][89A-D]\d{8}$/i) == null) {
        alert("身分證/外來人口統一證號格式錯誤");
        return false;
    }
    var chrarr = id.split("");
    var num;
    if (id.match(/^[A-Z][A-D]\d{8}$/i) != null) {
        num = alphabet.indexOf(chrarr[1]) % 10; //找出第2位英文字母的對應數值，取其個位數
        chrarr[1] = num;
    }
    //個位數及十位數
    num = alphabet.indexOf(chrarr[0]) + 10; //找出第1位英文字母的對應數值
    var d1 = num % 10;
    var d2 = ((num - d1) / 10);
    chrarr[0] = (d1 * 9 + d2) % 10; //對應數值之個位數值乘以9，再加上十位數之值，其總和再除以10，所得之餘數為個位對應值
    //開始進行身分證數字的相乘與累加，依照順序乘上1,87654321
    var logicsum = chrarr[0];
    for (var index = 1; index < 9; index++)
        logicsum += chrarr[index] * (9 - index);
    //模數 - 總和/模數(10)之餘數若等於第九碼的檢查碼，則驗證成功
    if ((10 - logicsum % 10) % 10 == chrarr[9]) {
        return true;
    }
    else {
        alert("請輸入正確之身分證/居留證!");
        return false;
    }
}
//# sourceMappingURL=CPCheckID.js.map