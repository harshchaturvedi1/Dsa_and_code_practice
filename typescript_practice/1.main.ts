export
    let message = "hello  world ! welcome";
console.log(message)

let isBegineer: boolean = true;
let total: number = 0;
let name: string = "Harsh";

let sentence: string = `my name is ${name}
i am a beginner in ts`;

console.log(sentence)
// -----assigning type to variable in ts-------

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null
let myName: string = undefined;

// arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]

// tuple
let person1: [string, number] = ['chris', 22]
// -> error ['chris', 22, 23] -> [22, "chris"]


// enum
enum Color { Red, Green, Blue };
// by default red=0, green=1, blue=2
// enum Color {Red=5, Green, Blue}; -> to start number at different value
let c: Color = Color.Green
console.log(c)

// we can assig any value later on using keyword "any"
// here typescript will not throw any error on any value
let randomValue: any = 10
randomValue = true;
randomValue = "harsh"

// eg 2 for any
let myVariable: any = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// to avoid probles in eg 2 there is one more type -> "unknown"
// using "unknown" type we can assign other values but cannot call undeclared stuff
let myVariable2: unknown = 10;
// to avoid error i below three lines
// console.log(myVariable2.name);
// myVariable2();
// myVariable2.toUpperCase();
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name)
}
// (myVariable2 as string).toUpperCase()


// type inference -> static type checking
//  eg 1
let a;
a = 10;
a = true;
// eg 2
let b = 10;
// b=true; -> throws error bcz of type inference which provide static type checking
// type inference takes place when there is value assigned to variable and not if only value is declared


// -----union of types-----
let multiType: number | boolean;
multiType = 20;
multiType = true;
// union restricts to limited types where as in "any" we can put any type


// --------functions in ts
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(5, 10)
// error
// add(5,"10")

// -------optional parameters in ts-------
// optional parameter must alawys be after required parameter
// here num2 is optional
function add2(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

// default parameter
function add3(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

// ----objects ---------
function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "Harsh",
    lastName: "Chaturvedi"
}

fullName(p)

// -------interfaces in ts -----
interface Person {
    firstName: string;
    lastName: string;
}
function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}
fullName2(p)

// optional property in interface
// put a "?" to the property
interface Person2 {
    firstName: string;
    lastName?: string;
}

// -------class--------
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name
    }
    greet() {
        console.log(`good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("Harsh");
console.log(emp1.employeeName)
emp1.greet()
// --------inheritance in ts-----
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)
    }

    delegateWork() {
        console.log(`Manager dlegating tasks`)
    }
}

let m1 = new Manager("Harsh")
m1.delegateWork();
m1.greet()


// -----access modifier in ts-----
class PrivateTest {
    private firstValue: string
    public secondValue: string
    protected thirdValue: string

    constructor(value1: string, value2: string) {
        this.firstValue = value1
        this.secondValue = value2
    }
}

let p1 = new PrivateTest("harsh", "chaturvedi")
console.log(p1.secondValue)
// below value cannot be accessed from outside as its private
// console.log(p1.firstValue)
// a private member cannot be accessed in derieved class