function calEvenSUM(ar){
    let evenSum = 0
    ar.forEach(e=>{
        e%2===0 ? evenSum+=e : null
    })
    return evenSum
}
function calOddSum(ar){
    let oddSum = 0
    ar.forEach(e=>{
        e%2!==0 ? oddSum+=e : null
    })
    return oddSum
}

function  countSubr(n,ar){
    let count = 0
    for(let i=0;i<n;i++){
        let res = []
        for(let j=i;j<n;j++){
            res.push(ar[j])
            let evenSum = calEvenSUM(res)
            let oddSum = calOddSUM(res)
            if(oddSum > evenSum)
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
        countSubr(n,ar)
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