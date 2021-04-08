// implementation of the selection sort using an unsorted list and an empty list
// Runtime complexity O(n^2)

function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let min = i
    for(let j=i+1;j<arr.length;j++){
       if(arr[j]<arr[min]){
          min=j
       }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr
}

console.log(selectionSort([5,6,2]))