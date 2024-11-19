"use strict";
//Arrow functions in TypeScript (and JavaScript) are a way to write functions in a more concise and expressive manner. In Urdu, we can describe arrow functions like this:
// "TypeScript mein arrow functions aik tareeqa hain jis se hum functions ko mazeed mukhtasir aur izharati tareeqay se likh sakte hain. Is tareeqay mein hum `=>` (arrow) operator ka istemal karte hain, jo function ka definition aur uski body ko alag karta hai. Arrow functions mein `function` keyword ki zarurat nahi hoti, aur agar function mein sirf aik statement hai to curly braces `{}` ki bhi zarurat nahi hoti. Yeh tareeqa code ko zyada readable banata hai aur lambi syntax se bachata hai."
let add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
// let add defines a variable `add` that holds an arrow function.
// (a: number, b: number) specifies the parameters `a` and `b` with their types.
// `=> `is the arrow syntax that separates the parameters from the function body.
// { return a + b; } is the function body that adds a and b and returns the result.
