// primitive types:
// booleans: literals are true and false
// number: literals are e.g. 42, 3.14, -1, 1e6, 0xFF, NaN, Infinity
// Strings: literals are escaped by single or double quotes
// undefined: let a; a is of the type undefined

// JS is a weakly and dynamically typed programming language, explic type casting is not needed!

let x; // declare a variable
x = 12345; // initialize a variable. x becomes an integer.
x = "Hello"; // x becomes a string at runtime
let X = 123; // JS is case-sensitive. different variable. declared and initialized at the same time.

const MAXIMUM = 5000; // constant, cannot be changed. variable needs to be written in all capital letters.


// variables don't behave the same when used in functions vs blocks (at least with using 'var')
function example() { // this is a function scope
    var b = 20; // b can only be accessed inside the function
}

if (1 == 1) { // this is a block scope
    var a = 10; // a can be accessed from outside the block!
}

if (true) {
    let c = 33; // c cannot be accessed outside the block. different from var!
}

// -> to conclude: var has a flaw in it. that's why you should use let instead.
console.log(a);