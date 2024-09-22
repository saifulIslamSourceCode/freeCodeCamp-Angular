function add2(a: number, b: number) {
    return a + b;
}

console.log(add2(3, 4))

const sub = (a: number, b: number) => a - b;

console.log(sub(6, 7))

const multiply = function (num1: number, num2: number) {
    return num1 * num2;
}

//optional parameters
function optionlaParameters(x: number, y: number, z?: number) {
    return z ? (x + y + z) : (x + y);
}

console.log(optionlaParameters(1, 2, 1));

//required parameter
function requiredParameter(x: number, y: number, z = 10) {
    return x + y + z;
}
console.log(requiredParameter(1, 3))

//Rest parameters
function add4(a: number, b: number, ...c: number[]) {
    return a + b + c.reduce((a, b) => a + b, 0);
}
let numbers = [2, 4, 5]
console.log(add4(1, 2, ...numbers));

//generic function
/*time: 1:30*/
