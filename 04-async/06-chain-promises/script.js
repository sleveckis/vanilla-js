/*--------------------------------------------------------------------Promise Chaining */
const promiseObject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error){
            resolve({ name: 'Joe', age: 21 });
        } else {
            reject('Error: something went wrong');
        }
    }, 1000);
});

promiseObject
    .then((user) => {
        console.log(user);
        return user.name;
    })
    // in the CHAINED "then", "name" can be accessed because it was returned in the prior "then"
    .then((name) => {
        console.log(name);
        return name.length;
    })
    .then ((nameLength) => {
        console.log(nameLength)
    })
    .catch((error) => {console.log(error); return 123;})
    /* 
        this "then" will run no matter what, but only print 123 if the prior then+then+then/catch 
        actually failed (ran through the catch not the thens)

        if the logic goes through the then+then+then, then the then will print "undefined"
    */
    .then((num) => console.log(num));
