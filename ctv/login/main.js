var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1), sURLVariables = sPageURL.split('&'), sParameterName, i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
var next = getUrlParameter('next');

if(typeof next != 'undefined' && next.length >= 9){next = next}else{
  next = `https://${window.location.hostname}/ctv/report`;
}

const firebaseConfig = {
      apiKey: "AIzaSyDaZdi-_M9yN9d_kFBv1FBTs03ifASOzfA",
      authDomain: "trumgiamgia.firebaseapp.com",
      projectId: "trumgiamgia",
      storageBucket: "trumgiamgia.appspot.com",
      messagingSenderId: "847348910930",
      appId: "1:847348910930:web:2b313fb8051d8d95dfc88b",
      measurementId: "G-J3E3VC8HGG"
    };
firebase.initializeApp(firebaseConfig);
firebase.analytics();



var getThbao = document.querySelector("#thbao");
var getSubmit = document.querySelector("#submit");

getSubmit.addEventListener("click", (myFunction) => {
  getThbao.innerText = '';
  var getUsername = document.querySelector("#username").value;
  var getPassword = document.querySelector("#password").value;
  
  if(getUsername.length != 0 && getPassword.length != 0){
    var userData = firebase.database().ref('users/'+ getUsername);
    userData.on('value', (snapshot) => {
      let data = snapshot.val();
      if(data === null){
        //Không tìm thấy id
        getThbao.innerText = 'Tên đăng nhập hoặc Email không đúng';
      }
      else{
        if(getPassword === data.password){
          setCookie('ctv_id', getUsername, 30);
          getThbao.innerText = 'Đăng nhập thành công!';
          console.log('login thành công');
          window.location.href = next;
        }else{
          getThbao.innerText = 'Mật khẩu sai';
        }
      }
    });
      
    }else{
      getThbao.innerText = 'Không để trống tài khoản hoặc mật khẩu';
    }
    
  
})
