function isPangram(str){
  var alph = 'abcdefghijklmnopqrstuvxyz'
  var sentence = str.toLowerCase()
  for(var i = 0; i <alph.length; i++){
      if(!sentence.includes(alph[i])){
          return false
      }
  }
  return true
}