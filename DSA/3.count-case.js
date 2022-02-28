// Problem
// Given an array of string count the no of characters in Upper Case
// NOTE: You can't use any inbuilt functions
// Submission Image/Video Instructions
// Screenshot of the output for the following array of strings ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]

function  isUpper(e){
    return e>="A" && e<="Z"
}

function runProgram(arr){
    let count = 0;
    arr.forEach(e=>{
        if(e.length>1){
          return  count += runProgram(e.split(""))
        }else{
            isUpper(e) ? count += 1 : null
        }
    })
   return count
}

let arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]
let upperCaseCount = runProgram(arr)
console.log(upperCaseCount)