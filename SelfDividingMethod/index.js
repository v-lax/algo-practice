function selfDividing(left,right){
  let finalArray = [];
  for(let i=left;i<=right;i++){
    let digitArray = []
    let count = 0
    let copy = i; 
    while(copy>0){
      digitArray.push(copy%10)
      copy= Math.floor(copy/10);
    }
    for(let j=0;j<digitArray.length;j++){
      if(i%digitArray[j]===0){
        count++;
      }
    }
    if(count===digitArray.length){
      finalArray.push(i);
    }    
  };
  return finalArray;
}; 