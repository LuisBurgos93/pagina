class veriStrings{
	constructor(nombre, telefono){
		this._nombre = nombre;
		this._telefono = telefono;
	}

	get nombre(){
		return this._nombre;
	}

	get telefono(){
		return this._telefono;
	}

	validateName(){
			if(/^[a-zA-Z\s]+$/.test(this._nombre)){
				 document.getElementById("nuevo").innerHTML = this._nombre;
				 alert("basue");
				 console.log("no hace nada");
				 return 1;
					}
				else{
					alert("* el nombre tiene caracteres no validos.");
					return 2;
					}
				}

	validatePhone(){

	}

}

//principal

function validate(){
	x = document.getElementById("display-name").value;
	console.log(x);
	const newValidation = new veriStrings(x, 233456754);
	console.log(newValidation.validateName());

}