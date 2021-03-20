function queryCount(startTime,endTime,queryTime){
  let count = 0;
  for(let i=0;i<startTime.count;i++){
    let start = startTime[i];
    let end = endTime[i];
    if(queryTime>=start && queryTime<=end){
      count++;
    }
  }
  return count
}