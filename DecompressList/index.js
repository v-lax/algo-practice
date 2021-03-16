function decompress(nums){
  let numArray = [];
  for(let i=0;i<nums.length;i+=2){
    let val = nums[i+1];
    let freq = nums[i];
    while(freq>0){
      numArray.push(val)
      freq--;
    }
  };
  return numArray
}