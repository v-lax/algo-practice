function sum(nums){
  let numCount ={};
  let sum = 0
  for(let i =0;i<nums.length;i++){
    if(numCount(nums[i])){
      numCount[nums[i]]+=1
    }else{
      numsCount[nums[i]]=1
    }
  };
  for(j in numCount){
    if(numCount[j]===1){
      sum+=parseInt(j);
    }
  };
  return sum
};