function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
}
console.log(printAllPairs(8));

function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {  // this will run the loop n times leading the function to be O(n)
      console.log(i);
    }
}

console.log(logAtLeast5(4));

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) { // this will run the loop 5 times or less when n is less than 5 regardless of the 1000times bigger value of n leading the function to be O(1)
    console.log(i);
  }
}

console.log(logAtMost5(3));