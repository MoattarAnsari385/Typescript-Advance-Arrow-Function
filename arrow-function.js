"use strict";
// Create a TypeScript file named arrow-functions.ts.
// Implement the following tasks using arrow functions:
// Task 1: Create an arrow function 'add' that takes two parameters 'a' and 'b' and returns their sum.
// Task 2: Create an arrow function `subtract` that takes two parameters `a` and `b` and returns their difference.
// Task 3: Create an arrow function multiply that takes two parameters `a` and `b` and returns their product.
// Task 4: Create an arrow function `divide` that takes two parameters `a` (dividend) and `b` (divisor) and returns their quotient. Handle the case when `b` is 0 and return "Cannot divide by zero!".
// Task 5: Create an arrow function `power` that takes two parameters `base` and `exponent` and returns base raised to the `power` of `exponent`.
// Task 1: Create an arrow function add that takes two parameters a and b and returns their sum.
let addition = (a, b) => {
    return a + b;
};
console.log((addition(16, 8)));
// Task 2: Create an arrow function subtract that takes two parameters a and b and returns their difference.
let substract = (a, b) => {
    return a - b;
};
console.log(substract(16, 8));
// Task 3: Create an arrow function multiply that takes two parameters a and b and returns their product.
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(16, 8));
// Task 3: Create an arrow function divide that takes two parameters a and b and returns their product.
let division = (a, b) => {
    return a * b;
};
console.log(division(10, 2));
// Task 4: Create an arrow function divide that takes two parameters a (dividend) and b iv(divisor) and returns their quotient. Handle the case when b is 0 and return "Cannot divide by zero!".
let divide = (a, b) => {
    if (b == 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log(divide(8, 0));
// Task 6: Create an arrow function power that takes two parameters base and exponent and returns base raised to the power of exponent.
let power = (base, exponent) => {
    return Math.pow(base, exponent);
};
console.log(power(2, 3));
