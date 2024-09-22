"use strict";
//string
let Fname = "Saiful";
let newName = Fname.toUpperCase();
console.log(newName);
//Number
let age = 20;
age = 25;
age = 25.2;
let result = parseInt("25");
console.log(typeof (result));
//boolean
let isValid = false;
console.log(isValid);
//array
let empList;
empList = ["saifl", "islam"];
console.log(empList);
let empId = [333, 5, 4];
console.log(empId);
let depList = [4, 4, 6, 5, 6, 1, 6, 2, 3, 1, 5, 1, 1];
console.log(depList);
let sum = depList.reduce((acc, num) => acc + num);
console.log(sum);
let resultFilter = depList.filter((num) => num > 2);
console.log(empList.find((name) => name === "saifl"));
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.green;
// console.log(c)
//Tuple
let swapNumbers;
function swapNumbersFn(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNumbersFn(10, 30);
swapNumbers[0];
//any
function add1(num1, num2) {
    return num1 + num2;
}
let newSum = add1(10, 20);
//Function
