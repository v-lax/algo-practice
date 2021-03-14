function jewelCount(jewels,stones){
  let stoneArr = jewels.split("");
  let count = 0;
  for(let i=0;i<stones.length;i++){
    if(stoneArr.indexOf(stones[i])>=0){
      count++;
    }
  }
  return count
}