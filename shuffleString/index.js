function shuffle(s,indices){
  let auxStr =[];
  for(let i=0;i<indices.length;i++){
    auxStr[indices[i]]=s[i]
  }
  return auxStr.join("");
}