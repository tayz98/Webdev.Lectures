// for more information about arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// arrays are objects in JS

let array =["apple", "banana", "orange"];

// const array is also possible

const schedule = ['Wake up','Eat', 'Film a video', 'Watch things on netflix'];


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

// manipulate arrays with the functions: pop, push, reduce, shift

let testArr = [1,2,3,4,5];
// push adds one or more elements to the end of an array and return the newlength
testArr.push(10); // returns the length of 6 and adds a 10 to the end of the array

// pop removes an element from the end of an array and return that item
testArr.pop(); // returns 10
// unshift adds one or more elements to the beginning of an array and returns the new length
testArr.unshift(10); // adds 10 to the beginning
// shift removes an element from the beginning of an array and return that element
testArr.shift(); // removes 10

const orders = [
    {"orderId": 1, "value": 100, "country": "DE"},
    {"orderId": 2, "value": 200, "country": "EN"},
    {"orderId": 3, "value": 300, "country": "DE"},
    {"orderId": 4, "value": 400, "country": "FR"},
]
// filter(): Creates a new array with all elements which pass the condition implemented by the provided function
const deOrders = orders.filter(o => o.country == "DE"); // new Array with elements where country is only DE

// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array
const deOrderValues = deOrders.map(o => o.value); // this new array only contains the values 100 and 300 but nothing else

//reduce(): reduces the array by executing a function on the elements
const deOrderValueSum = deOrderValues.reduce((previous, current) => previous + current, 0);

// functions can be chained:
const deOrderValueSum2 = orders.filter(o=> o.country == "DE").map(o => o.value).reduce((a,b) => a+b);