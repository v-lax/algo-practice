function productMinusSum (n){
  let numArray = [];
  let product = 1;
  let sum = 0;
  while(n>0){
    numArray.push(n%10);
    n=n/10;
  }

  for(let i=0;i<numArray.length;i++){
    product = product * numArray[i];
    sum = sum + numArray[i]
  }

  return product - sum
}