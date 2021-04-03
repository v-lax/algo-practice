function findMissingLetter(array){
  let l = "abcdefghijklmnopqrstuvwxyz";
  let u = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";

  let alphabet
  let index
  let missingCharacter
  if(array[0]===array[0].toUpperCase()){
    alphabet = u
    index - u.indexOf(array[0])
  }else{
    alphabet = l
    index - l.indexOf(array[0])
  }

  for(let i=0;i<array.length;i++){
    if(array[i]!==alphabet[index]){
      missingCharacter = alphabet[index]
      index++
    }
    index++
  }
  return missingCharacter
}