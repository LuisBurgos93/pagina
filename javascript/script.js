class veriStrings{
	constructor(name, lastname1, lastname2, phone, cardno, date){
		this._name = name;
		this._lastname1 = lastname1;
		this._lastname2 = lastname2;
		this._phone = phone;
		this._cardno = cardno; 
		this._date = date;
	}

	get values(){
		return this._name+this._lastname1+this._lastname2+this._phone+this._cardno+this._date;
	}


	validateNames(){
			if((/^[a-zA-Z\s]+$/.test(this._name)) && (/^[a-zA-Z\s]+$/.test(this._lastname1)) && (/^[a-zA-Z\s]+$/.test(this._lastname2))){
				 
				 //alert("basue");
				 return true;
				}
				else{
					
					return false;
				}
	}



	validatePhone(){
			if(/^[0-9\s]+$/.test(this._phone)){
				 //alert("basue");
				 return true;
				}
				else{
					return false;
				}
	}

	validateCard(){
		if(/^[0-9]+$/.test(this._cardno)){
				 //alert("basue");
				 return true;
				}
				else{
					return false;
				}
	}


	validateDate(){
		if(/^[0-9//]+$/.test(this._date)){
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
	var name = document.getElementById("display-name").value;
	var lastname1 = document.getElementById("display-lastname1").value;
	var lastname2 = document.getElementById("display-lastname2").value;
	var phone = document.getElementById("display-phone").value;
	var cardno = document.getElementById("display-cardnumber").value;
	var date = document.getElementById("display-expireddate").value;
	const verif = new veriStrings(name, lastname1, lastname2, phone, cardno, date);
	console.log(verif.values);
	if(verif.validateNames()){
		document.getElementById("nuevo").innerHTML = verif.values;
	}else{
		alert("* algun campo de nombre, ap. paterno o ap. materno tiene caracteres no validos.");
	}
	if(verif.validatePhone()){
		document.getElementById("nuevo").innerHTML = verif.values;}
	else{
		alert("* Telefono tiene caracteres no validos");
	}
	if(verif.validateCard()){
		document.getElementById("nuevo").innerHTML = verif.values;
	}else{
		alert("* Tarjeta tiene caracteres no validos");
	}

	if(verif.validateNames(), verif.validatePhone(), verif.validateCard()){
			window.location.href = './index.html';
	}


}
