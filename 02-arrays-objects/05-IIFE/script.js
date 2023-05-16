
// 'user' is already declared in 'otherscript.js'... this will create a conflict if 
// the const user declaration was uncommented,
// because both .js scripts are technically share a global scope
// probably because they are imported and 'called' (?) from the same html file

// const user = 'Doorknob'

// can fix this without changing var name from 'user' via IIFE
// NOTE: the template/prototype is like ()(); typing that first makes sense to me
// but you fill in the first parenthesis with the function
(function (){
    const user = 'John';
    console.log(user);
})();

// Add Paremters to an IIFE
(function (name) {
    const retval = `The given name was ${name}`
    console.log(retval);
})("Stephen");

// you CANNOT call the funciton outside of the parenthesis it's contained in 
// you also can't call the IIFE if there's any code between the parenthesis in the  ()(); template

