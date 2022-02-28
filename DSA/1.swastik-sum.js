// ----option 1 --------
// run two loops
// time complexity -> O(m*n)

// ----option 2 ---------
// run customised 6 loops
// time complexity -> ~O(<(m*n/2))

function  SwastikaAndSum(n,m,data){
    let sum1 = sum2 = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            // combined
            if(i===Math.floor(n/2) && j===Math.floor(m/2)){
                sum2 += data[i][j]
                sum1 += data[i][j]
            }
            // for sum1
            else if(j===0 && i<n/2){
                sum1 += data[i][j]
            }else if(i===Math.floor(n/2) && j>0){
                sum1 += data[i][j]
            }else if(i>n/2 && j===m-1){
                sum1 += data[i][j]
            }
            // for sum2
            else if(j<m/2 && i===n-1){
                sum2 += data[i][j]
            }else if(j===Math.floor(m/2) && i!=n-1){
                sum2 += data[i][j]
            }else if(j>m/2 && i===0){
                sum2 += data[i][j]
            }
            // console.log(sum1,sum2)
        }
    }
    
    let abs = sum1-sum2;
    abs >= 0 ? console.log(abs) : console.log(-abs)
}

function runProgram(input) {
 input = input.split("\n")
 let  i = 0;
 let n = Number(input[i].split(" ")[0]);
 let m = Number(input[i++].split(" ")[1]);
 let data = []
 let row = n;
 while(row>0){
     data.push(input[i++].split(" ").map(Number));
     row--
 }
 SwastikaAndSum(n,m,data)
    
}

if (process.env.USERNAME === "harsh.chaturvedi") {
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