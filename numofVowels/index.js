var numOfVowels=0;

function vowelCounters(str){
    str = str.toLowerCase();
    var strArray=str.split('');
    console.log(strArray)
    for(var i=0;i<strArray.length;i++){
        if((strArray[i]==="a")||(strArray[i]==='e')||(strArray[i]==='i')||(strArray[i]==='o')||(strArray[i]==='u')){
            numOfVowels+=1;
        }
    }
    return numOfVowels
}

result = vowelCounters('Why?');
console.log(result)