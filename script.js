// tu codigo va aca

function callbackPromedio(a, b, c, callback) {
	var suma = (a + b + c)/3;
	return callback (suma);
}


var contador = 1;
function segundero() {
	document.getElementById("titulo").innerHTML = "5";
}
setInterval(segundero, 1000);