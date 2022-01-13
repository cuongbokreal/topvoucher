    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),sURLVariables = sPageURL.split('&'),sParameterName,i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
const accessKey1 = "5353514789844343379";
const accessKey2 = "5768026262774830477"; 
    
    var vc_title = getUrlParameter('vc_title');
    var vc_brand = getUrlParameter('vc_brand');
    var vc_brand_image = getUrlParameter('vc_brand_image');
    var vc_des = getUrlParameter('vc_des');
    var vc_code = getUrlParameter('vc_code');
    var vc_href = getUrlParameter('vc_href');
    var ctvId = getUrlParameter('ctvId');
	  console.log(ctvId);
	  
    var inner_title = document.getElementById('vc_title');
    var inner_brand = document.getElementById('vc_brand');
    var inner_brand_image = document.getElementById('vc_brand_image');
    var inner_des = document.getElementById('vc_des');
    var inner_code = document.getElementById('vc_code');
    
    //if (!inner_code != 'undefined'){window.location.replace('/?utm_source=voucher_details_page')}
    
      inner_title.innerText = vc_title;
      inner_brand.innerText = vc_brand;
      inner_brand_image.style.backgroundImage=`url(${vc_brand_image})`;
      inner_des.innerText = vc_des;
      inner_code.value = window.atob(vc_code);
    
    document.title = vc_title;

var id = getUrlParameter('id');
            if (id != 'undefined'){console.log(id)}
            else{id = accessKey1}
            if(!id){id = accessKey1}
            if (id.length < 19){id = accessKey1}
	    if (id.length > 19){id = accessKey1}
            if (id.length == 19){
		var listId = [id,accessKey1, id, accessKey2];
		var randomListId = listId[Math.floor(Math.random() * listId.length)];
		console.log(listId);
		console.log(randomListId);
            }
	  
var updateTime = new Date(); //updateTime
var affLink = `https://go.isclix.com/deep_link/${randomListId}?url=${window.atob(vc_href)}&utm_source=tggVoucherDetails&utm_medium=ctvId:${ctvId}&utm_content=clickTime:${updateTime.toLocaleTimeString()} ngày ${updateTime.toLocaleDateString()}`;
console.log(affLink + ' ' + vc_href);

    function copy_code(){
      var copyText = document.getElementById("vc_code");
	document.getElementById('vc_copy').innerText = 'Đã copy mã!';
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the text: " + copyText.value);
        window.location.href = affLink;
	//window.location.href = '/?utm_source=voucher-details-copied';    
	    
    } 
