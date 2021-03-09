function uniqueArray(array){
    let numCount = {}
    let unique;
    for(let i=0;i<array.length;i++){
        if(numCount[array[i]]){
            numCount[array[i]]++
        }else{
            numCount[array[i]]=1
        }
    }
    
    for(j in numCount){
        if(numCount[j]>1){
            unique=false
            break
        }else{
            unique=true
        }
    }
    return unique
}

console.log(uniqueArray([20,-20,2,3,20]))