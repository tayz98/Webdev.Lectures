// Objects can be created without a class definition
let person = {
    id: 1,
    firstName: "John",
    lastName: "Doe"
};
person.firstName = "Jane";
person["lastName"] ="Roe";
console.log(person); // prints the id '1', the first name 'Jane' and the last name 'Roe'

let a = null // null object
let b = {}; // empty object

// objects can be nested

let person2 = {
    id: 1,
    adresss: {
        street: "Sokratesplatz 1",
        city: "Kiel"
    },
    phoneNumbers:["+49 87294", "+43 9032870"]
};

// Type Coercion: (should be avoided)
let c = "1" + 2; // c == '12' the expression becomes concatenated  if you use the + operator

let h = "3" * 5; // h == 15. -,*,/,% converts any non-numeric operand to a number using the Number() function.
3 * "a"; // == NaN