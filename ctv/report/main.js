function doanhthu(){
  document.getElementById("donhang").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("donhang")[0].style.display='block';
  document.getElementsByClassName("doanhthu")[0].style.display='none';
}
function thanhtoan(){
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("donhang").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("donhang")[0].style.display='none';
  document.getElementsByClassName("doanhthu")[0].style.display='block';
}
