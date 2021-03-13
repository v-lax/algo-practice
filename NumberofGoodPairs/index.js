//Given an array of integers nums.
//A pair (i,j) is called good if nums[i] == nums[j] and i < j.
//Return the number of good pairs.

function numberOfGoodPairs(nums){
  let objectCount = {};
  let goodPairs = 0;
  
  for(let i=0;i<nums.length;i++){
    if(objectCount[nums[i]]){
      objectCount[nums[i]]++;
    }else{
      objectCount[nums[i]]=1;
    }
  }

  for(j in objecCount){
    goodPairs+=(objectCount[j]*(objectCount[j]-1))/2
  }

  return goodPairs;
};