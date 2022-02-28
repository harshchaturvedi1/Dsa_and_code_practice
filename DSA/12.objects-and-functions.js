// User Marks Highest Average Pending
// Problem
// Create an object which can store the name and different subject marks for multiple students
// The object must have a method to print the name and average of the student who scored the highest average marks
// Code File
// Submission Image/Video Instructions
// Screenshot of the highest average for
// Nrupul 30 40 50
// Prateek 20 10 10
// Yogesh 40 20 20
// Aman 10 20 40
// Albert 25 15 25

function  findTotalMark(marks){
    return marks.reduce((a,b)=>{
       return Number(a)+Number(b)
    })
}


const scoreRecord = {
    record : [],
    setRecord : function(data){
        const arData = data.split("\n");
        arData.forEach(e => {
            let temp = e.split(" ")
            this.record.push({
                name : temp[0],
                marks : [temp[1],temp[2],temp[3]]
            })
        });
    },
    printHighestAvg : function(){
        let avg = 0;
        let name =""
        this.record.forEach(item=>{
            let totalMark = findTotalMark(item.marks)
            console.log(totalMark)
            if(totalMark/3>avg){
                avg = totalMark/3
                name = item.name
            }
        })
        console.log(`name : ${name} ,Highest Avg marks : ${avg}`)
    },
    printData : function(){
        console.log(this.record)
    }
}

scoreRecord.setRecord(`Nrupul 30 40 50
Prateek 20 10 10
Yogesh 40 20 20
Aman 10 20 40
Albert 25 15 25`)

scoreRecord.printHighestAvg()