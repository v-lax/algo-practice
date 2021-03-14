function smallCount (nums){
  let x = [];
  for(let i=0;i<nums.length;i++){
    let count = 0;
    for(let j=0;j<nums.lenght;j++){
      if(nums[i]>nums[j]){
        count++;
      }
    }
    x.push(count)
  }
  return x; 
}