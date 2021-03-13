//You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
//You are also given a rule represented by two strings, ruleKey and ruleValue.
// Return the number of items that match the given rule.

function itemCount(items,ruleKey,ruleValue){
  let keyList = ["type","color","name"];
  let countMatch = 0
  items.forEach(item=>{
    for(let i=0;i<=3;i++){
      if(keyList[i]===ruleKey&&item[i]===ruleValue){
        countMatch++;
      }
    };
  })
  return countMatch = 0 
}