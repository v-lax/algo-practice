// return the max number by changing at most 1 number from 9 to 6 or 6 to 9
// Because its the max number we are not going to worry about going through
// and changing the nines to sixes. So whenever we see a the first 6 we'll 
// change that to a 9

function max69(num){
  let numStr = String(num)
  for(let i = 0;i<numStr.length;i++){
    if(numStr[i]==="6"){
      return parseInt(numStr.replace("6","9"));
    }
  };
};