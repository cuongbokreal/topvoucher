var updateTime = new Date(); //updateTime

var date = document.querySelector('#date');
date.innerText = `${updateTime.getDate()}.${updateTime.getMonth() + 1}`
