/*---------------------------------------------------------multiple promise async / await */
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if(this.readyState === 4){
        if(this.status === 200){
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: something went wrong!');
        }
      }
    };

    setTimeout(() => {
      xhr.send();

    }, Math.floor(Math.random() *3000 ) + 1000);
  });
}

/*
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json');
  })
  .then((directors) => {
    console.log(directors);
    return getData('./actors.json');
  })
  .then((actors) => {
    console.log(actors);
    actors.forEach((e) => console.log('Name is ' + e.name + ', their age is ' + e.age))
  })
  .catch((error) => console.log(error));
*/

async function getAllData(){
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

getAllData();