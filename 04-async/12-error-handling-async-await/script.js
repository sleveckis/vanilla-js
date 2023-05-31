/*------------------------------------------------------------------try / catch */
const getUsers = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // block the code such that const data...json(); doesn't execute (it normally will do the whole try block)
    if(!response.ok){
      throw new Error('Request Failed');
    }
    const data = await response.json();
  // this will catch the manually thrown error on line 7
  } catch (error) {
    console.log(error);
  }
};

getUsers();

// way to catch the error outside of the function (ugly)
const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // block the code such that const data...json(); doesn't execute (it normally will do the whole try block)
  if(!response.ok){
    throw new Error('Request Failed');
  }
  const data = await response.json();
  console.log(error);
};
getPosts().catch((error) => console.log(error));