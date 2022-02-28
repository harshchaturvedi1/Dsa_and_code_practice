"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.message = void 0;
exports.message = "hello  world ! welcome";
console.log(exports.message);
var isBegineer = true;
var total = 0;
var name = "Harsh";
var sentence = "my name is ".concat(name, "\ni am a beginner in ts");
console.log(sentence);
// -----assigning type to variable in ts-------
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var person1 = ['chris', 22];
// -> error ['chris', 22, 23] -> [22, "chris"]
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// by default red=0, green=1, blue=2
// enum Color {Red=5, Green, Blue}; -> to start number at different value
var c = Color.Green;
console.log(c);
// we can assig any value later on using keyword "any"
// here typescript will not throw any error on any value
var randomValue = 10;
randomValue = true;
randomValue = "harsh";
// eg 2 for any
var myVariable = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// to avoid probles in eg 2 there is one more type -> "unknown"
// using "unknown" type we can assign other values but cannot call undeclared stuff
var myVariable2 = 10;
// to avoid error i below three lines
// console.log(myVariable2.name);
// myVariable2();
// myVariable2.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// (myVariable2 as string).toUpperCase()
// type inference -> static type checking
//  eg 1
var a;
a = 10;
a = true;
// eg 2
var b = 10;
// b=true; -> throws error bcz of type inference which provide static type checking
// type inference takes place when there is value assigned to variable and not if only value is declared
// -----union of types-----
var multiType;
multiType = 20;
multiType = true;
// union restricts to limited types where as in "any" we can put any type
// --------functions in ts
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// error
// add(5,"10")
// -------optional parameters in ts-------
// optional parameter must alawys be after required parameter
// here num2 is optional
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// default parameter
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// ----objects ---------
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Harsh",
    lastName: "Chaturvedi"
};
fullName(p);
function fullName2(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
fullName2(p);
// -------class--------
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Harsh");
console.log(emp1.employeeName);
emp1.greet();
// --------inheritance in ts-----
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager dlegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Harsh");
m1.delegateWork();
m1.greet();
// -----access modifier in ts-----
var PrivateTest = /** @class */ (function () {
    function PrivateTest(value1, value2) {
        this.firstValue = value1;
        this.secondValue = value2;
    }
    return PrivateTest;
}());
var p1 = new PrivateTest("harsh", "chaturvedi");
console.log(p1.secondValue);
// below value cannot be accessed from outside as its private
// console.log(p1.firstValue)
// a private member cannot be accessed in derieved class
