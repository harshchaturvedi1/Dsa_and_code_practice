// 1. in modern languages(eg js, python) convert to string and reverse the string
function reverseNum(n){
    let temp = String(n)
    temp = temp.split("").reverse().join("").trim()
    console.log(`using string conversion and reverse -> ${temp}`)
}


// 2. without reverse function
//  -> convert to string and run a loop from end of element
function reverseNum2(n){
    let temp = String(n)
    let res = ""
    for(let i=temp.length-1;i>=0;i--){
        res += temp[i]
    }
    console.log(`using string conversion and loop -> ${res}`)
}


// 3. without converting to string
// -> run a loop till no. is greater than 0
// -> each time divide no. by 10 and store remainder in a variable which will be last digit of no.
// -> and store dividend as original no in each iteration
function reverseNum3(n){
    let res = 0
    while(n>0){
        let rem = n%10
        res = (res*10) + rem
        n = Math.floor(n/10)
    }
    console.log(`using iteration and no. only -> ${res}`)
}

// 4. a modern approch of method 3
function reverseNum4(n){
    let res = ""
    while(n>0){
        res += n%10
        n = Math.floor(n/10)
    }
    console.log(`inside function reverseNum4 -> ${res}`)
}

// reverseNum(1011)
// reverseNum2(1011)
// reverseNum3(1011)
reverseNum4(1011)
