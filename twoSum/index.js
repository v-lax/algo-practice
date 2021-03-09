function twoSum(nums,target){
    const obj = {};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]>=0){
            return [obj[nums[i]],i]
        }

        obj[target-nums[i]] = i 
    };
};


//linear search approach otherwise know as the brute force method
function twoLinear(nums,target){
    indexArray = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                indexArray.push(i);
                indexArray.push(j);
            }
        }
    }
    return indexArray
}


function twoMap(nums,target){
    const numsMap = new Map();
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(target-nums[i])){
            console.log(numsMap.get(target-nums[i]))
            return [numsMap.get(target-nums[i]),i]
        }else{
            numsMap.set(nums[i],i);
        }
    };
}
console.log(twoMap([3,3],6));