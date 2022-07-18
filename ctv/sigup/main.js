if(getCookie('ctv_id')){window.location.href= "/ctv/login";}

firebase.initializeApp(firebaseConfig);
firebase.analytics();


// var dbRef = firebase.database().ref().child('users');
// dbRef.on('value', snap => console.log(snap.val()));

// var userData = firebase.database().ref('users/');
// userData.on('value', (snapshot) => {
//   const data = snapshot.val();
//   if(data === null){console.log('cc')}else{console.log(data)}
// });


var getThbao = document.querySelector("#thbao");
var getSubmit = document.querySelector("#submit");

function writeUserData(name, email, social, username, password){
  var updateTime = new Date(); //updateTime
  var timeSigup = `${updateTime.getFullYear()}-${addZero(updateTime.getMonth() + 1)}-${addZero(updateTime.getDate())}`;
      firebase.database().ref('users/' + username).set({
        name: name,
        email: email,
        social: social,
        username: username,
        password: password,
        sigupTime: timeSigup,
        verification: 0,
        avt : `https://avatars.abstractapi.com/v1/?api_key=8a314bbcb61e421cb964506cda5772e3&name=${name}`
      });
}
//writeUserData('Cuongbok', 'ngcuongbok@gmail.com', 'https://fb.me/cuongbok', 'cuongbok', 'cuongbok')

getSubmit.addEventListener("click", (myFunction) => {
  var getName = document.querySelector("#name").value;
  var getEmail = document.querySelector("#email").value;
  var getSocial = document.querySelector("#social").value;
  var getUsername = document.querySelector("#username").value;
  var getPassword = document.querySelector("#password").value;
  var getRepassword = document.querySelector("#repassword").value;
  

    
    if(getName.length != 0 && getEmail != 0 && getSocial != 0 && getUsername != 0 && getPassword != 0 && getRepassword != 0){
      //Điền đầy đủ thông tin
      if(getUsername.match(/\s/g)){
        //Nếu tk chưa dấu space
        getThbao.innerText = 'Tên đăng nhập không được chứa dấu cách';
      }else{
        if(getUsername.length >= 6){
          //Nếu tk length >= 6
          if(getPassword.length >= 6){
            //Nếu mật khẩu dài hơn 6
            var checkUser = firebase.database().ref(`users/${getUsername}`)
            checkUser.on('value', (snapshot) => {
              let data = snapshot.val();
              if(data === null){
              //Tài khoản unique, có thể đăng kí được
              getThbao.innerText = '';
                if(getPassword === getRepassword){
                  //Nhập lại mật khẩu đúng, nhập dữ liệu zo database
                  writeUserData(getName, getEmail, getSocial, getUsername, getPassword);
                  getThbao.innerHTML = 'Đăng kí thành công, đăng nhập <a href="/ctv/login">tại đây</a>';
                  window.location.href= "/ctv/login";
                }else{
                  //Nhập lại sai mật khẩu
                  getThbao.innerText = 'Mật khẩu nhập lại không trùng khớp';
                }
              }else{
                //Tên tài khoản (username) đã được đăng kí
                getThbao.innerText = 'Tên đăng nhập đã tồn tại';
              }
            });
          }else{getThbao.innerText = 'Mật khẩu cần dài hơn';}
        }else{
          getThbao.innerText = 'Tên đăng nhập cần số kí tự >6';
        }
      }
    }else{
      //Điền thiếu thông tin
      getThbao.innerText = 'Nhập đầy đủ thông tin';
    }
});

function addZero(c){
  if(c.toString().length === 1){
    return `0${c}`;
  }else
  if(c.toString().length >= 1){
    return c
  }
}
