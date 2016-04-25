function strpad00(s)
{
    s = s + '';
    if (s.length === 1) s = '0'+s;
    return s;
}

function getTs(){
var currentdate = new Date();
var datetime = currentdate.getFullYear() 
    + "-" + strpad00((currentdate.getMonth()+1)) 
    + "-" + currentdate.getDate() 
    + "  " 
    + currentdate.getHours() 
    + ":"  + strpad00(currentdate.getMinutes()) 
    //+ ":"    + strpad00(currentdate.getSeconds());
    return datetime;
  }

function watermarker(obj, w) {
	obj = obj?obj: "body";
	var ts = getTs();
	w= w? w:"张小兵 "+ ts +" 杭州政务大数据";
	var word="";
	for(var i=0; i<80; i++){
		word += w+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	}
	var html = "<div id='cwatermark'><div id='watermark'>"+word+"</div></div>";
	$(obj).append(html);
}

