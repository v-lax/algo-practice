// Given an array of integers nums, sort the array in increasing order based on the frequency of 
//the values. If multiple values have the same frequency, 
//sort them in decreasing order.

function frequencySort(arr){
  let numCount = {};
  for(let i=0;i<arr.length;i++){
    if(numCount[arr[i]]){
      numCount[arr[i]]+=1
    }else{
      numCount[arr[i]]=1
    }
  }

  return arr.sort((a,b)=>{
    let freq1 = a.toString
    let freq2 = b.toString;
    return numCount[freq1] - numCount[freq2] || b-a;
  })
}