
class mergeSort{
	constructor(){
	}

	get list(){
		return this._value;
	}

	sort(array, l, r){
		let m;
		if(l<r){
			m = ((l+(r-1))/2);
			//console.log(l, r, m)
			this.sort(array, l, m);
			this.sort(array, m+1, r);
			this.merge(array, l, r, m);
		}
		//console.log(array);
	}

	merge(array, l, r, m){
		let n1, n2, i, j, k;
		n1 = m - l + 1;
		n2 = r - m;
		//console.log(n1,n2);
		let L =Array.from(Array(n1).keys());
		let R =Array.from(Array(n2).keys());
		for(i = 0; i < n1; i++ ){
			L[i]=array[l + i];
		}
		for(j = 0; j < n2; j++){
			R[j]=array[m + 1 + j];
		}
		i = 0, j = 0, k = l;
		while((i<n1)&&(j<n2)){
			if(L[i]<=R[j]){
				array[k] = L[i];
				i++;
			}else{
				array[k] = R[j]
				j++;
			}
			k++;
		}
		//console.log(i+' '+j+' '+k);
		while(i<n1){
			array[k] = L[i]
			i++;
			k++;
		}
		while(j<n2){
			array[k] = R[j]
			j++;
			k++;
		}
		return array;
	}
}



function displayfu(){
	console.log("hola")
	merg = new mergeSort();
	//console.log(merg.list);
	var arr = [24, 22, 12, 14, 9, 15, 32, 2];
	n = arr.length;
	merg.sort(arr, 0, n-1);
	console.log(arr);
	let lamborghini = {
	coche: 'Nuevo',
	tipo: 'carro' };
	for (var key in lamborghini) {
	    console.log("User " + lamborghini[key] + " is #" + key); // "User john is #234"
		}	

}


