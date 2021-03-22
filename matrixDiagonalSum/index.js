function diagonalSum(mat){
  let sum = 0;
  if(mat.length%2===0){
    let counterF = 0 
    let counterB = 0
    for(let i=0;i<mat.length;i++){
      sum+=mat[i][counterF]
      counterF++;
    };

    for(let i=mat.length-1;i>=0;i--){
      sum+=mat[i][counterB];
      counterB++;
    };

  }else{
    let midVal = Math.floor(mat.length/2)
    sum+=mat[midVal][midVal];
    let counter1= 0;
    let counter2= 0;
    for(let i=0;i<mat.length;i++){
      if(i!==midVal){
        sum+=mat[i][counter1]
        counter1++;
      }else{
        counter1++;
        continue;
      }
    }
    for(let i=mat.length-1;i>=0;i--){
      if(i!==midVal){
        sum+=mat[i][counter2]
        counter2++;
      }else{
        counter2++;
        continue;
      }
    }

  };
  return sum
};