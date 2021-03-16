function consistent(allowed,words){
  let allowedArray = allowed.split("");
  let count=words.length;

  for(let i=0;i<words.length;i++){
    let wordsArray = words[i].split("");
    for(let j=0;j<wordsArray.length;j++){
      if(allowedArray.indexOf(wordsArray[j]===-1)){
        count--;
        break;
      }
    }
  };
  return count
}