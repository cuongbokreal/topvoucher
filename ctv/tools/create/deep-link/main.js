var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
      var ctv_id = getUrlParameter('id');
      if(typeof ctv_id != 'undefined'){
        if (ctv_id.length >= 6){
          document.getElementById('ctv_id').innerHTML = ctv_id;
        }else
        if(ctv_id.length < 6){
          window.location.href = 'https://topvoucher.tk/ctv/tools/create/deep-link/access/'
        }
      }
        if(typeof ctv_id == 'undefined'){
          window.location.href = 'https://topvoucher.tk/ctv/tools/create/deep-link/access/'
        }
        
      
      var source = `&utm_source=ctv&utm_medium=ctv_${ctv_id}&utm_campaign=createDeepLink&utm_content=-`;
      
      var deeplink = 'https://go.isclix.com/deep_link/5353514789844343379';
      var thbao = document.getElementById('thbao');
      var btnDeplink = document.getElementById('btnDeplink');
      var kqDeeplink = document.getElementById('kqDeeplink');
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
          data_infor_camp = `<p>Tên camp: <span style="color:red">${data_ad[0].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>`;
        } else
          
        if(linkSp.match(/lazada\.vn/g)){
          if(linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g)){
            finalLink = linkSp.match(/https:\/\/(pages|www)\.lazada\.vn.+?laz_trackid/g);
            //add '?referer=at-kol'
            if(finalLink.match(/(\?|\&)referer=at-kol/g)){ finalLink = finalLink[0]}
            else{ 
              if(finalLink.match(/\?/g)){finalLink += '&referer=at-kol';}
              else{finalLink += '?referer=at-kol';}
                }
            finalLink = encodeURIComponent(finalLink[0].replace("laz_trackid"," ").replace(/(\?\s|&\s)/g,""));
          }else{
            //add '?referer=at-kol'
            if(finalLink.match(/(\?|\&)referer=at-kol/g)){}
            else{ 
              if(finalLink.match(/\?/g)){finalLink += '&referer=at-kol';}
              else{finalLink += '?referer=at-kol';}
                }
            finalLink = encodeURIComponent(linkSp);
          }
          
          
          kq = `${deeplink}/${data_ad[1].camp_id}?url=${finalLink}${source}`;
          data_infor_camp = `<p>Tên camp: <span style="color:red">${data_ad[1].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>`;
        } else
          
        if(linkSp.match(/tiki\.vn/g)){
          
          finalLink = linkSp.match(/http.+\?/g);
          finalLink = encodeURIComponent(finalLink[0].replaceAll("?",""));
          
          kq = `${deeplink}/${data_ad[2].camp_id}?url=${finalLink}${source}`;
          data_infor_camp = `<p>Tên camp: <span style="color:red">${data_ad[2].name}</span></p> 
                             <p>Link gốc: <span style="color:red">${decodeURIComponent(finalLink)}</span></p> 
                             <p>Tracking link: <span style="color:red">${kq}</span></p>`;
        } else{thbao.style.display = 'block';}
        
        kqDeeplink.value = kq;
        infor_camp.innerHTML = data_infor_camp;
            
            if(thbao.style.display == 'none'){toast({title: 'Thành công', message: `Đã copy Deeplink`, type: "success", duration: 5000});}
            else {toast({title: 'Lỗi', message: `Đã có lỗi xảy ra`, type: "error", duration: 5000});}
        
        //copy
        var copyText = document.getElementById('kqDeeplink');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied: " + copyText.value);
            
            
        //document.getElementById('refreshFrame').click();
        document.getElementById('short').src = '';
        document.getElementById('short').src = 'https://bitly.com.vn/#short';
      }
      
      function refreshShort(){
        //document.getElementById('short').contentWindow.location.reload();
        document.getElementById('short').src = '';
        document.getElementById('short').src = 'https://bitly.com.vn/#short';
      }
      function copyValue(s){
        if(s.value.length >= 1){
          s.focus();
          s.select();
          document.execCommand("Copy");
          console.log(`Copied: ${s.value}`);
        }else{console.log('Không có dữ liệu để copy!' + s)}
      }
