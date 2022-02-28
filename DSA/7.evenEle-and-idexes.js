function  evenEleAndIndexes(n,ar){
    let count = 0
    for(let i=0;i<n;i++){
        if(ar[i]%2===0 && i%2===0)
            console.log(i,ar[i])
    }
}

function runProgram(input) {
    // console.log(input);
    input = input.split("\n")
    let n = Number(input[0]);
    let ar = input[1].split(" ").map(Number)
    evenEleAndIndexes(n,ar)
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