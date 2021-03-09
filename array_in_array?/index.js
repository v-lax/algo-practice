function contains(array,input){
    for(let i=0;i<array.length;i++){
        if(array[i]===input){
            return true
        }
    }
    return false
}

console.log(contains([1,2,3],1))
console.log(contains([1,2,3],4))
console.log(contains(['code', 'dev', 'nerd'],'nerd'))