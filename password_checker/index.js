function passwordChecker(str){
    var capital = /[A-Z]/
    var lower = /[a-z]/
    if(str.length>=8&&capital.test(str)&&lower.test(str)){
        return true
    }else{
        return false
    }

}

// Ex:
// Input: RexTheDog
// Output: true
// Input: rexthedog
// Output: false
// Input: REXTHEDOG
// Output: false
// Input: Dog
// Output: false

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

console.log(passwordChecker('dog'))