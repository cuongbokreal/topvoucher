document.getElementById('main').innerHTML = `

  <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
  <div class="flex-grow overflow-hidden h-full flex flex-col">
    <div id="navmobile">
        <header class="block">
                <ul class="header-menu horizontal-list">
                    <li>
                        <a class="header-menu-tab" href="/"><span class="icon entypo-cog scnd-font-color"></span>Trang chủ</a>
                    </li>
                    <li class="active">
                        <a class="header-menu-tab" href="#2"><span class="icon fontawesome-user scnd-font-color"></span>Báo cáo</a>
                    </li>
                </ul>
            </header>
      </div>
    <div class="flex-grow flex overflow-x-hidden">
      <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
          <div class="flex w-full items-center">
            <div class="flex items-center text-lg text-gray-900 dark:text-white">
              <!--img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" class="w-12 mr-4 rounded-full" alt="profile" /-->
              Overview 
            </div>
            <div class="ml-auto items-center justify-end">
              <div class="text-right total">
                <div id="total-1">
                  <div class="text-xs text-gray-400 dark:text-gray-400">Hoa hồng phát sinh:</div>
                  <div id="innerHoaHong" class="text-gray-900 text-lg dark:text-white"> </div>
                </div>
                <div id="total-2">
                  <div class="text-xs text-gray-400 dark:text-gray-400">Giá trị chuyển đổi phát sinh:</div>
                  <div id="innerChuyenDoi" class="text-gray-900 text-lg dark:text-white"> </div>
                </div>  
              </div>
            </div>
          </div>
          <div id="innerPubName"></div>
          <br/>
          <div class="flex items-center space-x-3 sm:mt-7 mt-4">
            <a href="#" class="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5" onclick="doanhthu()" id="doanhthu">Doanh thu</a>
            <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5" onclick="thanhtoan()" id="thanhtoan">Thanh toán</a>
          </div>
        </div>
        <div class="sm:p-7 p-4">

          <table class="table-wrapper doanhthu">
            <thead id="tableTop">
              <tr>
                <th>Advertisers</th>
                <th>Giá trị đơn hàng</th>
                <th>Hoa hồng</th>
                <th>Được thanh toán</th>
                <th>Đã hủy</th>
                <th>Chờ xử lý</th>
              </tr>
            </thead>
            <thead id="innerDoanhThu"></thead>
            <thead id="totalDoanhThu" class="bg-info"></thead>
          </table>
          
           <table class="table-wrapper thanhtoan" style="display:none">
            <thead id="tableTop">
              <tr>
                <th>Tháng đối soát</th>
                <th>Tổng hoa hồng được duyệt</th>
                <th>Đã Thanh Toán</th>
                <th>Số dư trong tháng</th>
              </tr>
            </thead>
            <thead id="innerThanhToan"></thead>
            <thead id="totalThanhToan" class="bg-info"></thead>
          </table><br/>
          <div class="doanhthu ">
            <p class="text-gray-900 text-lg dark:text-white">Chính sách thanh toán:</p>
            <p>1. Để thanh toán, doanh thu của Publisher chỉ cần đạt tối thiểu hạn mức 100.000/1 kỳ thanh toán. Sẽ cộng dồn vào tháng tiếp theo nếu chưa đủ hạn mức thanh toán.</p>
            <p>2. Được thanh toán doanh thu phát sinh trực tiếp từ các Dịch vụ hợp tác cùng Bên A trong tháng T0 (từ ngày 1 -30 của tháng) vào ngày T1+22 (vào ngày 22 tháng sau).</p>
            <p>Để thanh toán, hãy liên hệ <a target="_blank" href="https://www.facebook.com/107717958481657/?ref=cuongbokit.blogspot.com">Facebook Page</a> hoặc biểu tượng Messenger bên cạnh (T2-T7 8H-21H)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
