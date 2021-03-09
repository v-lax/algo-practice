function reverse(number){
    newNum = number.toString();
    var numlength = newNum.length-1
    console.log(numlength)
    for(let i=numlength;i>0;i--){
        console.log(newNum[i])
    }
}

reverse(1312)