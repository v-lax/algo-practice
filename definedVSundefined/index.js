var sample = function () {
  var a = b = 3;
};
sample();
console.log(b)
console.log(a)
console.log("Is a defined?", typeof a !== "undefined"); //cause of the var key word. 
console.log("Is b defined?", typeof b !== "undefined");