// Array Union Pending
// Problem
// Given 2 arrays find out the elements that are present in both the arrays
// NOTE: Use Objects to arrive at the solution
// Code File
// Submission Image/Video Instructions
// Screenshot of the output for the arrays [1, 2, 3, 4] , [2, 4, 6, 8]


function convertToObject(ar){
    let obj ={}
    ar.forEach(e=>{
        obj[e] = 1
    })
    return obj
}

function unionOfArrays(ar1,ar2){
    let obj1 = convertToObject(ar1)
    let obj2 = convertToObject(ar2)

    let temp = []
    for(const e in obj1){
        if(obj2[e]!==undefined)
            temp.push(e)
    }
    return temp
}

let ar1 = [1, 2, 3, 4]
let ar2 = [2, 4, 6, 8]

let union = unionOfArrays(ar1,ar2);
console.log(union)