function charCount(string){
    let characterCount = {}
    for(let i = 0;i<string.length;i++){
        let char = string[i]
        if(characterCount[char]){
            characterCount[char]++
        }else{
            characterCount[char]=1
        }
    }
    return characterCount
}   

console.log(charCount('Hello World'))