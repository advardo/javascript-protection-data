// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
	const fs = require("fs");
	let hdd="";
	const a = 20234567;
	const b = 23456702;
	const p = 2147483647;
	const c = 76502432;
	const d = 87602543;
	let y;
	let z;
	const serialNumber = require('serial-number');
	serialNumber(function (err, value) {	
		for(i=value.length-3; i<value.length; i++) {
			hdd += value.charCodeAt(i);
		} 
		document.getElementById("serial").innerHTML = hdd;
		parseInt(hdd);
  	y = (a * hdd + b) % p;
  	z = (c * y + d) % p;
  	document.getElementById("auth").innerHTML = z;
  	let localkey = "";
  	fs.readFile('application.ini', (err, data) => {
  		if (err) throw err;
 			localkey = data;
 			parseInt(localkey);
  		if(localkey==y) 
  			document.location.href = "second.html";
  		else 
  			{
  				alert("Введите лицензионный ключ и нажмити кнопку 'enter'");
  			}
		});
	});
	function checkKey () {
		enKey = document.getElementById("key").value;
		parseInt(enKey);
		if(y==enKey) {
			document.location.href = "second.html";
			fs.writeFile("application.ini", enKey, function(err) {
    		if(err) {
        	return console.log(err);
  		  }
    		alert("Ключ был записан");
			}); 
		}
  	else 
  		{
  			alert("Неверно введен ключ");
  		}	
	};
	document.getElementById("enter").onclick = checkKey; 
	
	


