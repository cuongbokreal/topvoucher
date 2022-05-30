var messengerLogo = `<svg width="15px" height="15px" viewBox="0 0 60 60" cursor="pointer"><svg x="0" y="0" width="60px" height="60px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><circle fill="#67b868" cx="30" cy="30" r="30"></circle><svg x="10" y="10"><g transform="translate(0.000000, -10.000000)" fill="#FFFFFF"><g id="logo" transform="translate(0.000000, 10.000000)"><path d="M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"></path></g></g></svg></g></g></svg></svg>`;

document.getElementById('main').innerHTML = `

  <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
  <div class="flex-grow overflow-hidden h-full flex flex-col">
    <div id="navmobile" style="display:none">
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
                <th>Chuyển đổi phát sinh</th>
                <th>Giá trị đơn hàng</th>
                <th>Hoa hồng</th>
                <th>Được duyệt</th>
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
                <th>Đã rút</th>
                <th>Số dư trong tháng</th>
              </tr>
            </thead>
            <thead id="innerThanhToan"></thead>
            <thead id="totalThanhToan" class="bg-info"></thead>
          </table>
          <p style="font-size: 10px;">* Đơn hàng sẽ được cập nhật vào 12H-22H hôm sau</p>
          <br/>
          <p class="form-control text-gray-900 text-lg dark:text-white" style="background-color: #e9ecef">Tool Product link: <span id="url_product_link"></span></p>
          <br/>
          <div class="doanhthu ">
            <p class="text-gray-900 text-lg dark:text-white">Chính sách thanh toán:</p>
            <p>1. Để thanh toán, doanh thu của Publisher chỉ cần đạt tối thiểu hạn mức 100.000/1 kỳ thanh toán. Sẽ cộng dồn vào tháng tiếp theo nếu chưa đủ hạn mức thanh toán.</p>
            <p>2. Được thanh toán doanh thu phát sinh trực tiếp từ các Dịch vụ hợp tác cùng Bên A trong tháng T0 (từ ngày 1 -30 của tháng) vào ngày T1+22 (vào ngày 22 tháng sau).</p>
            <p>3. Để thanh toán, hãy liên hệ <a target="_blank" href="https://www.facebook.com/107717958481657/?ref=cuongbokit.blogspot.com">Facebook Page</a> hoặc biểu tượng ${messengerLogo} bên cạnh (T2-T7 8H-21H)</p>
          </div>
        </div>
        <div id="footer">© 2021 by TopVoucher </div>
      </div>
    </div>
  </div>
</div>
`;
