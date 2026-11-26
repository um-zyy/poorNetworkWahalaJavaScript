function reverseInteger(number){
	
	if (number >0){
	reverse = 0
	while (number>0) {
		reverseSingular = number % 10
		reverse =reverse * 10 + reverseSingular
		number = Math.floor(number/10)
	}
	}
    else {
    number = -1 * number;
    reverse = 0
	while (number>0) {
		reverseSingular = number % 10
		reverse =reverse * 10 + reverseSingular
		number = Math.floor(number/10)
	}
	reverse = reverse * -1;
	}
	
	return reverse
}
result = reverseInteger(-75645655655)
console.log (result)
