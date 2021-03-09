function removeDuplicates(array){
    //array.filter()
    const newArray = []
    for(let i=o;i<array.length;i++){
        const num = array[i]
        if(!newArray.includes(num)){
            newArray.push(num)
        }
    }

    return newArray
}

console.log(removeDuplicates([1,2,2,3]))