function showSuccessToast(title, message) {
    toast({
      title: title,
      message: message,
      type: "success",
      duration: 5000
    });
  }
  function showErrorToast(title, message) {
    toast({
      title: title,
      message: message,
      type: "error",
      duration: 5000
    });
  }
  // Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle"
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
                    <div class='toast__icon'>
                        <i class='${icon}'></i>
                    </div>
                    <div class='toast__body'>
                        <h3 class='toast__title'>${title}</h3>
                        <p class='toast__msg'>${message}</p>
                    </div>
                    <div class='toast__close'>
                        <i class='fas fa-times'></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}

!function(){
  function f(){
    alert(' Opps, bạn đang dùng Ad Block, hãy tắt trình chặn quảng cáo để giúp chúng mình có thêm thu nhập! Iu bạn nhìu nhìu 😍👉👈');
  	toast({
      title: '&#9728;&#65039; Hãy tắt AD Block &#9728;&#65039;',
      message: `&#9888;&#65039; Opps, bạn đang dùng Ad Block, hãy tắt trình chặn quảng cáo để giúp chúng mình có thêm thu nhập! Iu bạn nhìu nhìu 😍👉👈. Xem cách <a target="_blank" href='/p/cach-tat-adblock'><b>TẮT AD BLOCK TẠI ĐÂY</b></a>`,
      type: "error",
      duration: 999000
    });
  	document.getElementsByClassName('toast__close')[0].style.display = 'none';
  }
  
var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            b.onerror=function(){f();window.adblock=!0
};
var e=document.getElementsByTagName("script")[0];
e.parentNode.insertBefore(b,e)}();


//custom tí background cho ngựa ngựa =-))
/*
    var listBgColor = ["ffeeee",//hồng nhạt
        "#eee3ff",//tím hơi nhạt
        "#b7b6e4",//tím hơi đậm
        "#ffe3eb",//hồng hơi nhạt
        "#c5ce67",//xanh cức
        "#f38b8b",//đỏ tươi
        "#8bcff3",//xanh facebook
        ]
    randomBgColor = listBgColor[Math.floor(Math.random() * listBgColor.length)];
*/
    document.getElementsByClassName('atEQPOIVFSDFSDG-voucher-main')[0].style.background = '#eff3f4';

	    //mariquee
	var moTag = "<";
	var dongTag= ">";
    var updateTime = new Date(); //updateTime
    var today = `${updateTime.getDate()}/${updateTime.getMonth() + 1}`;

var zaloGr = 'https://zalo.me/g/fqehfa279';
document.getElementById('thbaoTop').innerHTML = `Mã cập nhật lúc <span style="color:red">${updateTime.getHours()}:${updateTime.getMinutes()} ${today}</span>, tham gia group nhắc săn Deal, Voucher hàng ngày tại <a href="${zaloGr}" target="_blank">${zaloGr}</a>`;

var ldJson = document.createElement('DIV');
//ldJson.type = 'application/ld+json';
    function createMariquee(){
        var surf = document.getElementById('surf');
        var innerVouchers = document.getElementById('innerVouchers');
        setTimeout(function(){ 
            var titleVouchers = document.getElementsByClassName('dealpromo-item-cta');
    let innerSurf = `Hôm nay <span style='color:red'>(${today})</span>: `;
            for(let i=0;i< titleVouchers.length;i=i+2){
                innerSurf+=`<a class="vouchers-tag-link" href="?utm_source=vouchers_a_tag_click&utm_medium=${window.location.pathname}&utm_campaign=${titleVouchers[i].innerText}#couponTab" title="Mã tại TrumGiamGia: ${titleVouchers[i].innerText}" alt="Mã tại TrumGiamGia: ${titleVouchers[i].innerText}">${titleVouchers[i].innerText}</a>   |   `;
		    ldJson.innerHTML += `
		    ${moTag}script type = 'application/ld+json'${dongTag}
		    {
			"@context": "https://schema.org",
			"@type": "NewsArticle",
			"mainEntityOfPage": {
			    "@type": "WebPage",
			    "@id": "https://${window.location.hostname}/?postId=${i}-${updateTime.getDate()}%2F${updateTime.getMonth()+1}&utm_source=postIndex&utm_medium=${updateTime.getDate()}%2F${updateTime.getMonth()+1}&utm_content=${titleVouchers[i].innerText}"
			},
			"headline": "${updateTime.getDate()}/${updateTime.getMonth()+1}: ${titleVouchers[i].innerText}",
			"description": "Lấy mã ${titleVouchers[i].innerText} ngay tại TrumGiamGia.tk",
			"image": "https://i.imgur.com/8uIODqf.jpg",
			"datePublished": "${updateTime.getFullYear()}-${updateTime.getMonth()+1}-${updateTime.getDate()}T${updateTime.getHours()}:11:00+07:00",
			"dateModified": "${updateTime.getFullYear()}-${updateTime.getMonth()+1}-${updateTime.getDate()+1}T${updateTime.getHours()+2}:11:17Z",
			"author": {
			    "@type": "Person",
			    "name": "Blog TrumGiamGia",
			    "url": "https://blog.trumgiamgia.tk/"
			},
			"publisher": {
			    "@type": "Organization",
			    "name": "TrumGiamGia",
			    "logo": {
				"@type": "ImageObject",
				"url": "https://i.imgur.com/8uIODqf.jpg",
				"width": 1500,
				"height": 1500
			    }
			}
		    }
		  ${moTag}/script${dongTag}
		`;
            }
            if(pathNameVoucherSite = '/'){
                surf.innerHTML = innerSurf;
                //innerVouchers.innerHTML = innerSurf;
		    console.log(ldJson);
		    document.body.append(ldJson);
            }

		//update ngày + số lượng voucher coupon
	var text_muted = document.querySelectorAll('.text-muted')[0].innerText;
	
	var history_tabs = document.querySelector('#history-tabs > em').innerText;
	var record_tabs = document.querySelector('#record-tabs > em').innerText;
	var quantityVoucher = parseInt(replaceBrackets(history_tabs)) + parseInt(replaceBrackets(record_tabs));
		
    	document.querySelector('.atEQPOIVFSDFSDG-list-title > h4').innerHTML = `HIỆN CÓ <span style='color:red;margin: 0px;'>${quantityVoucher.toLocaleString()}</span> MÃ <span style='color:red;margin: 0px;'>(${add0To1Length(updateTime.getHours())}:${add0To1Length(updateTime.getMinutes())} ${today})</span>:`;
        }, 3500);
    }    
    createMariquee();

//location.hash coupon main when click next
const pageItem = document.querySelectorAll('.pagination > .page-item');
pageItem.forEach((element) => {element.addEventListener("click", couponTab);});
function couponTab() {
	location.hash = "";
	location.hash = "couponTab"
}

//Sửa chữ lazadacps => Lazada
if(document.querySelector("[data-merchant='5127139956446111602']")){
	const dropdown_menu_lazada = document.querySelector("[data-merchant='5127139956446111602']");
	dropdown_menu_lazada.innerText = 'Lazada';
}


function replaceBrackets(c){
	return c.replaceAll('(','').replaceAll(')','')
}
function add0To1Length(c){
	if(c < 10){c = parseInt(`0${c}`)}
	return c
}

function updateQuantityVoucher(){
	var history_tabs = document.querySelector('#history-tabs > em').innerText;
	var record_tabs = document.querySelector('#record-tabs > em').innerText;
	var quantityVoucher = parseInt(replaceBrackets(history_tabs)) + parseInt(replaceBrackets(record_tabs));
		
    	document.querySelector('.atEQPOIVFSDFSDG-list-title > h4').innerHTML = `DANH SÁCH <span style='color:red;margin: 0px;'>${quantityVoucher.toLocaleString()}</span> MÃ <span style='color:red;margin: 0px;'>(${today})</span>:`;
}

//search
/*
var searchButton = document.getElementsByClassName('atEQPOIVFSDFSDG-btn-search')[0];
searchButton.addEventListener("click", function(){
	var searchInput = document.getElementById('atEQPOIVFSDFSDG-search');
        if(searchInput.value.length >= 1){
    	    window.open(`${window.location.href.replaceAll(/\?.+/g,"")}/search?q=${searchInput.value}`)
        }
})
*/

/*
var filter_keyword = document.getElementsByClassName('atEQPOIVFSDFSDG-filter-keyword')[0];
var mainSearch = document.getElementsByClassName('atEQPOIVFSDFSDG-input-main-search')[0];
var filter_and_delete = document.getElementsByClassName('atEQPOIVFSDFSDG-filters-and-delete-search')[0];
var next_tab = document.getElementsByClassName('atEQPOIVFSDFSDG-coupon-pagination')[0];

filter_keyword.addEventListener("click", createMariquee() );
mainSearch.addEventListener("click", createMariquee() );
filter_and_delete.addEventListener("click", createMariquee() );
next_tab.addEventListener("click", createMariquee() );
*/
    //cuongbokreal.github.io/api/voucher-blogger-site/inner-voucher-title/main.js
//eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0(2(){3},1);',4,4,'setInterval||function|debugger'.split('|'),0,{}))







