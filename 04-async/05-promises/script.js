/*--------------------------------------------------------------------Promise Example w Error Checking */
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This will run second (body of the promise but not in .then or .catch or .finally");

        let error = false;

        if (!error){
            resolve({name: "Doorknob", motto: "I'm 150 years old"});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

// then ==  == resolve == success
// catch == reject == error
// finally == regardless
getUser
    .then((user) => {
        console.log(user);
        console.log("This will always run third, after the printing of Doorknob and his motto");
    })
    .catch((error) => console.log(error))
    .finally(() => {console.log("Promise consumed regardless of success or failure (this will always run very last)")});

console.log("Global scope; This will always run first");



