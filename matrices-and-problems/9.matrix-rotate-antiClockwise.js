function rotateArray(n,ar){
    for(let i=n-1;i>=0;i--){
        let res = ""
        for(let j=0;j<n;j++){
            res += ar[j][i] + " "
        }
        console.log(res)
    }
}


function runProgram(input) {
    // console.log(input);
    
    input = input.split("\n")
    let i =0;
    let rows = n = Number(input[i++]);
    let ar = []
    while(n>0){
        ar.push(input[i++].split(" ").map(Number))
        n--
    }
    rotateArray(rows,ar)
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