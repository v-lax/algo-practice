function evenNumberCount(nums){
  let evenCount = 0;
  for(let i=0;i<nums.length;i++){
    let digitCount = 0; 
    while(nums[i]>0){
      nums[i]=Math.floor(nums[1]/10);
      digitCount++;
    };
    if(digitCount%2===0){
      evenCount++;
    }
  };
  return evenCount; 
}