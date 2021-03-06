const tile = 50/100;

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
var ctv_id = getCookie('ctv_id');
if(ctv_id.length < 6){window.location.href = '/'}
document.getElementById('innerPubName').innerHTML = `id: <span class="text-red">${ctv_id}</span>`;
//&utm_source=ctv&utm_medium=ctv_${ctv_id}

var update_time_start = document.getElementById('update_time_start');
var update_time_end = document.getElementById('update_time_end');

update_time_start.setAttribute('max', `${thisYear}-${padLeadingZeros(thisMonth,2)}-${padLeadingZeros(thisDate-1,2)}`);
//update_time_start.setAttribute('min', `${thisYear}-${padLeadingZeros(thisMonth-1,2)}-${padLeadingZeros(thisDate,2)}`);
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
  window.location.replace(`${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=all`)
}

document.getElementById('merchant').innerHTML = `<span style="color:red">${merchant}</span>`;


var innerDonHang = document.getElementById('innerDonHang');

//transactions

/*=== DATA ORDERS ===*/
var fetch_doanhthu_url = `https://api.accesstrade.vn/v1/order-list?since=${update_time_start.value}T00:00:00Z&until=${update_time_end.value}T00:00:00Z&utm_source=ctv&utm_medium=ctv_${ctv_id}&merchant=${getMerchant(merchant)}`;
fetch(fetch_doanhthu_url, { headers })
.then(response => response.json())
.then(data => {
  console.log(data.data)
  var lengthData = data.data.length;
      document.getElementById('totalConversion').innerHTML = ` (${lengthData}) `; //inner total conversion
  let data_camp_donhang = '';
  Object.keys(data.data).forEach(key => {
        var status = [];
        if(data.data[key].order_pending === 1){status = [0, data.data[key].order_pending]}else
        if(data.data[key].order_reject === 1){status = [2, data.data[key].order_reject]}else
        if(data.data[key].is_confirmed === 1){status = [1, data.data[key].is_confirmed]}
        
        /*
        var data_product = []
        for(let i=0; i<data.data[key].products.length; i++){
              var product = {};
              product.product_id = data.data[key].products.product_id ;
              product.product_quantity = data.data[key].products.product_quantity ;
              product.status = data.data[key].products.status ;
              product.product_price = (data.data[key].products.product_price * data.data[key].products.product_quantity).toLocaleString() ;
              product.pub_commission = (data.data[key].products.pub_commission * tile).toLocaleString() ;
              product.reason_rejected = data.data[key].products.reason_rejected ;
              data_product.push(product)
        }*/
        
    data_camp_donhang+= `<tr>
                <td class="sales_time" title="${data.data[key].sales_time.replaceAll('T',' ')}"><span>${data.data[key].sales_time.replaceAll('T',' ')}</span></td>
                <td class="order_id">
                      <span>
                        <a onclick="innerDetails(this)"
                data-merchant="${data.data[key].merchant}"
                data-at_product_link="${data.data[key].at_product_link}"
                data-client_platform="${data.data[key].client_platform}"
                data-browser="${data.data[key].browser}"
                data-order_id="${data.data[key].order_id}"
                data-click_time="${data.data[key].click_time}"
                data-sale_time="${data.data[key].sales_time}"
                data-billing="${data.data[key].billing}"
                data-pub_commission="${(data.data[key].pub_commission * tile).toLocaleString()}"
                data-products='${JSON.stringify(data.data[key].products)}'
                title="${data.data[key].order_id}" href="#popup"
                        >${data.data[key].order_id}</a>
                      </span>
                </td>
                <td class="status" title=""><span>${getStatusDonhang(status)}</span></td>
                <td class="website" title="${data.data[key].website}"><span>${data.data[key].website}</span></td>
                <td class="product_category" title="${data.data[key].product_category}"><span>${data.data[key].product_category}</span></td>
                <td class="billing" title="${(data.data[key].billing).toLocaleString()}"><span>${(data.data[key].billing).toLocaleString()}</span></td>
                <td class="pub_commission" title="${(data.data[key].pub_commission * tile).toLocaleString()}"><span>${(data.data[key].pub_commission * tile).toLocaleString()}</span></td>
                <td class="merchant" title="${data.data[key].merchant}"><span>${data.data[key].merchant}</span></td>
                <td class="client_platform" title="${data.data[key].client_platform}"><span>${data.data[key].client_platform}</span></td>
                <td class="conversion_platform" title="${data.data[key].conversion_platform}"><span>${data.data[key].conversion_platform}</span></td>
                </tr>`;
  });
  if(lengthData <= 0){innerDonHang.innerHTML = 'Ch??a c?? d??? li???u ????? hi???n th???'}
  else{innerDonHang.innerHTML = data_camp_donhang}
})
.catch(error => {
      console.log(error);
      innerDonHang.innerHTML = `<span class="text-red" style="font-size: 1rem;font-weight: 500;">Ch???n th???i gian kh??ng qu?? 31 ng??y.  ${error}</span>`;
});



/*=== DETAILS ===*/
var detailsOrder = document.getElementById('detailsOrder');
var detailsConversion = document.getElementById('detailsConversion');

function innerDetails(c){
      let dataInnerDetailsOrder = '';
      var data_product = '';
      let dataInnerDetailsConversion = '';
      
      dataInnerDetails = `<tr><td class="tdTitle">Advertiser:</td>
      <td class="tdDetails">${c.getAttribute('data-merchant')}</td></tr>
      
      <tr><td class="tdTitle">???????ng d???n s???n ph???m:</td>
      <td class="tdDetails">${c.getAttribute('data-at_product_link')}</td></tr>
      
      <tr><td class="tdTitle">N???n t???ng thi???t b???:</td>
      <td class="tdDetails">${c.getAttribute('data-client_platform')}</td></tr>
      
      <tr><td class="tdTitle">Tr??nh duy???t:</td>
      <td class="tdDetails">${c.getAttribute('data-browser')}</td></tr>
      
      <tr><td class="tdTitle">M?? ????n h??ng:</td>
      <td class="tdDetails">${c.getAttribute('data-order_id')}</td></tr>
      
      <tr><td class="tdTitle">Click:</td>
      <td class="tdDetails">${c.getAttribute('data-click_time').replaceAll('T', ' ')}</td></tr>
      
      <tr><td class="tdTitle">Th????i gian mua:</td>
      <td class="tdDetails">${c.getAttribute('data-sale_time').replaceAll('T', ' ')}</td></tr>
      
      <tr><td class="tdTitle">Gi?? tr??? ????n h??ng:</td>
      <td class="tdDetails">${c.getAttribute('data-billing').toLocaleString()}</td></tr>
      
      <tr><td class="tdTitle">Hoa h????ng:</td>
      <td class="tdDetails">${c.getAttribute('data-pub_commission').toLocaleString()}</td></tr>
      `;
      detailsOrder.innerHTML = dataInnerDetails;
      
      /*
      data_product = JSON.parse(c.getAttribute('data-products'));
      for(let i=0;  i< data_product.length; i++){
            dataInnerDetailsConversion += `<tr>
            <td>${data_product[i].product_id}</td>
            <td>${data_product[i].product_quantity}</td>
            <td>${getStatusByNumber(data_product[i].status)}</td>
            <td>${data_product[i].product_price.toLocaleString()}</td>
            <td>${(data_product[i].pub_commission * tile).toLocaleString()}</td>
            <td>${data_product[i].reason_rejected }</td>
            </tr>`;
      }
      console.log(data_product)
      console.log(typeof data_product)
      detailsConversion.innerHTML = dataInnerDetailsConversion;
      */
      
}


/* Function */
function getStatusDonhang(c){
  if(c[0] === 0){return `<span class="text-orange">Ch??? x??? l?? (${c[1]})</span>`}else
  if(c[0] === 1){return `<span class="text-green">T???m duy???t (${c[1]})</span>`}else
  if(c[0] === 2){return `<span class="text-red">???? h???y (${c[1]})</span>`}
}
function getStatusByNumber(c){
  if(c == 0){return `<span class="text-orange">Ch??? x??? l??</span>`}else
  if(c == 1){return `<span class="text-green">T???m duy???t</span>`}else
  if(c == 2){return `<span class="text-red">???? h???y</span>`}
}


function padLeadingZeros(c, size) {
    return c.toString().padStart(size, '0');
}


/*On change time*/
//var split_update_time_start = update_time_start.value.split('-');
//var split_update_time_end = update_time_end.value.split('-');

function changeTimeStart(){
      window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}`;
}      
function changeTimeEnd(){
      window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?update_time_start=${update_time_start.value}&update_time_end=${update_time_end.value}&merchant=${merchant}`;
}

function getMerchant(c){
      if(c.match(/shopee/g)){
            return 'shopee'
      }else
      if(c.match(/lazada/g)){
            return 'lazada_kol'
      }else
      if(c.match(/tiki/g)){
            return 'tikivn'
      }else{return ''}
}

function quickTime(c){
      console.log(c.value)
      if(c.value === 'thisMonth'){quickThisMonth()}else
      if(c.value === 'lastMonth'){quickLastMonth()}
}

function quickThisMonth(){
      window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${thisYear }-${thisMonth}-01&update_time_end=${thisYear}-${thisMonth}-${thisDate}&merchant=${merchant}`;
}
function quickLastMonth(){
      window.location.href = `${window.location.href.replaceAll(/\?.+/g,'')}?ctv_id=${ctv_id}&update_time_start=${thisYear}-${thisMonth-1}-01&update_time_end=${thisYear}-${thisMonth-1}-${getDayOfMonth(thisMonth-1)}&merchant=${merchant}`;
}



function getDayOfMonth(c){
      if(c == 2){return 28}else
      if(c == 1 || c == 3 || c == 5 || c == 7 || c == 8 || c == 10 || c == 12){return 31}else{return 30}
}
/*
      var update_time_start = document.getElementById('update_time_start');
      var update_time_end = document.getElementById('update_time_end');
      var split_update_time_start = update_time_start.value.split('-');
      var split_update_time_end = update_time_end.value.split('-');
      
      if(split_update_time_start[0] == split_update_time_end[0]){
            if(parseInt(split_update_time_end[1]) - parseInt(split_update_time_start[1]) == 1){
                  if(parseInt(split_update_time_start[2]) < parseInt(split_update_time_end[2])){
                        update_time_start.value = update_time_start.value.replaceAll(/[0-9]{2}$/g, param_time_end.match(/[0-9]{2}$/g))
                  }
            }else
            if(parseInt(split_update_time_end[1]) - parseInt(split_update_time_start[1]) >= 2){
                  if(parseInt(split_update_time_start[2]) < parseInt(split_update_time_end[2])){
                        update_time_start.value = update_time_start.value.replaceAll(split_update_time_start[2], split_update_time_end[2]).replaceAll(/[0-9]{2}$/g, param_time_end.match(/[0-9]{2}$/g))
                  }
            }
      }
      
*/
