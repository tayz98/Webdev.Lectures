// Arrays in Javascript:

let array = ["apple", "banana", "orange"];
typeof array == 'object';

array[1] = "pear";
array["juicy"] = "lemon";
console.log(array);

// arrays can be mixed with datatypes


//iterating over object properties
for (a in  array) console.log(a + ":" + array[a]);

// iterating over the values of iterable object
for (a in  array) console.log(a);

// Iterating over array elements with forEach()
array.forEach((item, index) => console.log(index + ":" + item));  // 0:apple, 1:pear 2:orange

// push() -> value to the end of array, push) -> to the beginning, shift()-> move, index() -> ... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const orders = [
    {"orderId": 1, "value": 100, "country": "DE"},
    {"orderId": 1, "value": 100, "country": "ABC"},
    {"orderId": 1, "value": 100, "country": "DEF"},
    {"orderId": 1, "value": 100, "country": "XYZ"},
]

// filter orders by counter, by value etc.
const deOrders = orders.filter( o => o.country == "DE");
const deOrderValues = deOrders.map(o => o.value);


// Sets
//contain each value only once. unordered
const set = new Set();
set.add(1);
set.add(5);
set.add('hello');
const o = ({a: 1, b: 2});

console.log(set);

// check if set has values.
set.has(1); // true
set.has(3); // false


// Maps
// Maps contain key-value pairs and are iterable. Any value, both objects and primitives, may be used as either a key or a value.
const contacts = new Map();
contacts.set('John', {phone: "+49 89748973", address: "Kiel"});
contacts.set({}, 123);
contacts.has('John'); // true
contacts.get('John') // {...}
contacts.size; // 2
console.log(contacts);

// remove a value from a map
contacts.delete('Alice'); // false
contacts.delete('John'); // true

// Dates
let now = new Date(); // current timestamp in local timezone
let birthday = new Date('1970-01-01 11:00:00'); // specific timestamp in local timezone (CET)
birthday.valueOf(); // 3600000 = 10 * 60 * 60 * 1000 ms, saved internally in UTC
birthday.toUTCString(); // Thu, 01 Jan 1970 10:00:00 GMT
birthday.toLocaleString(); // 1.1.1970, 11:00:00
birthday.toLocaleString("en-US, {timeZone: "America/New_York"});
