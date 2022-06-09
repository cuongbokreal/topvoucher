var headers = {'Authorization': 'Token NJX0ajmdmDlubnsfBHrvCJQjWIehzXcA','Content-Type': 'application/json'}
const tile = 55/100;

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
var param_time_end = getUrlParameter('update_time_end');
var param_time_start = getUrlParameter('update_time_start');
var merchant = getUrlParameter('merchant');
var ctv_id = getUrlParameter('ctv_id');
if(ctv_id.length < 6){window.location.href = '/'}
document.getElementById('innerPubName').innerHTML = `id: <span class="text-red">${ctv_id}</span>`;
//&utm_source=ctv&utm_medium=ctv_${ctv_id}


var update_time_start = document.getElementById('update_time_start');
var update_time_end = document.getElementById('update_time_end');

update_time_end.setAttribute('max', `${thisYear}-${padLeadingZeros(thisMonth,2)}-${padLeadingZeros(thisDate,2)}`);
var matchTime = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;

if(typeof param_time_end == 'undefined' || param_time_end.length < 10 || param_time_end.length <= 1){
  update_time_end.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-${padLeadingZeros(thisDate,2)}`);
  update_time_start.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-01`);
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}}`);
}else
if(param_time_end.match(matchTime)){update_time_end.setAttribute('value', `${param_time_end}`)}

if(typeof param_time_start == 'undefined' || param_time_start.length < 10 || param_time_start.length <= 1){
  update_time_start.setAttribute('value', `${thisYear}-${padLeadingZeros(thisMonth,2)}-01`);
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}`);
}else
if(param_time_start.match(matchTime)){update_time_start.setAttribute('value', `${param_time_start}`);}

if(typeof merchant == 'undefined' || merchant.length < 2 || merchant == ''){
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=shopee`)
}
document.getElementById('merchant').innerHTML = `<span style="color:red">${merchant}</span>`;


var innerDonHang = document.getElementById('innerDonHang');

var fetch_doanhthu_url = `https://api.accesstrade.vn/v1/transactions?since=${update_time_start.value}T00:00:00Z&until=${update_time_end.value}T00:00:00Z&utm_source=ctv&utm_medium=ctv_${ctv_id}&merchant=${merchant}`;
fetch(fetch_doanhthu_url, { headers })
.then(response => response.json())
.then(data => {
  console.log(data.data)
  var lengthData = data.data.length;
      document.getElementById('totalConversion').innerHTML = ` (${lengthData}) `; //inner total conversion
  let data_camp_donhang = '';
  Object.keys(data.data).forEach(key => {
    data_camp_donhang+= `<tr>
                <td class="transaction_time" title="${data.data[key].transaction_time}"><span>${data.data[key].transaction_time}</span></td>
                <td class="transaction_id">
                      <span>
                        <a onclick="innerDetails(this)"
                data-merchant="${data.data[key].merchant}"
                data-click_url="${data.data[key].click_url}"
                data-device_type="${data.data[key]._extra.device_type}"
                data-browser="${data.data[key]._extra.browser}"
                data-transaction_id="${data.data[key].transaction_id}"
                data-click_time="${data.data[key].click_time}"
                data-transaction_time="${data.data[key].transaction_time}"
                data-product_price="${data.data[key].product_price}"
                data-commission="${(data.data[key].commission * tile).toLocaleString()}"
                title="${data.data[key].transaction_id}" href="#popup"
                        >${data.data[key].transaction_id}</a>
                      </span>
                </td>
                <td class="status" title=""><span>${getStatusDonhang(data.data[key].status)}</span></td>
                <td class="click_referer" title="${data.data[key]._extra.parameters.click_referer}"><span>${data.data[key]._extra.parameters.click_referer}</span></td>
                <td class="product_category" title="${data.data[key].product_category}"><span>${data.data[key].product_category}</span></td>
                <td class="product_price" title="${((data.data[key].product_price) * (data.data[key].product_quantity)).toLocaleString()}"><span>${((data.data[key].product_price) * (data.data[key].product_quantity)).toLocaleString()}</span></td>
                <td class="commission" title="${(data.data[key].commission * tile).toLocaleString()}"><span>${(data.data[key].commission * tile).toLocaleString()}</span></td>
                <td class="merchant" title="${data.data[key].merchant}"><span>${data.data[key].merchant}</span></td>
                <td class="reason_rejected" title="${data.data[key].reason_rejected}"><span>${data.data[key].reason_rejected}</span></td>
                <td class="device_type" title="${data.data[key]._extra.device_type}"><span>${data.data[key]._extra.device_type}</span></td>
                <td class="device_brand" title="${data.data[key]._extra.device_brand}"><span>${data.data[key]._extra.device_brand}</span></td>
                </tr>`;
  });
  if(lengthData <= 0){innerDonHang.innerHTML = 'Chưa có dữ liệu để hiển thị'}
  else{innerDonHang.innerHTML = data_camp_donhang}
})


var detailsConversion = document.getElementById('detailsConversion');
let dataInnerDetails = '';
function innerDetails(c){
      dataInnerDetails = `<tr><td>Advertiser:</td>
      <td class="tdDetails">${c.getAttribute('data-merchant')}</td></tr>
      
      <tr><td>Đường dẫn sản phẩm:</td>
      <td class="tdDetails">${c.getAttribute('data-click_url')}</td></tr>
      
      <tr><td>Nền tảng thiết bị:</td>
      <td class="tdDetails">${c.getAttribute('data-device_type')}</td></tr>
      
      <tr><td>Trình duyệt:</td>
      <td class="tdDetails">${c.getAttribute('data-browser')}</td></tr>
      
      <tr><td>Mã đơn hàng:</td>
      <td class="tdDetails">${c.getAttribute('data-transaction_id')}</td></tr>
      
      <tr><td>Click:</td>
      <td class="tdDetails">${c.getAttribute('data-click_time').replaceAll('T', ' ')}</td></tr>
      
      <tr><td>Thời gian mua:</td>
      <td class="tdDetails">${c.getAttribute('data-transaction_time').replaceAll('T', ' ')}</td></tr>
      
      <tr><td>Giá trị đơn hàng:</td>
      <td class="tdDetails">${c.getAttribute('data-product_price')}</td></tr>
      
      <tr><td>Hoa hồng:</td>
      <td class="tdDetails">${c.getAttribute('data-commission')}</td></tr>
      `;
      detailsConversion.innerHTML = dataInnerDetails;
}


/* Function */
function getStatusDonhang(c){
  if(c == '0'){return '<span class="text-orange">Chờ xử lý</span>'}else
  if(c == '1'){return '<span class="text-green">Tạm duyệt</span>'}else
  if(c == '2'){return '<span class="text-red">Đã hủy</span>'}
}
function padLeadingZeros(c, size) {
    return c.toString().padStart(size, '0');
}
/*On change time*/
function changeTimeStart(){
  window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}`;
}
function changeTimeEnd(){
  window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}`;
}

