function isInteger(value){
  if((typeof(value)==='number')&&(value%1===0)){
      return true
  }else{
      return false
  }
}

result = isInteger(5.2)
console.log(result)