// Triangle Object Pending
// Problem
// Create a triangle object which has three properties hypotenuse, side1
// Assume the triangle is a right angle triangle
// Create a method to calculate the side2
// Code file
// Submission Image/Video Instructions
// Screenshot showing the side2 for the side 3 and hypotenuse 5

const triangle={
    hypotenuse : 5,
    side1 : 4,
    
    calSide2 : function(){
        let side2 = Math.sqrt((this.hypotenuse**2) - (this.side1**2))
        return side2
    }

}


console.log(triangle.calSide2())