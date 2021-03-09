function product(array){
    const largestNum = Math.max(...array)
    
    var newArray = array.filter(function(element){
        return element!==largestNum
    })
    
    const secondLargestNum = Math.max(...newArray)

    return largestNum*secondLargestNum

}

console.log(product([12,20,9,6,3,21]))