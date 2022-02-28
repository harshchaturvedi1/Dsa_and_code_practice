// Given the input of Product Name, Category, Price in the below format
// OnePlus Electronics 29000
// Coffee Grocery 400
// Pen Office 30
// Book Office 60
// Rice Grocery 100
// Earphones Electronics 1000
// Create an array of objects from the given input
// Create a function that takes this array of objects as input and prints the highest priced product for each category

let str = `OnePlus Electronics 29000
Coffee Grocery 400
Pen Office 30
Book Office 60
Rice Grocery 100
Earphones Electronics 1000`

function filterExpansive(ar){
    let expObj ={}
    ar.forEach(item=>{
        if(expObj[item.category]===undefined){
            expObj[item.category]=item.price
        }else if(expObj[item.category]<item.price){
            expObj[item.category]=item.price
        }
    })
    console.log(expObj)
}

let ar = []
str = str.split("\n")
str.forEach(details=>{
    let data = details.split(" ")
    ar.push({
        name:data[0],
        category:data[1],
        price:Number(data[2])
    })
})

// console.log(ar)
filterExpansive(ar)