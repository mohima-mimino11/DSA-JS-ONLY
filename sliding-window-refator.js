function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num){
    return null;
  }
  for(let i = 0; i < num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  console.log(tempSum);
  
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i]; 
    maxSum = Math.max(maxSum, tempSum);
    console.log(tempSum, maxSum);
    
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// time complexity - O(N)