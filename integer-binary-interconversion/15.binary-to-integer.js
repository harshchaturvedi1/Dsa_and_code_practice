// 10001 -> 1X2**0 + 0X2**1 + 0X2**2 + 0X2**3 + 1X2**4
//       -> 1      + 0      + 0      + 0      + 16
//       -> 17

// ----------------steps--------------
// multiply each digit by power of 2 as their position from last digit -> position start from 0
// total sum of all products is the integer of given binary


// 1.this function is accepting binary as string
function binaryToInteger(binary){
    let res = 0
    let n = binary.length
    for(let i=n-1; i>=0; i--){
        res += binary[i]*(2**(n-i-1))
    }
    console.log(res)
}

// 2. this is accepting binary as integer no.
function binaryToInteger2(binary){
    let res = 0
    let i = 0
    while(binary>0){
        let rem = binary % 10
        binary = Math.floor(binary / 10)
        res += rem*(2**i++)
    }
    console.log(res)
}



binaryToInteger("10001")
binaryToInteger2("10001")