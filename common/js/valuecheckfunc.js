function TextValueCheck(Obj, Msg)
{
	if(Obj.value == "")
	{
		alert(Msg);
		Obj.focus();
		return false;
	}
	return true;
}

function TextValueCheckInt(Obj, Msg)
{
	if(!CheckNumber(Obj.value)){
		alert(Msg);
		Obj.focus();
		return false;
	}
	return true;
}

function TextValueCheckEmail(Obj, Msg)
{
	if(!CheckEmail(Obj.value)){
		alert(Msg);
		Obj.focus();
		return false;
	}
	return true;
}

function getRadioValue(Obj) {
	var returnvalue;
	for(var i=0; i < Obj.length; i++)
	{
		if(Obj[i].checked == true)
		{
			returnvalue	=	Obj[i].value;
			return returnvalue;
		}
	}

	return '';
}
function GetCheckBoxLength(obj) {
	var pacnt = 0;
	if(obj == null) {
		pacnt = 0;
	} else {
		try {
			if(obj.length > 0)
					pacnt = obj.length;
		} catch(e){}
		if (pacnt ==0)
				pacnt = 1;
	}
	return pacnt;
}

function RadioValueCheck(Obj, Msg)
{
	if(GetCheckBoxLength(Obj) == 1) {
		if(Obj.checked == true)
			return true;
	} else {
		for(var i=0; i < Obj.length; i++)
			if(Obj[i].checked == true)
				return true;
	}
	alert(Msg);
	return false;

}

function CheckNumber(CheckValue)
{
	var anum=/(^\d+$)|(^\d+\.\d+$)/
	if (anum.test(CheckValue))
		return true;	
	else
		return false;
}


function CheckNumberAndEngligh(CheckValue) 
{
	var valid = "abcdefghijklmnopqrstuvwxyz0123456789"
	var temp;
	for (var i=0; i<CheckValue.length; i++) 
	{

		temp = "" + CheckValue.substring(i, i+1);
		if (valid.indexOf(temp) == "-1")
			return false;
	}
	return true;
}

function CheckEmail(CheckValue){
	var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
	var check=/@[\w\-]+\./;
	var checkend=/\.[a-zA-Z]{2,3}$/;
	if(((CheckValue.search(exclude) != -1)||(CheckValue.search(check)) == -1)||(CheckValue.search(checkend) == -1)){
		return false;
	}
	else {
		return true;
	}
}

var isNN = (navigator.appName.indexOf("Netscape")!=-1);

function autoTab(input,len, e) {
        var keyCode = (isNN) ? e.which : e.keyCode; 
        var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
        if(input.value.length >= len && !containsElement(filter,keyCode)) {
        input.value = input.value.slice(0, len);
        input.form[(getIndex(input)+1) % input.form.length].focus();
}

function containsElement(arr, ele) {
        var found = false, index = 0;
        while(!found && index < arr.length)
        if(arr[index] == ele)
        found = true;
        else
        index++;
        return found;
}

function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == -1)
        if (input.form[i] == input)index = i;
        else i++;
        return index;
        }
return true;
}

function SelectValueCheck(Obj, Msg)
{
	if(Obj[Obj.selectedIndex].value == ""){
		alert(Msg);
		return false;
	} else {
		return true;
	}
}

function DateCheck(Obj_SYear, Obj_SMonth, Obj_SDay, Obj_EYear, Obj_EMonth, Obj_EDay) {
	var Obj_SDate;
	var Obj_EDate;
	
	if(Obj_SMonth < 10)
		Obj_SMonth = "0"+Obj_SMonth;
	if(Obj_SDay < 10)
		Obj_SDay = "0"+Obj_SDay;

	if(Obj_EMonth < 10)
		Obj_EMonth = "0"+Obj_EMonth;
	if(Obj_EDay < 10)
		Obj_EDay = "0"+Obj_EDay;

	Obj_SDate = Obj_SYear + Obj_SMonth + Obj_SDay;
	Obj_EDate = Obj_EYear + Obj_EMonth + Obj_EDay;

	if(Obj_SDate > Obj_EDate)
	{
		alert("시작날짜가 종료날자보다 큽니다.");
		return false;
	}
	return true;	
}


function imgSizeChk(which){
	var obj = eval("document."+which);
	
	if(obj != null) {
    	var width = eval("document."+which+".width");
    	var height = eval("document."+which+".height");
    	var temp = 0; 
    	var max_width= 600;   
	
		// 이미지의 최대 크기     
    	if ( width > max_width ) {  
			// 이미지가 600보다 크다면 너비를 600으로 맞우고 비율에 맞춰 세로값을 변경한다.      
			height = height/(width / max_width);
			eval("document."+which+".width = max_width");     
			eval("document."+which+".height = height");
		}     
	}
}