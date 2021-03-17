function goodTriplets(arr,a,b,c){
  let count = 0;
  for(let i=0;i<arr.length;i++){
    let val1=arr[i];
    for(let j=i+1;j<arr.length;j++){
      let val2=arr[j];
      for(let k=j+1;k<arr.length;k++){
        if((Math.abs(val1-val2)<=a)&&
        (Math.abs(val2-val3)<=b)&&
        (Math.abs(val1-val3)<=c)){
          count++;
        }
      }
    }
  }
  return count++;
}