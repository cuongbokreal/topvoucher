var dataBannerTop = [
	//Shopee
{"title":"Shopee tặng bạn 20k đơn 0d",
"imgUrl":"https://i.imgur.com/J0LyYCe.jpg",
"href":"https://shorten.asia/4xZASvyX",
},
    {"title":"Shopee Sale Cuối Tháng",
    "imgUrl":"https://i.imgur.com/huoa4fo.jpg",
    "href":"https://shorten.asia/ZxDUtQH8",
    },
	{"title":"Shopee Cực Phẩm Công Nghệ",
    "imgUrl":"https://i.imgur.com/HxvmZRB.png",
    "href":"https://shorten.asia/1D9hp3Jk",
    },
    {"title":"Shopee Siêu Hội Sống Chất",
    "imgUrl":"https://i.imgur.com/5Kvulux.png",
    "href":"https://shorten.asia/99Jdx1SF",
    },
//LAZADA
	{"title":"LAZADA Tết Nhâm Dần 2022",
	"imgUrl":"https://gcp-img.slatic.net/lazada/f257a068-8754-4ec2-880d-7dd80051ff7b_VN-1019-400.gif",
	"href":"https://shorten.asia/FueuXS5q",
	},
{"title":"LAZADA Nạp thẻ",
"imgUrl":"https://i.imgur.com/v1cMOnm.jpg",
"href":"https://shorten.asia/15pvYcAN",
},
    {"title":"LAZADA Top bán chạy",
    "imgUrl":"https://i.imgur.com/Nd1QKcj.jpg",
    "href":"https://shorten.asia/W4MGCzYP",
    },
    {"title":"LAZADA Sale Tất Niên",
    "imgUrl":"https://i.imgur.com/jk2UkeO.jpg",
    "href":"https://shorten.asia/8SKUnRmR",
    },
    {"title":"LAZADA Điện tử",
    "imgUrl":"https://i.imgur.com/2BAT7n3.jpg",
    "href":"https://shorten.asia/SE2d1aE1",
    },	
//Tiki
	{
	"title":"Tiki Pro",
	"imgUrl":"https://i.imgur.com/MWbXInx.png",
	"href":"https://shorten.asia/WwjwvkdH",
	},
{
"title":"Tiki bia SG Sabeco",
"imgUrl":"https://i.imgur.com/mvJFT98.png",
"href":"https://shorten.asia/cjMtGPc6",
},
	{
	"title":"Tiki Tech Area",
	"imgUrl":"https://i.imgur.com/5RgEbYS.png",
	"href":"https://shorten.asia/jc7cSgcH",
	},
	{
	"title":"Tiki Yêu Bếp",
	"imgUrl":"https://i.imgur.com/bLNxPN7.png",
	"href":"https://shorten.asia/nDzxBQTz",
	},
	{
	"title":"Tiki Ngành Hàng Đồng Giảm",
	"imgUrl":"https://i.imgur.com/ogbRpWg.png",
	"href":"https://shorten.asia/uJ5axdzH",
	},
]
var randomBannerTop = Math.floor(Math.random() * dataBannerTop.length);
console.log(randomBannerTop);
var innerBannerTop = `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;
document.getElementById('innerBannerTop').innerHTML = innerBannerTop;

var adsBanner = document.getElementsByClassName('adsBanner');
for(let i=1; i<adsBanner.length; i++){
    var adsId = document.getElementById(`innerBanner${i}`);
    if(adsId){
        randomBannerTop = randomBannerTop + i;
        if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
        console.log(randomBannerTop);
        adsId.innerHTML = `
    <a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
    <img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
    </a>
    <div class="closeBanner" onclick="closeBanner('innerBanner${i}')">
    <svg class="closeX" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>`;}
}

function closeBanner(idBanner){
	
  	document.getElementById(idBanner).style.display='none';
	setTimeout(function(){
			document.getElementById(idBanner).style.display='block';
		}
	, 15000);
}
