let someVarName;
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

function populateStorage(name, lastname1, lastname2, phone, cardno, date, address){
	localStorage.setItem('nameKey', name);
  	localStorage.setItem('lastname1Key', lastname1);
 	localStorage.setItem('lastname2Key', lastname2);
 	localStorage.setItem('phoneKey', phone);
  	localStorage.setItem('cardnoKey', cardno);
 	localStorage.setItem('dateKey', date);
 	localStorage.setItem('addressKey', address);

}
//principal

function myFunction(){
	var name = document.getElementById("display-name").value;
	var lastname1 = document.getElementById("display-lastname1").value;
	var lastname2 = document.getElementById("display-lastname2").value;
	var phone = document.getElementById("display-phone").value;
	var cardno = document.getElementById("display-cardnumber").value;
	var date = document.getElementById("display-expireddate").value;
	var address = document.getElementById("display-address").value;
	let bo = true;
	const verif = new veriStrings(name, lastname1, lastname2, phone, cardno, date);
	if(verif.validateNames()){
		console.log(bo);
	}else{
		bo = false;
		alert("* algun campo de nombre, ap. paterno o ap. materno tiene caracteres no validos.");
	}
	if(verif.validatePhone()){}
	else{
		bo = false;
		alert("* Telefono tiene caracteres no validos");
	}
	if(verif.validateCard()){

	}else{
		bo = false;
		alert("* Tarjeta tiene caracteres no validos");
	}
	if (bo == true){
		console.log("hola ")
		populateStorage(name, lastname1, lastname2, phone, cardno, date, address);
		window.location.href = './validated.html';
	}



}

function displayfu(){
	name = localStorage.getItem("nameKey");
	lastname1 = localStorage.getItem('lastname1Key');
 	lastname2 = localStorage.getItem('lastname2Key');
 	phone = localStorage.getItem('phoneKey');
 	address = localStorage.getItem('addressKey');
 	console.log(name);
 	name = name + ' ' + lastname1 + ' ' + lastname2;
 	document.getElementById("name").innerHTML = name;
 	document.getElementById("address").innerHTML = address;
 	document.getElementById("phone").innerHTML = phone;

}