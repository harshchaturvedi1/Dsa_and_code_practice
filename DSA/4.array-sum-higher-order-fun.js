// Array Some Criteria Pending
// Problem
// Given an array of numbers, return the elements that have odd index (starting the count at 0) and are odd
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [3]


function runProgram(ar){
    let res = ar.filter((e,i)=>{
        return e%2!==0 && i%2!==0
    })
    return res
}

let ar = [2, 4, 5, 3, 6, 5];
let filteredAr = runProgram(ar)
console.log(filteredAr)
