function innerData(){
  document.getElementById('innerPubName'). innerText = pubName;
  //=== DOANH THU ===
  var innerDoanhThu = document.getElementById('innerDoanhThu');
  var totalGiaTriDonHang =0;var totalHoaHong =0;var totalDuocThanhToan =0;var totalDaHuy =0;var totalChoXuly =0;
  var choXuly = 0;
  let dataInnerDoanhThu = "";
  for(let i=0; i<dataDoanhThu.length;i++){
    choXuly = dataDoanhThu[i].hoaHong - dataDoanhThu[i].duocThanhToan - dataDoanhThu[i].daHuy;
    dataInnerDoanhThu += `<tr>
                  <td>${dataDoanhThu[i].nhaQuangCao}</td>
                  <td>${dataDoanhThu[i].giaTriDonHang.toLocaleString()}</td>
                  <td>${dataDoanhThu[i].hoaHong.toLocaleString()}</td>
                  <td><span class="text-green">${dataDoanhThu[i].duocThanhToan.toLocaleString()}</span></td>
                  <td><span class="text-red">${dataDoanhThu[i].daHuy.toLocaleString()}</span></td>
                  <td><span class="text-orange">${choXuly.toLocaleString()}</span></td>
                </tr>`;
    totalGiaTriDonHang += dataDoanhThu[i].giaTriDonHang;
    totalHoaHong += dataDoanhThu[i].hoaHong;
    totalDuocThanhToan += dataDoanhThu[i].duocThanhToan;
    totalDaHuy += dataDoanhThu[i].daHuy;
    totalChoXuly += choXuly;
  }
  innerDoanhThu.innerHTML = dataInnerDoanhThu;
  var totalDoanhThu = document.getElementById('totalDoanhThu');
  totalDoanhThu.innerHTML = `<tr>
                  <td><span class="font-w-500">Tổng</span></td>
                  <td><span class="font-w-500">${totalGiaTriDonHang.toLocaleString()}</span></td>
                  <td><span class="font-w-500">${totalHoaHong.toLocaleString()}</span></td>
                  <td><span class="text-green font-w-500">${totalDuocThanhToan.toLocaleString()}</span></td>
                  <td><span class="text-red font-w-500">${totalDaHuy.toLocaleString()}</span></td>
                  <td><span class="text-orange font-w-500">${totalChoXuly.toLocaleString()}</span></td>
                </tr>`;

  //=== TOTAL TOP ===
  document.getElementById('innerHoaHong').innerHTML = parseFloat(totalHoaHong.toFixed(0)).toLocaleString();
  document.getElementById('innerChuyenDoi').innerHTML = (totalGiaTriDonHang.toLocaleString());


  //=== THANH TOÁN ===
  var innerThanhToan = document.getElementById('innerThanhToan');
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
  }
  innerThanhToan.innerHTML = dataInnerThanhToan;
  var totalThanhToan = document.getElementById('totalThanhToan');
  totalThanhToan.innerHTML = `<tr>
                  <td><span class="font-w-500">Tổng</span></td>
                  <td><span class="text-green font-w-500">${totalHoaHongDuocDuyet.toLocaleString()}</span></td>
                  <td><span class="text-green font-w-500">${totalDaThanhToan.toLocaleString()}</span></td>
                  <td><span class="font-w-500">${totalSoDuTrongThang.toLocaleString()}</span></td>
                </tr>`;
  var total1 = document.getElementById('total-1');
  var total2 = document.getElementById('total-2');
}

setTimeout(innerData, 500);

//function chuyển tab
function doanhthu(){
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='block';
  document.getElementsByClassName("thanhtoan")[0].style.display='none';
  innerChuyenDoiTotal2()
}
function thanhtoan(){
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='none';
  document.getElementsByClassName("thanhtoan")[0].style.display='block';
  innerSoDuTotal2()
}

function innerChuyenDoiTotal2(){
  document.getElementById('total-2').innerHTML = `<div class="text-xs text-gray-400 dark:text-gray-400">Giá trị chuyển đổi phát sinh:</div>
  <div id="innerChuyenDoi" class="text-gray-900 text-lg dark:text-white">${totalGiaTriDonHang.toLocaleString()}</div>`;
}
function innerSoDuTotal2(){
  document.getElementById('total-2').innerHTML = `<div class="text-xs text-gray-400 dark:text-gray-400">Số dư::</div>
  <div id="innerChuyenDoi" class="text-gray-900 text-lg dark:text-white">${totalSoDuTrongThang.toLocaleString()}</div>`;
}
