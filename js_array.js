//Array declaration
let fruits = new Array();
fruits[0] = 'melon';
fruits[1] = 'apple';
fruits[2] = 'mango';
fruits[99] = 'guava';

console.log(fruits.length);


let names = ['John', 'Sam', 'David', 'Samson', 'Dennis', 'Nicholus', 'Peter'];

/*for (let index = 0; index < names.length; index++) {
    const element = names[index];

    console.log(element);
    
}*/


for (const majina of names) {
    
    console.log(majina);

}









//let index = names.indexOf("David");

//console.log(index);

//random acces
/*console.log(names[3]);

console.log('Original array: ');
console.log(names);

names.length = 4;

console.log('Truncated array: ');
console.log(names);

names.length = 7;

console.log('Back to Original array: ');
console.log(names);

names.length = 0;

console.log('Cleared array: ');
console.log(names);*/

//names.push('Victor');

//names.unshift('Moses');

//Using pop
const lastElement = names.pop();

console.log('After popping the last element');

console.log(lastElement);

console.log(names);

//using shift
const firstElement = names.shift();

console.log('After shif to remove first element ');

console.log(firstElement);

console.log(names);
