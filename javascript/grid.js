console.log("pdsa");

function myFunction() {
    var x = document.getElementById("myText").value;
    if(isNaN(x) === true){
    	x=x*x;
		document.getElementById("demo").innerHTML = x;
    }else
    document.getElementById("demo").innerHTML = x;
}

console.log(busc);