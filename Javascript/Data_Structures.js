// Sets: they contain each value only once. Values are conceptionally unordered

const set = new Set();
set.add(1);
set.add(5);
set.add(10);
set.add(5); // not added as it is already contained 
set.add('hello'); // set now has [1, 5, 'hello'];

const o = {a: 1, b: 2};
set.add(o);
set.add({a: 1, b:2}); // added as o is referencing a different object

// check is a value is contained in a set
set.has(1);
set.has(3);

// remove a value from a set
set.size // prints the size of the set 
set.delete(5); // removes the 5 from the set
set.has(5); // -> false
set.size; // now  one less

// Maps contain key-value pairs and are iterable. Anything in it can be used as either a key or a value
const contacts = new Map();
contacts.set('John', {phone: "+498934729", address: "Kiel"});
contacts.set({}, 123);
contacts.has('John'); // true
contacts.get('John'); // returns his phone number and address 
contacts.delete('Alice'); // false
contacts.delete('John') // true

// Dates

let now = new Date(); //current timestamp in local timezone 
let birthday = new Date('1970-01-01 11:00:00'); // specific timestamp in local timezone (CET)
birthday.valueOf();  // returns = 36000000 = 10 * 60 * 60 * 1000 ms, saved internally in UTC
birthday.toUTCString(); // Thu, 01 Jan 1970 10:00:00 GMT
birthday.toLocaleString(); // 1.1.1970, 11:00:00
birthday.toLocaleString("en-US", {timeZone: "America/New_York"}); // 1/1/1970, 5:00:00 AM 
birthday.toISOString(); // 1970-01-01T10:00:00.000Z, same as toJSON(), sortable

// it may be useful to use libraries such as Moment.js for date and atime, parsing, formatting, and calculation of durations
// <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>s

//Relative time 
now.fromNow(); // a few seconds ago
birthday.fromNow(); // 52 years ago


// OPERATORS
// assignment operators are basically the same like in C/Java
// there is one difference in comparison operators. 

let var1 = 3;
let var2 = 4;
3 == var1; // == return true, if the operands are equal. in this case yes. 
"3" == var1; // true

3 === var1; // checks operands and if the datatype is equal. in this case yes.
"3" === var1; // false

// arithmetic operators. 
// similiar to other languages but worth mentioning are the exponential operators

let var4 = 2 ** 3; // var 4 is now 8. ** calculates the base to the exponent power. i.e base^exponent. 

// logical operators and bitwise operators is nothing new for me. 

// String Operators

"Alice" < "Bob" // true
"1" < "Alice" // true