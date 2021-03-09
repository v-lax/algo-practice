function returnTrueFalse(arr,fn){
    newArray=arr.filter(int=>fn(int))
    if(newArray.length>0){
        return true
    }else{
        return false
    }
}

console.log(returnTrueFalse([1,2,3],function(num){return num === 2}))
console.log(returnTrueFalse([1,5,3],function(num){return num === 2}))
console.log(returnTrueFalse([1,2,3],function(num){return num % 2 === 0}))