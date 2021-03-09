function longestPreFix(stringArray){
    if(stringArray.length===0||stringArray[0]===''){
        return ''
    }
    let comparisonIndex = 0
    let preFix = '';
    const shortestWord = stringArray.reduce(function(a,b){
        return a.length<=b.length ? a:b;
    })

    const newArray = stringArray.filter(function(d){
        return d!==shortestWord;
    })

    for(leti=0;i<shortestWord.length;i++){
        let currentLetter = shortestWord[i];
        for(let j=0;j<newArray.length;j++){
            currentWord = newArray[j]
            if(currentLetter!==currentWord[comparisonIndex]){
                return preFix
            }
        }
        preFix+=currentLetter;
        comparisonIndex++;
    }

    return preFix;
}