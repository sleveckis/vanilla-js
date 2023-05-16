/* Array Method Challenges*/
// Challenge 1: given array 'people' create 'youngPeople' that stores only objects with age 25 and under, with only saving name + email properties 
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people.filter((person) => person.age <=25).map((person) => {
    return {
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
    }
});

console.log(youngPeople);


// Challenge two: add all positive numbers in the array
const numbers = [2, -30, 50, 20, -12, -9, 7];
const sum = numbers.filter(x => x > 0).reduce((acc, cur) => acc + cur, 0);
console.log(sum);


// Challenge 3: captialize all words in the array in a new array

const words = ['coder', 'programmer', 'developer'];
capped = [];
for (const word of words){
    capped.push(word.substring(0, 1).toUpperCase() + word.substring(1))
}
console.log(capped);

