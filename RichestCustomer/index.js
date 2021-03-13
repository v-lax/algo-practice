function HighestWealth(accounts){

  let wealthArray = [];
  let maxWealth = 0;
  accounts.forEach(account=>{
    let wealth = account.reduce( (acc,currVal) => acc+currVal);
    wealthArray.push(wealth);
  })

  for(let i=0;i<wealthArray.length;i++){
    if(maxWealth<wealthArray[i]){
      maxWealth = wealthArray[i];
    };
  }

  return maxWealth;

}