//string
let Fname: string = "Saiful";
let newName = Fname.toUpperCase();
console.log(newName);

//Number
let age: number = 20;
age = 25;
age = 25.2;

let result = parseInt("25");

console.log(typeof(result))

//boolean
let isValid: boolean = false; 
console.log(isValid);

//array
let empList : string[];
empList = ["saifl", "islam"]
console.log(empList)

let empId: number[] = [333, 5, 4]
console.log(empId)

let depList: Array<number> = [4, 4, 6, 5, 6, 1, 6, 2, 3, 1, 5, 1, 1]
console.log(depList)
let sum = depList.reduce((acc, num) => acc + num)
console.log(sum)


let resultFilter = depList.filter((num) => num > 2);
console.log(empList.find((name) => name === "saifl"))

//enum
enum Color {
    red, 
    green, 
    blue
}
let c = Color.green;
console.log(c)


//Tuple
let swapNumbers: [firstNumber: number, secondNumber: number];
function swapNumbersFn(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbers = swapNumbersFn(10, 30);
swapNumbers[0];

//any
function add(num1: number, num2: number) {
    return num1 + num2
}
let newSum = add(10, 20)