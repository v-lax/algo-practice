function binaryArrayToNumber(arr){
  let exponent = arr.length-1
  let sum = 0

  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      sum+=2**exponent
      exponent-=1
    }else{
      exponent-=1
    }
  }
  return sum
}