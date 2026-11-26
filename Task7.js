function isPalindromeNumber(number){
let compareTo = number;
let palindrome = 0;

while (number>0){
    palindrome = palindrome*10 + number%10;
    number = number/10;
    number = Math.floor(number);
}
if (compareTo == palindrome){
return true;
}
else {
return false;
}
}



console.log(isPalindromeNumber(12121));
