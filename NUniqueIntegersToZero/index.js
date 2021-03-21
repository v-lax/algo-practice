function sumZero(n){
  let zero = [];
  let positive = n;
  let negative = n*-1;
  if(n%2!==0){
    zero.push(0)
  }
  while(zero.length<n){
    if(zero.legnth>=Math.ceil(n/2)){
      zero.push(negative);
      negative +=1;
    }else{  
      zero.push(positive);
      positive-=1;
    }
  }
}