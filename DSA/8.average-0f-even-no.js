function calEvenSum(n,ar){
    let evenSum = 0
    ar.forEach(e=>{
        e%2===0 ? evenSum += e : null
    })
    return evenSum
}

function calEvenCount(n,ar){
    let evenCount = 0;
    ar.forEach(e=>{
        e%2===0 ? evenCount += 1 : null
    })
    return evenCount
}

function calEvenAvg(n,ar){
    let evenSum = calEvenSum(n,ar);
    let evenCount = calEvenCount(n,ar);
    if(evenCount>0)
        console.log(Math.floor(evenSum/evenCount))
    else 
        console.log(-1)
    
}

function runProgram(input) {
    // console.log(input);
    
    input = input.split("\n")
    let i =0;
    let cases = Number(input[i++]);
    while(cases>0){
        let n = Number(input[i++]);
        let ar = input[i++].split(" ").map(Number)
        calEvenAvg(n,ar)
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