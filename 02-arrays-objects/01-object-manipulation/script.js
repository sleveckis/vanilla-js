// Destructuring objects, Object attribute assignment, arrays

const styles = 'padding: 10px; background-color: blue; color: white';
console.log('%cHello World', styles)

// Array Literal
const numbers = [12, 34, 89, 12];

// Array Constructor
const fruits = new Array(12, 34, 89, 12);

// Can index like you'd expect, etc. Can be arrays of strings, whatever, like you'd expect, etc.
//------------------------------------------------------------------------------------------------

// Array methods: pop, push, unshift, shift, reverse, includes, indexOf, etc...

// Spread Operator "..." unpacks things
const g = ['apple', 'pear', 'orange']
const h = ['blueberry', 'strawberry', 'dragonfruit']
let arr = [...g, ...h]
console.log(arr);

// Flatten Arrays
arr = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
arr = arr.flat()
console.log(arr);

//--------------------------------------------------------------------------------------------------
// Array Challenge 1
const arr1 = [1, 2, 3, 4, 5]
arr1.push(6);
arr1.unshift(0);
arr1.reverse();
console.log(arr1);

//--------------------------------------------------------------------------------------------------
// Array Challenge 2
const arr2 = [1, 2, 3, 4, 5];
arr2.pop();
const arr3 = [5, 6, 7, 8, 9, 10];
const arr4 = [...arr2, ...arr3]
console.log(arr4);

//--------------------------------------------------------------------------------------------------
// Object Literals: if you want the KEY have a VALUE with the same name (firstName: firstname,) then you can shorten it as below

const firstName = "John";
const lastName = "Doe";
const age = 31;
const person = {
    firstName,
    lastName,
    age,
};
console.log(person.age);

//--------------------------------------------------------------------------------------------------
// Destructuring an object into new local scope variables via curly braces {   }
const todo = {
    id: 1,
    title: 'John Henry',
    user: {
        name: 'Horse',
    }
};
const { id, title, user: { name } } = todo; // will pull out values for all keys and store them in variables w same name 
console.log(id, title, name); // 1 'John Henry' 'Horse'

//--------------------------------------------------------------------------------------------------
// Destructuring an object, but renaming the new variable with a colon (vin: just a number) 
const todo2 = {
    vin: 1234567,
    model: 'Ford',
    driver: {
        hair: 'brown',
        weight_in_lbs: 165,
    }
};
const {
    vin: just_a_number,
    model,
    driver: { weight_in_lbs },
} = todo2;
console.log(just_a_number, weight_in_lbs, model); // 1234567 165 'Ford'

//--------------------------------------------------------------------------------------------------
// Destructure an array with brackets (and also the "rest" operator which is the same syntax as the spread operator lol)
const nums = [12, 34, 92, 51, 69];
const [first, second, ...rest] = numbers;
console.log(first, second); // 12 24
console.log(rest) // 92, 51, 69

//
