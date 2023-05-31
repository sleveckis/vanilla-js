/*--------------------------------------------------------------------fetch api (using .then)*/
/*
    need to chain 'then's first to convert a Response object into JSON, then to 
    do whatever we actually want to do with the data, like print it

*/
fetch('./movies.json')
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        console.log(data)
    })

// text file
fetch('./information.txt')
    .then((response) => {
        return response.text();
    })
    .then ((data) => {
        console.log(data)
    })

fetch('https://api.github.com/users/bradtraversy')
    .then ((response) => response.json())
    .then ((data) => document.querySelector('#replace-me').textContent = data.login);

/* NOTE: all requests via fetch are GET by default */
