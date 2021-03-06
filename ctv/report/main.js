
var tile = 50/100;
const time_thbao = 3000;

const updateTime = new Date()
const thisYear = updateTime.getFullYear();
const thisMonth = updateTime.getMonth()+1;
const thisDate = updateTime.getDate();

var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
};

if(!getCookie('ctv_id') || getCookie('ctv_id').length < 6){window.location.href='/ctv/login'}

var ctv_id = getCookie('ctv_id');
if(typeof ctv_id != 'undefined'){
  if (ctv_id.length >= 6){document.getElementById('innerPubName').innerHTML = `${ctv_id} | <span id="logout" onclick="logout()"><a href="#">Logout</a></span>`;}else
  if(ctv_id.length < 6){window.location.href = '/'}
}
if(typeof ctv_id == 'undefined'){window.location.href = '/'}

var jsThanhToanId = `<script src="/ctv/report/${ctv_id}/data.js" async></script>`;
document.head.innerHTML += jsThanhToanId;

document.getElementById('ctv_ma-giam-gia').innerHTML = `
<div style="margin: 5px;"><span>- SHOPEE: </span><input class="input-ma-giam-gia" onclick="copyValue(this)" readonly value="https://topvoucher.tk/ctv/r/ma-giam-gia/shopee/?ref=${ctv_id}"/></div>
<div style="margin: 5px;"><span>- LAZADA: </span><input class="input-ma-giam-gia" onclick="copyValue(this)" readonly value="https://topvoucher.tk/ctv/r/ma-giam-gia/lazada/?ref=${ctv_id}"/></div>
<div style="margin: 5px;"><span>- TIKI: </span><input class="input-ma-giam-gia" onclick="copyValue(this)" readonly value="https://topvoucher.tk/ctv/r/ma-giam-gia/tiki/?ref=${ctv_id}"/></div>
`;

var tab = getUrlParameter('tab');
if(typeof tab == 'undefined'){tab = 'doanhthu'}
if(tab == 'doanhthu'){doanhthu()}else
if(tab == 'thanhtoan'){thanhtoan()}else{doanhthu()};

function doanhthu(){
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='block';
  document.getElementsByClassName("thanhtoan")[0].style.display='none';
  //innerChuyenDoiTotal2()
}
function thanhtoan(){
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='none';
  document.getElementsByClassName("thanhtoan")[0].style.display='block';
  //innerSoDuTotal2()
}

var param_time_end = getUrlParameter('update_time_end');
var param_time_start = getUrlParameter('update_time_start');

/* === Set th???i gian b???i params ===*/
var update_time_start = document.getElementById('update_time_start');
var update_time_end = document.getElementById('update_time_end');
update_time_end.setAttribute('max', `${thisYear}-${padLeadingZeros(thisMonth,2)}-${padLeadingZeros(thisDate,2)}`);
var matchTime = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;

if(typeof param_time_end == 'undefined' || param_time_end.length < 10 || param_time_end.length <= 1){
  update_time_end.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-${padLeadingZeros(thisDate,2)}`);
  update_time_start.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-01`);
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&tab=${tab}`);
}else
if(param_time_end.match(matchTime)){update_time_end.setAttribute('value', `${param_time_end}`)}

if(typeof param_time_start == 'undefined' || param_time_start.length < 10 || param_time_start.length <= 1){
  update_time_start.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-01`);
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&tab=${tab}`);
}else
if(param_time_start.match(matchTime)){update_time_start.setAttribute('value', `${param_time_start}`);}

function setTab(c){
      window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&tab=${c}`;
}

var paramsString = window.location.href.match(/\?.+/g)[0]
var searchParams = new URLSearchParams(paramsString);
//searchParams.getAll('update_time_start')[0]; searchParams.set('topic', 'More webdev')
searchParams.get('update_time_start')
searchParams.get('update_time_end')
searchParams.get('tab')

/*On change time*/
function changeTime(){
	searchParams.set('update_time_start', update_time_start.value)
	searchParams.set('update_time_end', update_time_end.value)
  window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?${searchParams.toString()}`;
}

var doanhthu = document.getElementById('doanhthu');
var innerDoanhThu = document.getElementById('innerDoanhThu');
var totalDoanhThu = document.getElementById('totalDoanhThu');

//&utm_source=ctv&utm_medium=ctv_${ctv_id}

function fetch_doanhthu(merchant){
  innerDoanhThu.innerHTML = '';
  var fetch_doanhthu_url = `https://api.accesstrade.vn/v1/order-list?since=${update_time_start.value}T00:00:00Z&until=${update_time_end.value}T00:00:00Z&utm_source=ctv&utm_medium=ctv_${ctv_id}&merchant=${merchant}`;
  fetch(fetch_doanhthu_url, { headers })
  .then(response => response.json())
  .then(data => {
    var data_camp_giaTriDonHang = 0;
    var data_camp_hoaHong = 0;
    var data_camp_duocDuyet = 0;
    var data_camp_daHuy = 0;
    var data_camp_choXuLy = 0;
    
    console.log(data.data)
    Object.keys(data.data).forEach(key => {
      data_camp_giaTriDonHang += data.data[key].billing;
      data_camp_hoaHong += data.data[key].pub_commission;
	    
	if(data.data[key].is_confirmed === 1){data_camp_duocDuyet += data.data[key].pub_commission}else
	if(data.data[key].order_pending === 1){data_camp_choXuLy += data.data[key].pub_commission}else
	if(data.data[key].order_reject === 1){data_camp_daHuy += data.data[key].pub_commission}
	 
	    /*
      console.log(data.data[key].status)
      switch (data.data[key].status){
        case 0: data_camp_choXuLy += data.data[key].commission;
          break;
        case 1: data_camp_duocDuyet += data.data[key].commission;
          break;
        case 2: data_camp_daHuy += data.data[key].commission;
          break;
      }*/

    });
      if(data.data.length >= 1){
            var data_doanhthu_camp = `<td><a target="_blank" href="https://topvoucher.tk/ctv/report/conversion/?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}">${data.data[0].merchant}</a></td>
    <td><span class="data_camp_chuyenDoiPhatSinh">${data.data.length}</span></td>
    <td><span class="data_camp_giaTriDonHang">${data_camp_giaTriDonHang.toLocaleString()}</span></td>
    <td><span class="data_camp_hoaHong">${(data_camp_hoaHong * tile).toLocaleString()}</span></td>
    <td><span class="text-green data_camp_duocDuyet">${(data_camp_duocDuyet * tile).toLocaleString()}</span></td>
    <td><span class="text-red data_camp_daHuy">${(data_camp_daHuy * tile).toLocaleString()}</span></td>
    <td><span class="text-orange data_camp_choXuLy">${(data_camp_choXuLy * tile).toLocaleString()}</span></td>`;
      }else
      if(data.data.length == 0){
            var data_doanhthu_camp = `<td><a target="_blank" href="https://topvoucher.tk/ctv/report/conversion/?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}">${merchant}</a></td>
    <td><span class="data_camp_chuyenDoiPhatSinh">0</span></td>
    <td><span class="data_camp_giaTriDonHang">0</span></td>
    <td><span class="data_camp_hoaHong">0</span></td>
    <td><span class="text-green data_camp_duocDuyet">0</span></td>
    <td><span class="text-red data_camp_daHuy">0</span></td>
    <td><span class="text-orange data_camp_choXuLy">0</span></td>`;
      }
	  document.getElementById('loadingShopee').style.display = 'none';
        innerDoanhThu.innerHTML += data_doanhthu_camp;
     
  })
}
fetch_doanhthu('shopee');
fetch_doanhthu('tikivn');
fetch_doanhthu('lazada_kol');

  
/*
function addDoanhThu(){
      let dataInnerDoanhThu = "";
      var choXuly = 0;
      for(let i=0; i<dataDoanhThu.length;i++){
    choXuly = dataDoanhThu[i].hoaHong - dataDoanhThu[i].duocDuyet - dataDoanhThu[i].daHuy;
    dataInnerDoanhThu += `<tr>
                  <td>${dataDoanhThu[i].nhaQuangCao}</td>
                  <td><span class="data_camp_chuyenDoiPhatSinh">${dataDoanhThu[i].chuyenDoiPhatSinh}</span></td>
                  <td><span class="data_camp_giaTriDonHang">${dataDoanhThu[i].giaTriDonHang.toLocaleString()}</span></td>
                  <td><span class="data_camp_hoaHong">${dataDoanhThu[i].hoaHong.toLocaleString()}</span></td>
                  <td><span class="text-green data_camp_duocDuyet">${dataDoanhThu[i].duocDuyet.toLocaleString()}</span></td>
                  <td><span class="text-red data_camp_daHuy">${dataDoanhThu[i].daHuy.toLocaleString()}</span></td>
                  <td><span class="text-orange data_camp_choXuLy">${choXuly.toLocaleString()}</span></td>
                </tr>`;
      }
      innerDoanhThu.innerHTML += dataInnerDoanhThu;
}
addDoanhThu()
*/

addThanhToan()

function total(){
  var elm_camp_chuyenDoiPhatSinh = document.querySelectorAll('.data_camp_chuyenDoiPhatSinh');
  var elm_camp_giaTriDonHang = document.querySelectorAll('.data_camp_giaTriDonHang');
  var elm_camp_hoaHong = document.querySelectorAll('.data_camp_hoaHong');
  var elm_camp_duocDuyet = document.querySelectorAll('.data_camp_duocDuyet');
  var elm_camp_daHuy = document.querySelectorAll('.data_camp_daHuy');
  var elm_camp_choXuLy = document.querySelectorAll('.data_camp_choXuLy');
  
  let total_camp_chuyenDoiPhatSinh = 0;
  let total_camp_giaTriDonHang = 0;
  let total_camp_hoaHong = 0;
  let total_camp_duocDuyet = 0;
  let total_camp_daHuy = 0;
  let total_camp_choXuLy = 0;
  for(let i=0;i<elm_camp_duocDuyet.length; i++){
    total_camp_chuyenDoiPhatSinh += parseInt(replaceDocToNone(elm_camp_chuyenDoiPhatSinh[i].innerText));
    total_camp_giaTriDonHang += parseInt(replaceDocToNone(elm_camp_giaTriDonHang[i].innerText));
    total_camp_hoaHong += parseInt(replaceDocToNone(elm_camp_hoaHong[i].innerText));
    total_camp_duocDuyet += parseInt(replaceDocToNone(elm_camp_duocDuyet[i].innerText));
    total_camp_daHuy += parseInt(replaceDocToNone(elm_camp_daHuy[i].innerText));
    total_camp_choXuLy += parseInt(replaceDocToNone(elm_camp_choXuLy[i].innerText));
  }
  totalDoanhThu.innerHTML = `<td>T???ng</td>
    <td><span class="total_camp_chuyenDoiPhatSinh">${total_camp_chuyenDoiPhatSinh}</span></td>
    <td><span class="total_camp_giaTriDonHang">${total_camp_giaTriDonHang.toLocaleString()}</span></td>
    <td><span class="total_camp_hoaHong">${total_camp_hoaHong.toLocaleString()}</span></td>
    <td><span class="total_camp_duocDuyet">${total_camp_duocDuyet.toLocaleString()}</span></td>
    <td><span class="text-red total_camp_daHuy">${total_camp_daHuy.toLocaleString()}</span></td>
    <td><span class="text-orange total_camp_choXuLy">${total_camp_choXuLy.toLocaleString()}</span></td>`;
            //innerDoanhThu.innerHTML = `<span>Ch??a c?? d??? li???u ????? hi???n th???</span>`;

  document.getElementById('innerHoaHong').innerHTML = `${total_camp_hoaHong.toLocaleString()}`;
  document.getElementById('innerChuyenDoi').innerHTML = `${total_camp_giaTriDonHang.toLocaleString()}`;
}
setTimeout(total, 5000);
/*end*/
headers = '';


/*=== THANH TO??N ===*/
function addThanhToan(){
      var totalHoaHongDuocDuyet=0; var totalDaThanhToan=0; var totalSoDuTrongThang=0;
      var soDu = 0;
      let dataInnerThanhToan = "";
      for(let i=0; i<dataThanhToan.length;i++){
      soDu = dataThanhToan[i].hoaHongDuocDuyet - dataThanhToan[i].daThanhToan;
      dataInnerThanhToan += `<tr>
                        <td>${dataThanhToan[i].thangDoiSoat.toLocaleString()}</td>
                        <td>${dataThanhToan[i].hoaHongDuocDuyet.toLocaleString()}</td>
                        <td>${dataThanhToan[i].daThanhToan.toLocaleString()}</td>
                        <td>${soDu.toLocaleString()}</td>
                      </tr>`;
      totalHoaHongDuocDuyet += dataThanhToan[i].hoaHongDuocDuyet;
      totalDaThanhToan += dataThanhToan[i].daThanhToan;
      totalSoDuTrongThang += soDu;
      innerThanhToan.innerHTML = dataInnerThanhToan;
      var totalThanhToan = document.getElementById('totalThanhToan');
      totalThanhToan.innerHTML = `<tr>
                              <td><span class="font-w-500">T???ng</span></td>
                              <td><span class="font-w-500">${totalHoaHongDuocDuyet.toLocaleString()}</span></td>
                              <td><span class="font-w-500">${totalDaThanhToan.toLocaleString()}</span></td>
                              <td><span class="font-w-500">${totalSoDuTrongThang.toLocaleString()}</span></td>
                            </tr>`;
      }
}
/*=== Ch???c n??ng kh??c ===*/
document.getElementById('url_product_link').innerHTML = `<a target="_blank" href="https://topvoucher.tk/ctv/tools/create/deep-link/?id=${ctv_id}">https://topvoucher.tk/ctv/tools/create/deep-link/?id=${ctv_id}</a>`;


/*
function fetch_doanhthu(camp){
  var fetch_doanhthu_url = `https://api.accesstrade.vn/v1/transactions?since=${update_time_start.value}T00:00:00Z&until=${update_time_end.value}T00:00:00Z&utm_source=ctv&utm_medium=ctv_${ctv_id}&merchant=${camp}`;
  fetch(fetch_doanhthu_url, { headers })
  .then(response => response.json())
  .then(data => {
    var data_shopee_giaTriDonHang = 0;
    var data_shopee_hoaHong = 0;
    var data_shopee_duocDuyet = 0;
    var data_shopee_daHuy = 0;
    var data_shopee_choXuLy = 0;
    
    console.log(data.data)
    Object.keys(data.data).forEach(key => {
      data_shopee_giaTriDonHang += data.data[key].product_price;
      data_shopee_hoaHong += data.data[key].commission;
      console.log(data.data[key].status)
      switch (data.data[key].status){
        case 0: data_shopee_choXuLy += data.data[key].commission;
          break;
        case 1: data_shopee_duocDuyet += data.data[key].commission;
          break;
        case 2: data_shopee_daHuy += data.data[key].commission;
          break;
      }
    });
    console.log(data_shopee_hoaHong)
    let data_doanhthu_shopee = `<td>Shopee</td>
    <td>${data.data.length}</td>
    <td>${data_shopee_giaTriDonHang.toLocaleString()}</td>
    <td>${(data_shopee_hoaHong * tile).toLocaleString()}</td>
    <td><span class="text-green">${(data_shopee_duocDuyet * tile).toLocaleString()}</span></td>
    <td><span class="text-red">${(data_shopee_daHuy * tile).toLocaleString()}</span></td>
    <td><span class="text-orange">${(data_shopee_choXuLy * tile).toLocaleString()}</span></td>`;
    innerDoanhThu.innerHTML = data_doanhthu_shopee;
     
  })
}
*/

function fetchOrders(){
  var update_time_start = document.getElementById('update_time_start');
  var update_time_end = document.getElementById('update_time_end');
  var fetch_orders_url = `https://api.accesstrade.vn/v1/transactions?since=${update_time_start.value}T00:00:00Z&until=${update_time_end.value}T00:00:00Z&utm_source=ctv&utm_medium=ctv_001204&merchant=shopee`;
  fetch(fetch_orders_url, { headers })
  .then(response => response.json())
  .then(data => {
    let data_orders_shopee = '';
    data_orders_shopee = Object.keys(data.data).forEach(key => {
      
      data_orders_shopee += `<td>${data.data[key].merchant}</td>`
    });
    
    console.log(data_orders_shopee)
    /*data.data.forEach(([key, value]) => {
      console.log(key , value); // key ,value
    });
    */
    
  }
)
  console.log(fetch_orders_url)
}

function replaceDocToNone(c){
  return c.replaceAll('.','')
}
function padLeadingZeros(c, size) {
    return c.toString().padStart(size, '0');
}

//=== Inner TOP ===
var lastTotal2 = '';
function innerChuyenDoiTotal2(){
      document.getElementById('total-2').innerHTML = lastTotal2;
      lastTotal2 = document.getElementById('total-2').innerHTML;
      
}
function innerSoDuTotal2(){
      lastTotal2 = document.getElementById('total-2').innerHTML;
      document.getElementById('total-2').innerHTML = `<div class="text-xs text-gray-400 dark:text-gray-400">S??? d??:</div>
      <div id="innerChuyenDoi" class="text-gray-900 text-lg dark:text-white">${totalSoDuTrongThang.toLocaleString()}</div>`;
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function copyValue(c){
  if(c.value.length >= 1){
    c.focus();
    c.select();
    document.execCommand("Copy");
    console.log(`Copied: ${c.value}`);
    toast({title: 'Th??nh c??ng', message: `???? copy <b>${c.value}</b>`, type: "success", duration: time_thbao});
    }else{
		console.log('Kh??ng c?? d??? li???u ????? copy!' + c);
		toast({title: 'L???i', message: `Kh??ng c?? d??? li???u ????? copy!`, type: "error", duration: time_thbao});
	}
}

function logout(){
  eraseCookie('ctv_id');
  window.location.href = '/ctv/login';
}

//${thisYear}-${add0ToLess10(thisMonth)}-${add0ToLess10(thisDate)}
/*
fetch('https://api.accesstrade.vn/v1/transactions?since=2022-05-01T00:00:00Z&until=2022-05-30T00:00:00Z&utm_source=ctv&utm_medium=ctv_001204', { headers })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  }
)
*/

/*
 /*
var data_camp_merchant = ['shopee', 'tikivn', 'lazada_kol']
function fetch_all_camp(){
  for(let i=0; i<data_camp_merchant.length;i++){
    fetch_doanhthu(data_camp_merchant[i]);
  }
*/
