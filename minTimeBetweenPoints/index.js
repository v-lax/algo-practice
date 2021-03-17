//brute force method

function minTime(arr){
  let steps = 0;
    for(let i=0;i<points.length;i++){
        if(i+1===points.length){
            break;
        }
        
        let p1 = points[i];
        let p2 = points[i+1];
        
        while((p1[0]!==p2[0])||(p1[1]!==p2[1])){
         if(p1[0]===p2[0]){
            while(p1[1]!==p2[1]){
             if(p1[1]<p2[1]){
                 p1[1]+=1
             }else if(p1[1]>p2[1]){
                 p1[1]-=1     
             }
             steps++;
          }
        }else if(p1[1]===p2[1]){
            while(p1[0]!==p2[0]){
             if(p1[0]<p2[0]){
                 p1[0]+=1
             }else if(p1[0]>p2[0]){
                 p1[0]-=1     
             }
             steps++
          }
        }else{
            if(p1[0]+p1[1]<p2[0]+p2[1]){
               p1[0]+=1
               p1[1]+=1
            steps++;
            }else{
               p1[0]-=1
               p1[1]-=1
               steps++;
            }
        }      
    }
        
};
    return steps;
}


//more effecient solution 
function minTimeEff(arr){
 let steps = 0;
 for(let i=0;i<arr.length;i++){
    let xDiff = arr[i][0]-arr[i+1][0];
    let yDiff = arr[i][1]-arr[i+1][0];

    if(xDiff<0){
      xDiff=xDiff*-1
    }
    if(yDiff<0){
      yDiff=xDiff*-1
    }

    steps+=Math.max(xDiff,yDiff);
 };
 return steps 
}