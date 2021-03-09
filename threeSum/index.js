var threeSum = function(nums) {
 
    nums = nums.sort(function(a,b){
        return a-b;
    })
    const finalArray = [];
    
    for(let i=0;i<nums.length-2;i++){
        currentNum = nums[i]
        if(currentNum>0) return finalArray;
        if(currentNum===nums[i-1]) continue; 
        
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            let sum = currentNum + nums[left] + nums[right];
            if(sum===0){
                finalArray.push([currentNum,nums[left],nums[right]])
                left++;
                right--;
                while(left<right && nums[left]===nums[left-1] ){
                    left++; 
                }
                while(left<right && nums[right]===nums[right+1]){
                    right --;
                }
            }else if(sum>0){
                right--;
            }else if(sum<0){
                left++;
            }
        }
    }

    return finalArray
    
};