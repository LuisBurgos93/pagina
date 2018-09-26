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
				 
				 //alert("basue");
				 return true;
				}
				else{
					
					return false;
				}
	}

	validatePhone(){
			if(/^[0-9\s]+$/.test(this._telefono)){
				 //alert("basue");
				 return true;
				}
				else{
					return false;
				}
	}

}

//principal

function myFunction(){
	var x = document.getElementById("display-name").value;
	var y = document.getElementById("disabled-ip").value;
	const verif = new veriStrings(x,y);
	if(verif.validateName()){
		document.getElementById("nuevo").innerHTML = verif.nombre;
	}else{
		alert("* nombre tiene caracteres no validos.");
	}

	if(verif.validatePhone()){
		document.getElementById("nuevo2").innerHTML = " "+verif.telefono;
	}else{
		alert("* numero tiene caracteres no validos.");
	}

}
