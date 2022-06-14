var dataVoucher = '';

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}
  throw new Error("Could not create HTTP request object.");
}
var request = makeHttpObject();
request.open("GET", 'https://topvoucher.tk/ctv/tools/tong-hop/data.js', true);
request.send(null);
request.onreadystatechange =  function() {
  if (request.readyState == 4){
    dataVoucher = request.responseText;
  }
}

console.log(dataVoucher)

