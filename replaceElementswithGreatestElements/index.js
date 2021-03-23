//given an array, replace every element in that array with the greatest element among the elements to its right,
//and replace the last element with -1. then return the array

function replaceElements (arr){
  //remove the first element from the array
  arr.splice(0,1);
  
  //push -1 to the end of the array
  arr.push(-1);

  //set our iniatial max value to -infinity
  let maxVal = -Infinity
  
  //loop through each value in the array. compare the current value to the maxvalue. If the current value
  //is greater than the max then set the maxValue to the currentvalue and reset the current value to the new max value.
  for(let i=arr.length-1;i>=0;i--){
    maxVal = Math.max(arr[i],maxVal);
    arr[i]=maxVal; 
  };

  return arr
};