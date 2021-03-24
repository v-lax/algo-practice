// Given an integer array arr, return the mean of the remaining integers after removing 
//the smallest 5% and the largest 5% of the elements.

function trimMean(arr){
  let sum = 0;
  let from = arr.length*.05;  
  arr.sort((a,b)=>{
    return a-b;
  });
  
  for(let i=from;i<arr.length-from;i++){
    sum+=arr[i]
  }
  
  return sum/(arr.length-from*2)
};