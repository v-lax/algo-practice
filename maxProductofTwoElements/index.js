//bruteforce method
function maxProduct(nums){
  let maxCount = 0;
  for(let i=0;i<nums.length;i++){
    let val1 = nums[i]-1
    for(let j=i+1;j<nums.length;j++){
      let val2 = nums[j]-1
      if(maxCount<(val1*val2)){
        maxCount=val1*val2;
      }
    }
  };
  return maxCount
};

//a little bit more effecient of a method by sorting values. 
function maxProduct1 (nums){
  let sorted = nums.sort((a,b)=>{
    return a-b;
  })
  let product =1;
  for(let i=nums.length-1;i>=nums.length-2;i--){
    let val = nums[i]-1
    product = product*val
  };
  return product

}
