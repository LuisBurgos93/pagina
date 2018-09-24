
function myFunction() {
    var x = document.getElementById("display-name").value;
 //document.getElementById("demo").innerHTML = x;
 	if(!isNaN(x)){
    document.getElementById("nuevo").innerHTML = x;
	console.log(x)}
    else{
    console.log("no esta bien");
    }
}

function validateNumber() {
	const numero = document.getElementById("nombre").value;
	if(/^[a-zA-Z]+$/.test(numero))
}
