var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
var ctv_id = getCookie('ctv_id');
if(ctv_id === null){window.location.href = 'https://topvoucher.tk/ctv/login?next=https://topvoucher.tk/ctv/report/'}
document.getElementById('ctv_id').innerHTML = ctv_id;
        
const time_thbao = 3000;
const timeDelay = 1000;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      
      const source = `&utm_source=ctv&utm_medium=ctv_${ctv_id}&utm_campaign=createDeepLink&utm_content=-`;
      //var bitly_token = "b39094e48700c125f4b256c45f668a1986b12be3"; //tha em đừng dùng token tội em hmu hmu
      var deeplink = 'https://go.isclix.com/deep_link/5353514789844343379';
      var thbao = document.getElementById('thbao');
      var btnDeplink = document.getElementById('btnDeplink');
      var kqDeeplink = document.getElementById('kqDeeplink');
	var kqShortlink = document.getElementById('kqShortlink');
	var qrDeeplink = document.getElementById('qrDeeplink');
      var infor_camp = document.getElementById('infor_camp');
      var data_ad = [
        {"name":"Shopee",
         "reg":"shopee",
         "camp_id":"4751584435713464237"
        },
        {"name":"Lazada",
         "reg":"lazada",
         "camp_id":"5087153089503673507"
        },
        {"name":"Tiki",
         "reg":"tiki",
         "camp_id":"4348614231480407268"
        },
      ]
      var kq = '';
      var data_infor_camp = '';
      function createDeeplink(){
        thbao.style.display = 'none';
	      var createShortenLink = document.getElementById('createShortenLink');
        var finalLink = '';
        var linkSp = document.getElementById('linkSp').value;
        
        if(linkSp.match(/shopee\.vn/g)){
          
          if(linkSp.match(/promotionId/g) || linkSp.match(/signature/g) || linkSp.match(/evcode/g)){
            var evcode = linkSp.match(/evcode=?([a-zA-Z0-9]+)/g);
            var promotionId = linkSp.match(/&promotionId=?([0-9]+)/g);
            var signature = linkSp.match(/&signature=?([a-zA-Z0-9]+)/g);
            finalLink = encodeURIComponent(`https://shopee.vn/search?${evcode}${promotionId}${signature}`);
          }else 
          if(linkSp.match(/i\..+\?/g)){
            var idSp = linkSp.match(/i\..+\?/g)
            finalLink = `https://shopee.vn/TrumGiamGia.Tk-${idSp}`;
            finalLink = encodeURIComponent(finalLink.replaceAll("?",""));
          }else 
          if(linkSp.match(/https:\/\/shopee.vn\/.+\?/)){
            finalLink = linkSp.match(/https:\/\/shopee.vn\/.+\?/);
            finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
          }else{
            finalLink = linkSp.match(/http.+/g);
            finalLink = encodeURIComponent(finalLink[0].replaceAll(/\?.+/g,""));
          }
		kq = `${deeplink}/${data_ad[0].camp_id}?url=${finalLink}${source}`;
		
          data_infor_camp = `<label class="titleDiv">Thông tin chiến dịch:</label>
	  		     <p>Tên camp: <span style="color:red">${data_ad[0].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>
			     <p>QR Code:</p><img id="qrDeeplink" src="https://chart.apis.google.com/chart?cht=qr&chs=200x200&chld=L|0&chl=${kq}" />`;
        } else
          
        if(linkSp.match(/lazada\.vn/g)){
          if(linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
            finalLink = linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
            //add '?referer=at-kol'
            finalLink = encodeURIComponent(addRefKolLazada(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,"")));
          }else{
            //add '?referer=at-kol'
            finalLink = encodeURIComponent(addRefKolLazada(linkSp));
          }
          
          
          	kq = `${deeplink}/${data_ad[1].camp_id}?url=${finalLink}${source}`;
		
          data_infor_camp = `<label class="titleDiv">Thông tin chiến dịch:</label>
	  		     <p>Tên camp: <span style="color:red">${data_ad[1].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>
			     <p>QR Code:</p><img id="qrDeeplink" src="https://chart.apis.google.com/chart?cht=qr&chs=200x200&chld=L|0&chl=${kq}" />`;
        } else
        if(linkSp.match(/tiki\.vn/g)){
		if(linkSp.match(/https:\/\/tiki.vn\/.+\?/)){
		    finalLink = linkSp.match(/https:\/\/tiki.vn\/.+\?/);
		    finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
		  }else{
		    finalLink = linkSp.match(/http.+/g);
		    finalLink = encodeURIComponent(finalLink[0].replaceAll(/\?.+/g,""));
		  }
          //finalLink = linkSp.match(/http.+\?/g);
          //finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
          
          	kq = `${deeplink}/${data_ad[2].camp_id}?url=${finalLink}${source}`;
		
          data_infor_camp = `<label class="titleDiv">Thông tin chiến dịch:</label>
	  		     <p>Tên camp: <span style="color:red">${data_ad[2].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>
			     <p>QR Code:</p><img id="qrDeeplink" src="https://chart.apis.google.com/chart?cht=qr&chs=200x200&chld=L|0&chl=${kq}" />`;
        }else{
		thbao.style.display = 'block';
		kqDeeplink.value = '';
        	infor_camp.innerHTML = '';
	}
        
	if(linkSp.length >= 10){
		kqDeeplink.value = kq;
        	infor_camp.innerHTML = data_infor_camp;
	}else{
		kqDeeplink.value = '';
        	infor_camp.innerHTML = '';
	}
	if(createShortenLink.checked == true && linkSp.length >= 10){
		get_short_url(bitly_token, kq); //get shortlink nếu có
	}else{kqShortlink.value = '';} //check có tạo short thì tạo, không thì kqShortLink value = '';
	      
            if(thbao.style.display == 'none'){toast({title: 'Thành công', message: `Đã tạo link`, type: "success", duration: time_thbao});}
            else {toast({title: 'Lỗi', message: `Đã có lỗi xảy ra`, type: "error", duration: time_thbao});}
	      
        //copy
	      /*
	if(kqShortlink.value >= 6){ var copyText = document.getElementById('kqShortlink');}
	else{var copyText = document.getElementById('kqDeeplink');}
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied: " + copyText.value);
            */
        //document.getElementById('refreshFrame').click();
      }
      
      function refreshShort(){
        //document.getElementById('short').contentWindow.location.reload();
        document.getElementById('short').src = '';
        document.getElementById('short').src = 'https://bitly.com.vn/#short';
	window.location.hash = '';
	window.location.hash = '#';
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

function addRefKolLazada(c){
	if(c.match(/(\?|\&)referer=at-kol/g)){}
    else{ 
        if(c.match(/\?/g)){c += '&referer=at-kol';}
        else{c += '?referer=at-kol';}
    }
    return c
}

var bitly_token = [
	"31ae1cab212d8603378badec7a05ad2936a30c6b", //tet
	"b39094e48700c125f4b256c45f668a1986b12be3", //0
	"46dcf76dc84d19bd90b7ce6b2b4c353a0254d82c", //1
	"308c4e020fee4205fcc103007c63a8fa632d197f", //2
	"e4245081f447e466106995c0721e8835e5145f21", //3
	"9d4dc5b797e4b3c7805b4e118d972e98c66b82e4", //4
]
async function get_short_url(bitly_token, longUrl){
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
	console.log(document.getElementById('kqShortlink').value.length)
	if(document.getElementById('kqShortlink').value.length >= 8){break};
	}
}

function get_in4_short_url(bitly_token, longUrl){
	if(longUrl.length >= 12 && longUrl != lastLongUrl){
	  fetch(`https://api-ssl.bitly.com/v3/shorten?access_token=${bitly_token}&longUrl=${longUrl}&format=json`)
	  .then((response) => response.json())
	  .then((data) => {
		return data
	  })
	}
	var lastLongUrl = longUrl;
}


/*
else
		//nếu không match shopee || lazada || tiki
	if(linkSp.match(/go\.isclix\.com/g){
		thbao.style.display = 'block';
		kqDeeplink.value = '';
        	infor_camp.innerHTML = '';
	}
*/
