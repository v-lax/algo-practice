//given an array that contains the net altitude change between each point
//find  the highest altitude 

function maxAltitude(gain){
  let altArray = [0];
  let maxAlt = 0
  //for loop to find each height
  for(let i=0;i<gain.length;i++){
    maxAlt+=gain[i]
    altArray.push(maxAlt)
  }
  for(let j=0;j<altArray.length;j++){
    if(maxAlt<altArray[j]){
      maxAlt=altArray[j]
    }
  }

  return maxAlt
}