function negativeNumbers(grid){
  let count=0;
  for(let i=0;i<grid.length;i++){
    let numArray = grid[i]
    for(let j=numArray.length-1;j>=0;j--){
      if(numArray[j]>=0){
        break;
      }else{
        count++;
      }
    }
  };
  return count 
}