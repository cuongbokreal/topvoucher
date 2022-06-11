
const time_thbao = 3000;
var thbao = document.getElementById('thbao');
var btnDeplink = document.getElementById('btnDeplink');
var kqDeeplink = document.getElementById('kqDeeplink');

var kq = '';
var finalLink = '';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


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

var linkSp = '';
async function getUrlOg(){
	var og_txt = document.getElementById('linkSp').value;
	//var og_txt = linkSp;
	linkSp = og_txt.match(/\bhttps?:\/\/\S+/g);
	console.log(linkSp.length)
	if(true){
		for (let i=0; i<linkSp.length; i++){
			console.log(linkSp);
			request.open("GET", linkSp[i], true);
			request.send(null);
			request.onreadystatechange = await  function() {
				if (request.readyState == 4){
          var requestHtml = request.responseText;
          if(requestHtml.match(/shopee\.vn/g)){
            if(requestHtml.match(/promotionId/g) || requestHtml.match(/signature/g) || requestHtml.match(/evcode/g)){
					      var evcode = requestHtml.match(/evcode=?([a-zA-Z0-9]+)/g)[0];
					      var promotionId = requestHtml.match(/&promotionId=?([0-9]+)/g)[0];
					      var signature = requestHtml.match(/&signature=?([a-zA-Z0-9]+)/g)[0];
					      finalLink = encodeURIComponent(`https://shopee.vn/search?${evcode}${promotionId}${signature}`);
					    }else 
					    if(requestHtml.match(/i\..+\?/g)){
					      var idSp = requestHtml.match(/i\..+\?/g)[0];
					      finalLink = `https://shopee.vn/TrumGiamGia.Tk-${idSp}`;
					      finalLink = encodeURIComponent(finalLink.replaceAll("?",""));
					    }else 
					    if(requestHtml.match(/https:\/\/shopee.vn\/.+\?/)){
					      finalLink = requestHtml.match(/https:\/\/shopee.vn\/.+\?/);
					      finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
					    }else{
					      finalLink = requestHtml.match(/http.+/g);
					      finalLink = encodeURIComponent(finalLink[0].replaceAll(/\?.+/g,""));
					    }
					  }else

					  if(requestHtml.match(/lazada\.vn/g)){
					    if(requestHtml.match(/c\.lazada\.vn/g)){
					      finalLink = requestHtml.match(/url=\S+/g)[1].replaceAll('url=','');
					    }else
					    if(requestHtml.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
					      finalLink = requestHtml.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
					      //add '?referer=at-kol'
					      finalLink = encodeURIComponent(addRefKolLazada(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,"")));
					    }else{
					      //add '?referer=at-kol'
					      finalLink = encodeURIComponent(addRefKolLazada(requestHtml));
					    }
					  }else
					  if(requestHtml.match(/tiki\.vn/g)){
					    if(requestHtml.match(/https:\/\/tiki.vn\/.+\?/)){
						finalLink = requestHtml.match(/https:\/\/tiki.vn\/.+\?/);
						finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
					      }else{
						finalLink = requestHtml.match(/http.+/g);
						finalLink = encodeURIComponent(finalLink[0].replaceAll(/\?.+/g,""));
					      }
					  }
					
				}//end request done
        console.log(`Finallink is: ${finalLink}`)
			}
      await delay(1000)
			og_txt = og_txt.replaceAll(linkSp[i], decodeURIComponent(finalLink));
		}
		setTimeout(function(){document.getElementById('kqDeeplink').value = og_txt;}, linkSp.length*500 )
	}
}


//getUrlOg(url) => return [finalLink, kq, data_infor_camp]

function addRefKolLazada(c){
	if(c.match(/(\?|\&)referer=at-kol/g)){}
    else{ 
        if(c.match(/\?/g)){c += '&referer=at-kol';}
        else{c += '?referer=at-kol';}
    }
    return c
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
function copyValueGroup(c){
	var divCopyGroup = c.parentElement;
    	var valueCopyGroup = divCopyGroup.children[1];
    if(valueCopyGroup.value.length >= 1){
          valueCopyGroup.focus();
          valueCopyGroup.select();
          document.execCommand("Copy");
          console.log(`Copied: ${valueCopyGroup.value}`);
	toast({title: 'Thành công', message: `Đã copy <b>${valueCopyGroup.value}</b>`, type: "success", duration: time_thbao});
        }else{
		console.log('Không có dữ liệu để copy!' + valueCopyGroup);
		toast({title: 'Lỗi', message: `Không có dữ liệu để copy!`, type: "error", duration: time_thbao});
	}
}
