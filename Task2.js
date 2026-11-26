function isPowerOfTwo(number){
	output = false;
	for (let power = 1; power <= number; power++){
		multiple = 2 ** power;
		if (multiple === number) {
			output = true;
		}
	}
	return output;
}




console.log (isPowerOfTwo(16))

