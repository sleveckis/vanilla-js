/*--------------------------------------------------------------------async/ await */

const promise = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve({name : "John", age: 32});
  }, 1000);
});

// old "then" method: promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}


async function getUsers() {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

// old "then" method
function getUsers_then(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
}


// async method with arrow functions
const getPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

getUsers();
getUsers_then();
getPosts();
