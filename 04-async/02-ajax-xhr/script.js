/* AJAX, XHR (XMLHttpRequest) */

/*---------------------------------------------------------------------------------------------HTTP Requests */
/* AJAX / XMLHttpRequest object was the original way of making HTML requests from javscript, but these days we mostly use the fetch API */

/* HTTP Methods: GET, POST, PUT & PATCH, DELETE */
/* HTTP Status Code Ranges (from x to x + 99): 100 continue, 200 ok, 300 redirects, 400 client error, 500 server error */
/* -------------Common individual 200 codes: 200 success, 201 success + something was created, 204 success + deletion */
/* -------------Common individal 300 codes: 301: resource moved */
/* -------------Common individal 400 codes: 401 bad request, 401 unauthorized, 403 forbidden, 404 not found */
/* -------------Common individal 500 codes: 500 error on server*/

/*--------------------------------------------------------------------------------------------XHR */
/*
    readystate is an attribute of an XHR object - has 5 possible values:
    0 - request not initialized
    1- server connection established
    2- request received
    3- processing request
    4- request finished and response is ready
*/
console.log("XHR");
const xhr = new XMLHttpRequest();
xhr.open('GET', './movies.json');

// 4 via explanation in comment above, and 200 via http request codes in comment above that
const readyStateComplete = 4;
const readyStatusOk = 200;

xhr.onreadystatechange = function () {
    if (this.readyState == readyStateComplete && this.status == readyStatusOk){
        const data = JSON.parse(this.responseText)
        data.forEach((movie) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`
            document.querySelector('#results').appendChild(li);
        })
    }
}

xhr.send();
xhr.onreadystatechange();

/*---------------------------------------------------------------------------------------------XHR - remote api */
console.log("XHR - repote api");
const xhrr = new XMLHttpRequest();

function victory() {
    var data = JSON.parse(this.responseText);
    data.forEach(element => {
        // COOL CODE
        const li = document.createElement('li');
        li.innerHTML = `<strong>${element.name}</strong>`;
        document.querySelector('#git-results').appendChild(li);
        // COOL CODE
    })

}

function error (e){
    console.log('Request failed', e);
}

xhrr.open('GET', 'https://api.github.com/users/bradtraversy/repos')         // open a GET request with the xhr object
xhrr.onload = victory;                                                       // do this if there's no errors
xhrr.onerror = error;                                                        // do this if there are errors
xhrr.send();                                                                 // send the request to the server
