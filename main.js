const s = 'Hello World';

console.log(s);
console.error('This is an ERROR!');

/*Javascript variables
When eclaring javascript variables, use: var, let, const
var has been there since the onset of JavaScript
*/
let age = 30;
age = 27;

console.log(age);

//JavaScript const (constant) declarations can't be re-assigned or redeclared. 
const name = 'John';

/*
JavaScript Datatypes: String, Numbers, Boolean, null, undefined
*/

const jina = "John Kinyanjui Macharia";
const miaka = 27;
const rating = 5.6;
const isCool = true;
const x = null;
const y = undefined;
//We can explicitely attach a value to undefined but we have to use let instead of const
let z;

console.log(typeof z);

//String concatenation
const fullName = 'John Kinyanjui';
const legalAge = 27;

console.log('My Name is: ' + fullName + ' and my age is: ' + legalAge);

//with ES6 we get TEMPLATE STRINGS
console.log(`my name is ${fullName} and my age is ${legalAge}`);

//String functions

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split('')); 

