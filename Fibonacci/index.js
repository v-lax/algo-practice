//iterative solution number 1, time complexity of O(n) and space complexity of O(1). Most effecient
function fib1(n){
  let [a,b] = [0,1];
  if(n===0){
    return a
  }

  for(let i=2;i<=n;i++){
    [a,b] = [b,a+b]
  };

  return b;
}

//iterative solution number 2, with time and space complexity of O(n)
function fib2(n){
  if(n===0||n===1){
    return n;
  }
  let first = 0
  let second = 1
  let next = 1 
  for(let i=2;i<n;i++){
    first = second
    second = next
    next = first + second
  };
  return next;
};

//iterative solution number 3 with time and space complexity of O(n)
function fib3(n){
  let fibArray = [0,1];
  for(let i=2;i<=n;i++){
    fibArray.push(fibArray[i-1]+fibArray[i-2])
  }
  return fibArray[n]
};

//Recursive solution 1 with a time complexity of O(2^N)
function fib4(n){
  if(n<2){
    return n 
  }
  return fib4(n-1) + fib4(n-2)
};

//Recursive solution 2 with a time complexity of O(n) using a hash table (or memoization)
let count = {}
function fib5(n){
  if(n===0 || n===1) return n
  if(count[n]) return count [n]

  let value = fib5(n-1) + fib5(n-2);
  count[n] = value;

  return value
}


console.log(fib5(4));