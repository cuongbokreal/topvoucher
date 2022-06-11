var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
const time_thbao = 3000;
var createShortenLink = document.getElementById('createShortenLink');
var thbao = document.getElementById('thbao');
var btnDeplink = document.getElementById('btnDeplink');
var kqDeeplink = document.getElementById('kqDeeplink');
var kqShortlink = document.getElementById('kqShortlink');
var qrDeeplink = document.getElementById('qrDeeplink');
var infor_camp = document.getElementById('infor_camp');

var kq = '';
var finalLink = '';

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

function getUrlOg(){
  var linkSp = document.getElementById('linkSp').value;
  request.open("GET", linkSp, true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4){
      //console.log(request.responseText);
      var linkSp = request.responseText;
      //kqDeeplink.value = request.responseText;
    
        if(linkSp.match(/shopee\.vn/g)){

            if(linkSp.match(/promotionId/g) || linkSp.match(/signature/g) || linkSp.match(/evcode/g)){
              var evcode = linkSp.match(/evcode=?([a-zA-Z0-9]+)/g)[0];
              var promotionId = linkSp.match(/&promotionId=?([0-9]+)/g)[0];
              var signature = linkSp.match(/&signature=?([a-zA-Z0-9]+)/g)[0];
              finalLink = encodeURIComponent(`https://shopee.vn/search?${evcode}${promotionId}${signature}`);
            }else 
            if(linkSp.match(/i\..+\?/g)){
              var idSp = linkSp.match(/i\..+\?/g)[0];
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
          }else

          if(linkSp.match(/lazada\.vn/g)){
            if(linkSp.match(/c\.lazada\.vn/g)){
              finalLink = linkSp.match(/url=\S+/g)[1].replaceAll('url=','');
              console.log(linkSp.match(/url=\S+/g))
            }else
            if(linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
              finalLink = linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
              //add '?referer=at-kol'
              finalLink = encodeURIComponent(addRefKolLazada(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,"")));
            }else{
              //add '?referer=at-kol'
              finalLink = encodeURIComponent(addRefKolLazada(linkSp));
            }
            kq = `${deeplink}/${data_ad[1].camp_id}?url=${finalLink}${source}`;
          }else
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
          }
        kqDeeplink.value = kq;
        infor_camp.innerHTML = data_infor_camp;
        console.log(finalLink)
        if(createShortenLink.checked == true){
          get_short_url(bitly_token, kq); //get shortlink nếu có
        }else{kqShortlink.value = '';} //check có tạo short thì tạo, không thì kqShortLink value = '';

                  if(thbao.style.display == 'none'){toast({title: 'Thành công', message: `Đã tạo link`, type: "success", duration: time_thbao});}
                  else {toast({title: 'Lỗi', message: `Đã có lỗi xảy ra`, type: "error", duration: time_thbao});}

        return kq
    }//end request done
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
