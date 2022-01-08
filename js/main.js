var mainVoucher = document.getElementById('main-voucher');

var headingImg = document.getElementById('heading-img');
var listInnerHeadingImg = [
           {"title":"Khung gio san sale","imgUrl":"https://cf.shopee.vn/file/5f1f66bbcaab9cceea56f19aada91730","href":"#"},
           {"title":"Tien Linh","imgUrl":"https://cf.shopee.vn/file/ff05de1b35567f98747bc661d3386637","href":"https://shorten.asia/RNaBWz64"},
]
var randomHeadingImg = Math.floor(Math.random() * listInnerHeadingImg.length);
document.getElementById('heading-banner').innerHTML = `<a target="_blank" alt="${listInnerHeadingImg[randomHeadingImg].title}" title="${listInnerHeadingImg[randomHeadingImg].title}" href="${listInnerHeadingImg[randomHeadingImg].href}"><img id="heading-img" src="${listInnerHeadingImg[randomHeadingImg].imgUrl}" class="mt-3 d-block w-100 rounded"></a>`;

var innerMainVoucher = ``;
if (innerMainVoucher.length > 3){mainVoucher.innerHTML = innerMainVoucher}


var updateTime = new Date(); //updateTime
var updateDate = updateTime.getDate();
var updateMonth = updateTime.getMonth() + 1;
var updateYear = updateTime.getFullYear();

var date = document.querySelector('#date');
date.innerText = `${updateTime.getDate()}.${updateTime.getMonth() + 1}`

var newMemberVoucher = document.getElementById('new-member-voucher');

if(updateDate < 10 ){updateDate = `0${updateDate}`}
if(updateMonth < 10){updateMonth = `0${updateMonth}`}
var codeGiamBan20k = `${updateDate}${updateMonth}GIAMBAN20K`;
var giamBan20k = `<div class="row mb-3">
           <div class="col-4">
              <div class="voucher">
                   <svg enable-background="new 0 0 54 61" viewBox="0 0 54 61" role="img" class="stardust-icon stardust-icon-shopee _3T1K2M"><path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"></path></svg>
                 <div>GIẢM 20K</div>
              </div>
           </div>
           <div class="col-6">
               <div><b>Giảm tối đa 20K cho đơn hàng từ 0Đ</b></div>
               <div class="mt-2"><span class="badge bg-danger">Khách hàng mới</span></div>
               <div class="mt-2"><small class="text-muted">Có hiệu lực từ <span id="hieuluc3">${updateDate}.${updateMonth}</span></small></div>
           </div>
           <div class="col-2">
               <center><button data-href="https://trumgiamgia.tk/voucher-details/?vc_title=[SHOPEE]%20Giảm%20tối%20đa%2020K%20cho%20đơn%20hàng%20hợp%20lệ%20từ%200Đ%20trên%20ứng%20dụng%20Shopee&vc_des=Mã%20giảm%20tối%20đa%2020K%20cho%20đơn%20hàng%20hợp%20lệ%20từ%200Đ%20trên%20ứng%20dụng%20Shopee%20%20HSD:%20${updateDate}/${updateMonth}/${updateYear}%2000:00%20-%20${updateDate}/${updateMonth}/${updateYear}%2023:59%20%20Số%20lượng%20có%20hạn%20%20Mỗi%20khách%20hàng%20chỉ%20sử%20dụng%201%20lần.&vc_brand=Shopee.vn&vc_code=${window.btoa(codeGiamBan20k)}=&vc_brand_image=https://content.accesstrade.vn/adv/1639583427_avatar_1639583427.gif&vc_href=aHR0cHM6Ly9zaG9wZWUudm4v" onclick="window.open(this.getAttribute('data-href'))" type="button" class="btn btn-danger">Nhận</button></center>
           </div>
       </div>`;
var codeGiamBan25k = `${updateDate}${updateMonth}GIAMBAN25K`;
var giamBan25k = `<div class="row mb-3">
           <div class="col-4">
              <div class="voucher">
                   <svg enable-background="new 0 0 54 61" viewBox="0 0 54 61" role="img" class="stardust-icon stardust-icon-shopee _3T1K2M"><path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"></path></svg>
                 <div>GIẢM 20K</div>
              </div>
           </div>
           <div class="col-6">
               <div><b>Giảm tối đa 25K cho đơn hàng từ 99k</b></div>
               <div class="mt-2"><span class="badge bg-danger">Khách hàng mới</span></div>
               <div class="mt-2"><small class="text-muted">Có hiệu lực từ <span id="hieuluc3">${updateDate}.${updateMonth}</span></small></div>
           </div>
           <div class="col-2">
               <center><button data-href="https://trumgiamgia.tk/voucher-details/?vc_title=[SHOPEE]%20Giảm%20tối%20đa%2025K%20cho%20đơn%20hàng%20hợp%20lệ%20từ%2099K%20trên%20ứng%20dụng%20Shopee&vc_des=Mã%20giảm%20tối%20đa%2020K%20cho%20đơn%20hàng%20hợp%20lệ%20từ%200Đ%20trên%20ứng%20dụng%20Shopee%20%20HSD:%20${updateDate}/${updateMonth}/${updateYear}%2000:00%20-%20${updateDate}/${updateMonth}/${updateYear}%2023:59%20%20Số%20lượng%20có%20hạn%20%20Mỗi%20khách%20hàng%20chỉ%20sử%20dụng%201%20lần.&vc_brand=Shopee.vn&vc_code=${window.btoa(codeGiamBan25k)}=&vc_brand_image=https://content.accesstrade.vn/adv/1639583427_avatar_1639583427.gif&vc_href=aHR0cHM6Ly9zaG9wZWUudm4v" onclick="window.open(this.getAttribute('data-href'))" type="button" class="btn btn-danger">Nhận</button></center>
           </div>
       </div>`;

newMemberVoucher.innerHTML += giamBan20k+ `<div class="row mb-3">
           <div class="col-4">
              <div class="voucher">
                   <svg enable-background="new 0 0 54 61" viewBox="0 0 54 61" role="img" class="stardust-icon stardust-icon-shopee _3T1K2M"><path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"></path></svg>
                 <div>GIẢM 20K</div>
              </div>
           </div>
           <div class="col-6">
               <div><b>Giảm tối đa 20K cho đơn hàng từ 50k</b></div>
               <div class="mt-2"><span class="badge bg-danger">Khách hàng mới</span></div>
               <div class="mt-2"><small class="text-muted">Có hiệu lực từ <span id="hieuluc3">${updateDate}.${updateMonth} - 31.01</span></small></div>
           </div>
           <div class="col-2">
               <center><button data-href="https://trumgiamgia.tk/voucher-details/?vc_title=Giảm%20tối%20đa%2020K%20cho%20đơn%20hàng%20từ%2050K%20trên%20app%20Shopee&vc_des=Thời%20hạn%20áp%20dụng:%20đến%2030/11/2021,%2023H59%20-%20Lưu%20ý:%20Số%20lượng%20có%20hạn.%20Mỗi%20khách%20hàng%20chỉ%20sử%20dụng%201%20lần.%20Chỉ%20áp%20dụng%20cho%20Khách%20hàng%20mới.&vc_brand=shopee.vn&vc_code=VDAxTkFGTkI=&vc_brand_image=https://i.imgur.com/efrP7pQ.png&vc_href=aHR0cHM6Ly9zaG9wZWUudm4v" onclick="window.open(this.getAttribute('data-href'))" type="button" class="btn btn-danger">Nhận</button></center>
           </div>
       </div>` + giamBan25k;


var freeshipVoucher = document.getElementById('freeship-voucher');
freeshipVoucher.innerHTML += `<div class="row mb-3">
           <div class="col-4">
              <div class="voucher">
                   <svg enable-background="new 0 0 54 61" viewBox="0 0 54 61" role="img" class="stardust-icon stardust-icon-shopee _3T1K2M"><path stroke="none" d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"></path></svg>
                 <div>Freeship</div>
              </div>
           </div>
           <div class="col-6">
               <div><b>Tất cả hình thức thanh toán</b></div>
               <div class="mt-2"><span class="badge bg-danger">Giảm đến 70K</span></div>
               <div class="mt-2"><small class="text-muted">Có hiệu lực từ <span id="hieuluc3">${updateDate}.${updateMonth} - 31.01</span></small></div>
           </div>
           <div class="col-2">
               <center><button data-href="https://go.isclix.com/deep_link/5353514789844343379?url=https://shopee.vn/m/mien-phi-van-chuyen-${updateDate}${updateMonth}22" onclick="window.open(this.getAttribute('data-href'))" type="button" class="btn btn-danger">Nhận</button></center>
           </div>
       </div>`;
           
var innerBanner1 = document.getElementBtId('innerBanner1');
innerBanner1.innerHTML = `<a target="_blank" alt="Tet nhan lixi" title="Tet nhan lixi" href="https://shorten.asia/dHb3r2Jb"><img id="heading-img" src="https://cf.shopee.vn/file/de21a0b8a05855c0009d71aa396be50b" class="mt-3 d-block w-100 rounded"></a>`;

var goiSieuVoucher = document.getElementBtId('goiSieuVoucher');
goiSieuVoucher.innerHTML = `<a target="_blank" alt="Sieu Voucher" title="Sieu Voucher" href="https://shorten.asia/yycw6ufr"><img id="heading-img" src="https://cf.shopee.vn/file/729a370af21e5eae8040ec72bba1d3ab" class="mt-3 d-block w-100 rounded"></a>`;

function getCode(){
window.open(this.getAttribute('data-href'));
}
