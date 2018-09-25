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
				 console.log("no hace nada");
					}
				else{
					alert("* el nombre tiene caracteres no validos.");
					}
				}

	validatePhone(){
			if(/^[0-9\s]+$/.test(this._telefono)){
				document.getElementById("nuevo").innerHTML = this._numero;
			}else{
				alert("* el numero no es valido");
			}
	}

}

//principal

function validate(){
	x = document.getElementById("display-name").value;
	y = document.getElementById("disabled-ip").value;
	console.log(x+"   "+y);
	const newValidation = new veriStrings(x, y);
	if((newValidation.nombre === "")&&(newValidation.telefono === "")){
		alert("debes introducir al menos un campo");
	}else if((newValidation.nombre != "")&&(newValidation.numero === "")) {
		newValidation.validateName();
	}else if((newValidation.nombre === "")&&(newValidation.numero != "")) {
		newValidation.validatePhone();
	}else{
		newValidation.validateName();
		newValidation.validatePhone();
	}
	console.log(newValidation.validateName());

}