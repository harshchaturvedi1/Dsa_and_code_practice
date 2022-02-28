// print matriix elements in zig zag manner

function straightLine(arr){
    arr = arr.split(" ").join(" ").trim();
    return arr
}

function reverseLine(arr){
    arr = arr.split(" ").reverse().join(" ").trim();
    return arr
}

function runProgram(input) {
 input = input.split("\n")
 let  i = 0;
 let n = Number(input[i++].split(" ")[0]);
 let data = " ";
 while(n>0){
    if(i%2===0){
        data += straightLine(input[i++]) +" "
    }else{
        data += reverseLine(input[i++]) + " "
    }
    n--
 }
 console.log(data.trim())
    
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