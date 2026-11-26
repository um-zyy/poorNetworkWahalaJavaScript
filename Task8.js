function countPrimes(number) {
let ccount = 0;
for (count = 1; count <= number; count++) {
    let primeCounter = 0;
    for (counter = 1; counter <= number; counter++) {
        if ( count % counter == 0) {
            primeCounter++;
            }
        }
     if (primeCounter == 2) {
        ccount++;
    }  
    
}
return ccount;
}

console.log(countPrimes(10));
