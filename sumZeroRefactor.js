function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }else if(sum > 0){
      right--;
    }else{
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4,-3, -2, -1, 0, 1, 2, 5]));
 
console.log(sumZero([ -2,  0, 1,  3]));
// Time Complexity ---> O(n)
// Space Complexity ---> O(1)