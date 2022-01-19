


function login(){
  var loginTk = document.getElementById('loginTk').value;
  var loginMk = document.getElementById('loginMk').value;
  
  for(let i=0; i<dataUser.length; i++){
    if(loginTk = dataUser[i].tk && loginMk = dataUser[i].mk){
      window.location.href = `././report/${loginTk}/?ctv=true`;
    }
  }
}
