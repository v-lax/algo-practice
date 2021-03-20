function tournamentMatches(n){
  let matchCount = 0
  while(n>1){
    if(n%2===0){
      matchCount = matchCount + (n/2)
      n=n/2
    }else{
      matchCount = matchCount + ((n-1)/2)
      n=((n-1)/2)+1;
    }
  };
  return matchCount;
}