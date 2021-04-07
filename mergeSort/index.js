// merge sort function: takes in an unsorted array and return a new sorted list
// merge sort has a runtime complexity of o(N logN) amd space complexity of O(n)
function mergeSort(arr){
  if(arr.length<=1){
    return arr
  }

  let mid = Math.floor(arr.length/2)
  let left_half = arr.slice(0,mid)
  let right_half = arr.slice(mid)
  
  let left = mergeSort(left_half)
  let right = mergeSort(right_half)

  return merge(left,right)
}


function merge(left,right){
  //this function is going to merge two lists and sort them in the process
  //and then it will return the new merged list 

  let list = []
  let leftIndex = 0
  let rightIndex = 0

  while((leftIndex<left.length)&&(rightIndex<right.length)){
    if(left[leftIndex]<right[rightIndex]){
      list.push(left[leftIndex])
      leftIndex+=1
    }else{
      list.push(right[rightIndex])
      rightIndex+=1
    }
  }

  while(leftIndex<left.length){
    list.push(left[leftIndex])
    leftIndex+=1
  }

  while(rightIndex<right.length){
    list.push(right[rightIndex])
    rightIndex+=1
  }
  return list
}

console.log(mergeSort([54,63,25,152,523,6,21]))