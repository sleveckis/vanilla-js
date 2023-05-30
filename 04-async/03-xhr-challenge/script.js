/* XHR Challenge */

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

window.onload=function(){

    const xhr = new XMLHttpRequest();
    const h2 = document.querySelector('h2');

    function victory () {
        const data = JSON.parse(this.responseText);
        h2.innerHTML = `<strong>${data.value}</strong>`;
        console.log(data.value);
    }

    function error (){
        h2.innerHTML = `<strong>Error</strong>`;
    }

    function get_joke (){
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
        xhr.onload = victory;
        xhr.onerror = error;
        xhr.send();
    }

    document.querySelector("button").addEventListener('click', get_joke);

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onload = victory;
    xhr.onerror = error;
    xhr.send();

}