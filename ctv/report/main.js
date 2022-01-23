var innerDoanhThu = document.getElementById('innerDoanhThu');
let dataInnerDoanhThu = "";
var totalGiaTriDonHang =0;var totalHoaHong =0;var totalDuocThanhToan =0;var totalDaHuy =0;var totalChoXuly =0;
var choXuly = 0;
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
document.getElementById('innerHoaHong').innerHTML = parseFloat(totalHoaHong.toFixed(0)).toLocaleString() +' VNĐ';
document.getElementById('innerChuyenDoi').innerHTML = (totalGiaTriDonHang.toLocaleString())+' VNĐ';

var innerThanhToan = document.getElementById('innerThanhToan');
let dataInnerThanhToan = "";
for(let i=0; i<dataThanhToan.length;i++){
  dataInnerThanhToan += `<tr>
                <td>${dataThanhToan[i].thangDoiSoat}</td>
                <td>${dataThanhToan[i].hoaHongDuocDuyet}</td>
                <td>${dataThanhToan[i].daThanhToan}</td>
                <td>${dataThanhToan[i].soDu}</td>
              </tr>`;
}
innerThanhToan.innerHTML = dataInnerThanhToan;


function doanhthu(){
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='block';
  document.getElementsByClassName("thanhtoan")[0].style.display='none';
}
function thanhtoan(){
  document.getElementById("thanhtoan").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("doanhthu")[0].style.display='none';
  document.getElementsByClassName("thanhtoan")[0].style.display='block';
}
