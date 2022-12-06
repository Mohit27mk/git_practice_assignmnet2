function checkPrime(num){
	flag = true;
	if(num == 1){
		flag = false
	}	
	else {
		for(i=2;i<Math.sqrt(num);i++){
			if(num% i == 0){
			flag  = false;
			}
			else {
			flag = true;
			}

		}
	}
	if (flag == true ){
	console.log(" prime ")
	}
	else {
	console.log( "not prime")
	}

}
checkPrime(1);