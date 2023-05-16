/* Loops and higher order functions */

/* For Each */
/* for (const x of y) */

// loop over arrays
const test = ['apple', 'banan', 'monkey', 'zoo'];
const testobar =[
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
]
for (const item of test) {
    console.log(item);
}
for (const item of testobar){
    console.log(item);
}
// loop over strings
const str1 = 'Howdy Partner';
for (const letter of str1){
    console.log(letter);
}
// loop over maps (ahven't introduced maps yet)
const map = new Map();
map.set('name', 'john');
map.set('age', 30);
for (const [key, value] of map){
    console.log(key, value);
}

/* For In */
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};
const colorArr = ['redg', 'green', 'blue', 'yellow'];
// For In will give us whatever we use as key/index for the data structure
for (const key in colorObj){
    console.log(key, colorObj[key]);
}
for (const indexxx in colorArr){
    console.log(indexxx, colorArr[indexxx]);
};

/* For Each */
// accepts a function, doesn't return anything. just loops through and uses the given function
const rocks = ['basalt', 'shale', 'pyrite', 'coal lol']
console.log(rocks);
rocks.forEach(function(rock){console.log(rock);});
// increasingly neater
rocks.forEach((rock) => {console.log(rock);});
rocks.forEach((rock) => console.log(rock));
// can also pass in array and index as params
rocks.forEach((rock, index, arr) => console.log(`${rock} at index ${index} in array w total list of [${arr}]`));
// with arr of objects
const sobe = [
    {flavor: 'strawberry', rating: 10},
    {flavor: 'watermelonberry', rating: 7},
    {flavor: 'blueberry', rating: 4},
]
sobe.forEach((drinktype) =>(console.log(`${drinktype.flavor} has a Goodness Rating of ${drinktype.rating}`)));

/* .filter */
const words = ['bargain', 'holocene', 'marble', 'pedestal', 'mud', 'gyroscope'];
const result = words.filter((word) => word.length > 6);
console.log(result);
const numbus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 1000, 1001];
// put num into 'evens' array IF num % 2 is zero (even though there's no if statement explicitly)
const evens = numbus.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6, ... 1000]
// with array of objects now
const companies = [
    {name: 'Pastahouse', game: 'pasta', price: '1200'},
    {name: 'Honda', game: 'cars', price: '100000'},
    {name: 'Mancinis Sleepworld', game: 'mattress', price: '111200'},
    {name: 'Portland Zoo', game: 'monkies', price: '999999999'},
];
const pasta_and_monkeys_companies = companies.filter((company) => (company.game === 'pasta' | company.game ==='monkies'));
console.log(pasta_and_monkeys_companies);

/* .map */
const numbur = [1, 4, 9, 16];
// perform that operation on each element and save it in a new array
const doubled = numbur.map(x => x*2);
console.log(doubled); // [2, 8, 18, 32]
// with objects now
const gumpanies = companies.map(company => company.name[0]); // first letter of every company name, saved in new array
console.log(gumpanies); // [P, H, M, P]

// modifying new array properties
// NOTE: notice the 'return{}' enclosure!
const pumpanies = companies.map((comp) => {
    return{
    name: comp.name,
    backup_plan: comp.game + ', but better',
    ceo_name: 'Johnathan ' + comp.name,
    }
});
console.log(pumpanies);

/* chaining map method */
// Note: the scoping is as follows: arr.map(fn).map(fn)         NOT         arr.map(fn.map(fn))
// ie, scoping is not nested it's just sequential
const doubleThenSquare = numbur.map(((num) => num * 2)).map( (num) => Math.pow(num, 2));
console.log(doubleThenSquare);


/* chaining different methods */
const gumball = numbur.filter(x => x===9 | x===1).map(x => x*2);
console.log(gumball); // [2, 18]

/* .reduce */
const bumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const cart = [
    {id: 1, name: 'Spinach', price: 6.50},
    {id: 1, name: 'Tomate', price: 100.00},
    {id: 1, name: 'Pop Tart', price: 1.20},
];
// NOTE: the final paramter in .reduce(), which is "0", which is "inital value"
// arr.reduce(accumulator, currentThing) => accumulator + currentThing.value (or not), initialValue
const bumber_sum = bumbers.reduce((acc, cur) => acc + cur, 0);
console.log(bumber_sum);
const cart_sum = cart.reduce((acc, product) => acc + product.price, 0);
console.log(cart_sum);
