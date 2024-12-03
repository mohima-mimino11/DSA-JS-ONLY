function totalBirdCount(birdsPerDay) {
  let total = 0;
  for(let count = 0; count < birdsPerDay.length; count++){
     total += birdsPerDay[count];
     
  }
  return total;
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(birdsPerDay.length);

console.log(totalBirdCount(birdsPerDay));
