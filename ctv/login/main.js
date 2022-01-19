var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
 
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
var a = getUrlParameter('a');

var thbao = document.getElementById('thbao').value;
var loginTk = document.getElementById('loginTk');
var loginMk = document.getElementById('loginMk');

function login(){
    var loginAction = `./payment/${parseInt(tk.value)}?ctv=true`;

  if(a == 'report'){loginAction = `./report/${parseInt(tk.value)}?ctv=true`;}else
  if(a == 'payment'){loginAction = `./payment/${parseInt(tk.value)}?ctv=true`;}
  //look tk
  if(dataUser[parseInt(loginTk.value)].mk == loginMk.value){
    document.getElementById('thbao').innerHTML = 'Đăng nhập thành công!'
    window.location.replace(loginAction);
  }else{
    document.getElementById('thbao').innerHTML = 'Sai thông tin đăng nhập, vui lòng nhập lại!'
  }
    
}
