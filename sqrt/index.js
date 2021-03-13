//given a value find the squareroot of the number without using the sqrt function
//if the number is not a perfect square, truncate the value so only a 
// whole integer is returned. 

function sqrt(x){
  let lo = 0;
  let hi = x;
  while(lo<=hi){
    let mid = Math.floor(lo+hi/2);
    if(mid*mid>x){
      hi = mid-1;
    }else{
      lo = mid+1
    }
  }
  return hi;

}