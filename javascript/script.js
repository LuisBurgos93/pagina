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
				 document.getElementById("nuevo").innerHTML = numero;
				 alert("basue");
				}
				else{
					alert("* el nombre tiene caracteres no validos.");
				}
	}

	validatePhone(){
			if(/^[0-9\s]+$/.test(this._nombre)){
				 document.getElementById("nuevo").innerHTML = numero;
				 alert("basue");
				}
				else{
					alert("* el nombre tiene caracteres no validos.");
				}
	}

}

//principal

function myFunction(){
	var x = document.getElementById("display-name").value;
	var y = document.getElementById("display-name").value;
}
