var innerDoanhThu = document.getElementById('innerDoanhThu');
let dataInnerDoanhThu = "";
for(let i=0; i<dataDoanhThu.length;i++){
  dataInnerDoanhThu += `<tr>
                <th>${dataDoanhThu[i].nhaQuangCao}</th>
                <th>${dataDoanhThu[i].giaTriDonHang}</th>
                <th>${dataDoanhThu[i].hoaHong}</th>
                <th>${dataDoanhThu[i].duocThanhToan}</th>
                <th>${dataDoanhThu[i].daHuy}</th>
                <th>${dataDoanhThu[i].choXuly}</th>
              </tr>`;
}
innerDoanhThu.innerHTML = dataInnerDoanhThu;

var innerThanhToan = document.getElementById('innerThanhToan');




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
