var time_thbao = 3000;

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}
  throw new Error("Could not create HTTP request object.");
}
var request = makeHttpObject();
request.open("GET", 'https://topvoucher.tk/ctv/tools/tong-hop/data.js', true);
request.send(null);
request.onreadystatechange =  function() {
	if(request.readyState == 4){
		document.getElementById('main').innerHTML = replaceBr(request.responseText);
		$("#main").each(function(){
		   $(this).html( $(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<input class="og-url" onfocusin="focusInInput(this)" onfocusout="focusOutInput(this)" onmouseenter="focusInInput(this)" onmouseleave="focusOutInput(this)" readonly onclick="copyValue(this)" value="$1"></input> '));
		});
	}
}




function copyValue(c){
  if(c.value.length >= 1){
    c.focus();
    c.select();
    document.execCommand("Copy");
    console.log(`Copied: ${c.value}`);
    toast({title: 'Thành công', message: `Đã copy <b>${c.value}</b>`, type: "success", duration: time_thbao});
    }else{
		console.log('Không có dữ liệu để copy!' + c);
		toast({title: 'Lỗi', message: `Không có dữ liệu để copy!`, type: "error", duration: time_thbao});
	}
}

function focusInInput(c){
	c.style.width = (c.value.length + 1) + 'vh';
}
function focusOutInput(c){
	c.style.width = 'auto';
}

function replaceBr(c){
	return c.replaceAll(`
`,'<br/>');
}
