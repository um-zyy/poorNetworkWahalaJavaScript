function climbStairs(totalSteps) {
let counter = 1;
while ( counter < totalSteps ) {
    counter++;
}
let count = 0;
for ( countt = 0; countt < totalSteps; countt +=2 ) {
    count += 1;
}
return counter + count;
}

console.log(climbStairs(5));
