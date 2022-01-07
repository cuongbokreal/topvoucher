var updateTime = new Date(); //updateTime
var updateDate = updateTime.getDate();
var updateMonth = updateTime.getMonth() + 1;

var date = document.querySelector('#date');
date.innerText = `${updateTime.getDate()}.${updateTime.getMonth() + 1}`
