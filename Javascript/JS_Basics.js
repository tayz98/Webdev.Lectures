// JS is basically imperative, not declative, i.e. you write statement based algorithms.
// JS is object-oriented
// use the developer console in your browser (with F12) to test some JS code.

// different log levels:        it is useful to know them when working with the Developer Console
console.log("General Message");
console.debug("Debug message");
console.info("Info message");
console.warn("Warn message"); // yellow marked
console.error("Error message"); // red marked



// move the following content to a new file.
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

