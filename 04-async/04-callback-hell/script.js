/* Callback Hell, Promises, */

/*------------------------------------------------------------------Callback Hell */
/* A situation wtih multiple nested callbacks */

function getData(endpoint, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
        if (this.readyState ===4 && this.status === 200){
            cb(JSON.parse(this.responseText));
        }
    }
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

console.log("Callback Hell:");
// ex
getData('./movies.json', data => {
    console.log(data);
    getData('./directors.json', data => {
        console.log(data);
        getData('./actors.json', data => {
            console.log(data);
        });
    });
});
console.log("---------------------------------------------");

/*--------------------------------------------------------------------Promise Boilerplate */
// promise 1 has its "then" seperate
const promise = new Promise((resolve, reject) => {
    // successful promise
    setTimeout(() => {
        console.log("Async task done.");
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log("Promise consumed...");
})

// promise2 has its "then" tacked right on the end 
const promise2 = new Promise((resolve, reject) => {
    // successful promise
    setTimeout(() => {
        console.log("Async task 2 done.");
        resolve();
    }, 1000);
}).then(() => {console.log("Promise2 consumed...");});



