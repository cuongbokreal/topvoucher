var innerDoanhThu = document.getElementById('innerDoanhThu');
let dataInnerDoanhThu = "";
for(let i=0; i<dataDoanhThu.length;i++){
  dataInnerDoanhThu += `<tr>
                <td>${dataDoanhThu[i].nhaQuangCao}</td>
                <td>${dataDoanhThu[i].giaTriDonHang}</td>
                <td>${dataDoanhThu[i].hoaHong}</td>
                <td><span class="text-green">${dataDoanhThu[i].duocThanhToan}</span></td>
                <td><span class="text-red">${dataDoanhThu[i].daHuy}</span></td>
                <td><span class="text-orange">${dataDoanhThu[i].choXuly}</span></td>
              </tr>`;
}
innerDoanhThu.innerHTML = dataInnerDoanhThu;

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
