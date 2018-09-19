
function myFunction() {
    var x = document.getElementById("display-name").value;
 //document.getElementById("demo").innerHTML = x;
 	if(!isNaN(x)){
    x = factorial(x);
    document.getElementById("nuevo").innerHTML = x;
	console.log(x)}
    else{
    console.log("no esta bien");
    }
}

function factorial(n){
	let fact;
	fact = 1;
	for(i = 1; i<=n; i++){
		fact=fact*i;
	}
	return fact;
}

