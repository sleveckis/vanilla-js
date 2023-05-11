/* -----------------------------------------------------------------*/
                             /* Functions */

// Basics
function hey(){
    console.log("Hello World");
}
hey();
function add(n1, n2){
    console.log(n1 + n2);
}
add(5,10);

// IMPORTANT! Rest Params - accept indefinite number of args as an array
function sum(...nums){
    // nums is now an array in function scope
    return nums;
}
// but the args weren't passed in as an array, just as args
console.log(sum(1,2,3));

// Array params
function getRand(arr){
    len = arr.length;
    index = Math.floor(Math.random() * 8);
    console.log(arr[index]);
}
getRand([1, 2, 3, 4, 5, 6, 7, 8])
/* -----------------------------------------------------------------*/
            /* Function Expression vs Declaration */

// Funciton Declaration
function addDollarSign(value){
    return '$' + value;
}

// Function Expression - here a variable is created that's set to a function
const addPlusSign = function (value){
    return '+' + value;
};
console.log(addDollarSign(100));
console.log(addPlusSign(100));
// Difference: function DECLARATIONS are "hoisted" to the top of the document logically @ runtime, such that you can call them before their actual
// definition. You cannot do this with function EXPRESSIONS

/* -----------------------------------------------------------------*/
                        /* Arrow Functions */
// normal declaration
function add(a, b){
    return a + b;
}

// as arrow function
const add_arrow = (a,b) => {
    return a + b;
}

// can also do inline 
const subt = (a, b) => a - b;

// can remove parenths if single param
const mult = a => a*2;

// returning an object - surround in parenthesis (what the fuck lol)
const createObj = () => ({
    name: 'Brad',
});

console.log(add_arrow(5, 3));
console.log(subt(5,3));
console.log(mult(2));
console.log(createObj());

// good example of using arrow funciton
const numbus = [1, 2, 3, 4, 5, 6, 100];

// forEach's implementation executes a provided function on each element of an array
// wow that is some horrendous code
numbus.forEach(function cool(n){console.log(n);});
// let's rewrite it anonymously
numbus.forEach(function (n){console.log(n);});
// now let's rewrite it with an anonymous arrow function
numbus.forEach(n => console.log(n));

