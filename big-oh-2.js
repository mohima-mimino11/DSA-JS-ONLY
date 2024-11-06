function addUpTo2(n){
    return n * (n+1) / 2 // sum of natural numbers formula
    // NO MATTER WHAT THE n VALUE IS THERE WILL BE ONLY 3 OPERATIONS.
}

// console.log(addUpTo2(6));
var t1 = performance.now();
addUpTo2(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);