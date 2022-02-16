// Sub array quest VII Ended
// Description

// Given an array A with N positive integers. Count the number of subarrays, such that for each subarray, the number of odd numbers exceeds the number of even numbers.


function countOddEle(ar){
    let oddCount = 0
    ar.forEach(e=>{
        e%2!==0 ? oddCount+=1 : null
    })
    return oddCount
}

function countOddSubr(n,ar){
    let count = 0
    for(let i=0;i<n;i++){
        let res = []
        for(let j=i;j<n;j++){
            res.push(ar[j])
            let oddCount = countOddEle(res)
            if(oddCount>res.length-oddCount)
                count += 1
        }
    }
    console.log(count)
}

function runProgram(input) {
    // console.log(input);
    
    input = input.split("\n")
    let i =0;
    let cases = Number(input[i++]);
    while(cases>0){
        let n = Number(input[i++]);
        let ar = input[i++].split(" ").map(Number)
        countOddSubr(n,ar)
        cases--
    }
}

if (process.env.USERNAME === "Harsh") {
    runProgram(`Tuesday`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}