String.prototype.toJadenCase = function(){
  let xArr = this.split(" ");
  let newX = []
  for(let i=o;i<xArr.length;i++){
    newX.push(xArr[i][0].toUpperCase()+xArr[i].slice(1))
  }
  return newX.join(" ");
}