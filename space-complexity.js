function sum(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){ //space complexity is O(1)
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 3, 4]));


function double(arr1){
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){ //space complexity is O(n)
    newArr.push(2 * arr1[i]);
  }
  return newArr;
}

console.log(double([1,2,3]));
