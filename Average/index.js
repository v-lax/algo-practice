function average(array){
  var sum = 0
  for(var i =0;i<array.length;i++){
      sum+=array[i]
  }

  return sum/array.length
}

result = average([1.5, 3, 2.5, 1])
console.log(result)