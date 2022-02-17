// to convet into binary from integer
// continously divide quotient by 2
// track reminder in each case till quotient becomes 1 or 0
// if final quotient is 1 include it in result
// reverse reminders and this is ans

// eg. 10
// 10/2 -> r=0, q=5
// 5/2 -> r=1, q=2
// 2/2 -> r=0, q=1
// ans -> 1010

// eg. 15
// 15/2 -> r=1,q=7
// 7/2 -> r=1,q=3
// 3/2 -> r=1,q=1
// ans -> 1111

function convertToBinary(n){
    if(n<0){
        console.log("invalid integer")
    }else if(n===0){
        console.log(`integer: ${n} , binary : ${0}`)
    }else{
        let res = ""
        let temp = n;
        while(temp>1){
            res += temp%2
            temp = Math.floor(temp/2)
        }
        temp === 1 ? res += temp : null
        res = res.split("").reverse().join("").trim()
        console.log(`integer: ${n} , binary : ${res}`)
    }
}

convertToBinary(1)