function callBack(arr,method){
    arr.map(method)
}

//or 
// function callBack(arr,method){
//     let newArr = []
// for(let i=0;i<arr.length;i++){
//     newArr.push(method(arr[i]))
// }
// return newArr
// }

console.log(callBack([1,2,3],function(num){return num * 2}))
console.log(callBack([1,2,3],function(num){return num + 1}))
console.log(callBack([1,2,3],function(num) {return num /2}))
console.log(callBack([1,2,3],function(num) {return num - 2}))