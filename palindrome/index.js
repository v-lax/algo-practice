function palindrome(string){
    var backwards='';
    for(var i=(string.length-1);i>=0;i--){
      backwards+=string[i];
    }
    console.log(backwards)
    if(backwards===string){
        return true
    }else{
        return false
    }
}

result = palindrome('yobananaboy')
console.log(result)