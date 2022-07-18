const tiLe = 80/100;
var innerChinhSachHoaHongShopee = `<tr><td>Category</td><td>Khách hàng mới (%)</td><td>Khách hàng cũ (%)</td></tr>`;
  for(let i=0;i<dataChinhSachHoaHong[0].shopee.length;i++){
    innerChinhSachHoaHongShopee +=`<tr><td>${dataChinhSachHoaHong[0].shopee[i].cate}</td><td>${(dataChinhSachHoaHong[0].shopee[i].nc * tiLe).toFixed(1)}</td><td>${(dataChinhSachHoaHong[0].shopee[i].ec * tiLe).toFixed(1)}</td></tr>`;
  }
var innerChinhSachHoaHongTiki = `<tr><td>Category</td><td>Web (%)</td><td>App (%)</td></tr>`;
  for(let i=0;i<dataChinhSachHoaHong[1].tiki.length;i++){
    innerChinhSachHoaHongTiki +=`<tr><td>${dataChinhSachHoaHong[1].tiki[i].cate}</td><td>${(dataChinhSachHoaHong[1].tiki[i].web * tiLe).toFixed(1)}</td><td>${(dataChinhSachHoaHong[1].tiki[i].app * tiLe).toFixed(1)}</td></tr>`;
  }
var innerChinhSachHoaHongLazada = `<tr><td>Category</td><td>Khách hàng mới (%)</td><td>Khách hàng cũ (%)</td></tr>`;
for(let i=0;i<dataChinhSachHoaHong[2].lazada.length;i++){
    innerChinhSachHoaHongLazada +=`<tr><td>${dataChinhSachHoaHong[2].lazada[i].cate}</td><td>${(dataChinhSachHoaHong[2].lazada[i].nc * tiLe).toFixed(1)}</td><td>${(dataChinhSachHoaHong[2].lazada[i].ec * tiLe).toFixed(1)}</td></tr>`;
  }

  document.getElementById('innerChinhSachHoaHong').innerHTML = `Shopee: <br/> <table>${innerChinhSachHoaHongShopee}</table>Hoa hồng tối đa trên 1 đơn hàng: 202.000 VND<br/><br/>
                                                                Tiki: <br/> <table>${innerChinhSachHoaHongTiki}</table><br/>
                                                                Lazada: <br/> <table>${innerChinhSachHoaHongLazada}</table>
                                                                Hoa hồng tối đa trên 1 đơn hàng: 80.000 VND
                                                                `;
