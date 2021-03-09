var count = {}

        function firstOccurence(str){
           var newStr=str.split(/\s/).join('');

           for(var i=0;i<newStr.length;i++){
               var char = newStr[i]
               if(count[char]){
                   count[char]++;
                }else{
                    count[char]=1;
                }
          }
          for(var j in count){
            if(count[j]===1){
                return j
            }    
        }
        }

        var result= firstOccurence("the quick brown fox jumps over the calm kitten quietly");
        console.log(result)