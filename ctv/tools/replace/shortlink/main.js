
const time_thbao = 3000;
var thbao = document.getElementById('thbao');
var btnDeplink = document.getElementById('btnDeplink');
var kqDeeplink = document.getElementById('kqDeeplink');
var kqShortLink = document.getElementById('kqShortLink');
var bitly_token = [
	"31ae1cab212d8603378badec7a05ad2936a30c6b", //tet
	"b39094e48700c125f4b256c45f668a1986b12be3", //0
	"46dcf76dc84d19bd90b7ce6b2b4c353a0254d82c", //1
	"308c4e020fee4205fcc103007c63a8fa632d197f", //2
	"e4245081f447e466106995c0721e8835e5145f21", //3
	"9d4dc5b797e4b3c7805b4e118d972e98c66b82e4", //4
]

var kq = '';
var finalLink = '';

const timeDelay = 1000;
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
	console.log(linkSp.length);
	var timeLeft = linkSp.length * timeDelay;
	document.getElementById('thbao').innerHTML = `Dự tính còn <span id="time-left">${timeLeft/1000}</span> giây`;
	var innerTimeLeft = setInterval(function(){
		document.getElementById('time-left').innerHTML = timeLeft/1000; 
		timeLeft = timeLeft-1000; 
		if(timeLeft == 0){clearInterval(innerTimeLeft); document.getElementById('thbao').innerHTML = 'Đã xong!'}
	}, 1000);
	
	if(linkSp.length >= 1){
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
					      finalLink = (`https://shopee.vn/search?${evcode}${promotionId}${signature}`);
					    }else 
					    if(requestHtml.match(/i\..+\?/g)){
					      var idSp = requestHtml.match(/i\..+\?/g)[0];
					      finalLink = `https://shopee.vn/TrumGiamGia.Tk-${idSp}`;
					      finalLink = (finalLink.replaceAll("?",""));
					    }else 
					    if(requestHtml.match(/https:\/\/shopee.vn\/.+\?/)){
					      finalLink = requestHtml.match(/https:\/\/shopee.vn\/.+\?/);
					      finalLink = (finalLink[0].replaceAll("?",""));
					    }else{
					      finalLink = requestHtml.match(/http.+/g);
					      finalLink = (finalLink[0].replaceAll(/\?.+/g,""));
					    }
					  }else

					  if(requestHtml.match(/lazada\.vn/g)){
					    if(requestHtml.match(/c\.lazada\.vn/g)){
						    finalLink = decodeURIComponent(requestHtml.match(/url=\S+/g)[1].replaceAll('url=','').replaceAll(`";`,''));
						    if(finalLink.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
						      finalLink = finalLink.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
						      //add '?referer=at-kol'
						      finalLink = (addRefKolLazada(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,"")));
						    }else{
						      //add '?referer=at-kol'
						      finalLink = (addRefKolLazada(finalLink));
						    }
					    }else
					    if(requestHtml.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
					      finalLink = requestHtml.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
					      //add '?referer=at-kol'
					      finalLink = (addRefKolLazada(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,"")));
					    }else{
					      //add '?referer=at-kol'
					      finalLink = addRefKolLazada(finalLink);
					    }
					  }else
					  if(requestHtml.match(/tiki\.vn/g)){
					    if(requestHtml.match(/https:\/\/tiki.vn\/.+\?/)){
						finalLink = requestHtml.match(/https:\/\/tiki.vn\/.+\?/);
						finalLink = (finalLink[0].replaceAll("?",""));
					      }else{
						finalLink = requestHtml.match(/http.+/g);
						finalLink = (finalLink[0].replaceAll(/\?.+/g,""));
					      }
					  }
					
				}//end request done
       			 	console.log(`Finallink is: ${finalLink}`)
			}
			await delay(timeDelay);
			
			for(let i=0; i<bitly_token.length; i++){
			  fetch(`https://api-ssl.bitly.com/v3/shorten?access_token=${bitly_token[i]}&longUrl=${encodeURIComponent(finalLink)}&format=json`)
			  .then((response) => response.json())
			  .then((data) => {
				if(data.status_code == 200 && data.status_txt == 'OK' && data.data.url.length >= 8){
					og_txt = og_txt.replaceAll(linkSp[i], decodeURIComponent(data.data.url)); 
				}
				  else{console.log('Lỗi')}
				console.log(data)
			  })
				  .catch(error => {console.error('Error:', error);});
				
			await delay(timeDelay);
			console.log(document.getElementById('kqShortlink').value.length);
			if(document.getElementById('kqShortlink').value.length >= 8){break};
			}
			//og_txt = og_txt.replaceAll(linkSp[i], decodeURIComponent(finalLink));
		}
		document.getElementById('kqDeeplink').value = og_txt; //chạy xong for thì inner 
	}
}

async function get_short_url(longUrl){
	for(let i=0; i<bitly_token.length; i++){
	  fetch(`https://api-ssl.bitly.com/v3/shorten?access_token=${bitly_token[i]}&longUrl=${encodeURIComponent(longUrl)}&format=json`)
	  .then((response) => response.json())
	  .then((data) => {
		if(data.status_code == 200 && data.status_txt == 'OK' && data.data.url.length >= 8){kqShortlink.value = data.data.url}
		  else{kqShortlink.value = '';}
		console.log(data)
	  })
		.catch(error => {console.error('Error:', error);});
	await delay(timeDelay);
	console.log(document.getElementById('kqShortlink').value.length);
	if(document.getElementById('kqShortlink').value.length >= 8){break};
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
