function checkPerfectNumber(number){
let total = 0;


for ( let counter = 1; counter < number; counter += 1 ){
  if (number % counter == 0 ){
      total += counter;     
    }
}  

  if (total == number){
    return true;

   }
   else{
   return false;
   }

}


console.log(checkPerfectNumber(28));
