var intCount = {}
        function firstDuplicate(arr){
            for(var i = 0; i<arr.length;i++){
                var int = arr[i]
                if(intCount[int]){
                    intCount[int]++
                }else{
                    intCount[int]=1 
                }
            }
            for(j in intCount){
                if(intCount[j]>1){
                    return j
                }
            }
        }

console.log(firstDuplicate([ 1,3,4,1,3,4 ]))