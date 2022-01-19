var thbao = document.getElementById('thbao').value;


function login(){
  var loginTk = document.getElementById('loginTk').value;
  var loginMk = document.getElementById('loginMk').value;
  
    if(loginTk == dataUser[loginTk].tk && loginMk == dataUser[loginTk].mk){
      window.location.href = `././report/${loginTk}/?ctv=true`;
    }else{thbao.innerHTML = `Sai id hoặc mật khẩu!`}
}
