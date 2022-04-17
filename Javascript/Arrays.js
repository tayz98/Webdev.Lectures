// for more information about arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// arrays are objects in JS

let array =["apple", "banana", "orange"];


// the index of an array starts with 0. it can have other properties than numbers
array[1] = "pear"; // replaces banana
array["juicy"] = "lemon";
console.log(array); // ['apple', 'pear', 'orange', juicy: 'lemon']

// Iterating over the object properties
for (a in array){
    console.log(a + ":" + array[a]); // 0:apple, 1:pear, 2:orange, juicy:lemon
}

// Iterating over the values of iterable objects
for (a of array){
    console.log(a); // apple, pear, orange
}
// Iterating over array elements
array.forEach((item, index) => console.log(index + ":" + item)); // 0:apple, 1:pear, 2:orange

// arrays can have constructors

let fruits = new Array('Apple', 'Banana');
console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

// more useful array functions: pop, push, reduce, shift