function shuffle(nums,n){
  let x = [];
  
  for(let i=0;i<n;i++){
    x.push(nums[i]);
    x.push(nums[i+n]);
  };

  return n;
};