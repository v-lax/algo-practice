function kidsWithCandies(candies,extraCandies){
  let maxVal = Math.max(...candies);
  let boolArr=[];

  for(let i=0;i<candies.length;i++){
    if(candies[i]+extraCandies>=maxVal){
      boolArr.push(true);
    }else{
      boolArr.push(false);
    }
  };
  return boolArr
}