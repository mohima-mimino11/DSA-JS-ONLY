function addUpTo(n){
    let total = 0
    for(let i= 0; i<= n; i++){
        total += i // here total gets add up with i as long as i is not greater than n. 
        // ALSO HERE WE WILL GET n OPERATIONS FOR n Values
    }
    // console.log(total);
    return total;
}



// console.log(addUpTo(6));




var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);