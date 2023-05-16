/* operators */

// ternary operator
age >= 18 ? console.log("You can vote!") : console.log("You cannot vote yet");

// assigning a conditional value to a variable
const canVote = age > 18 ? true : false;
console.log(canVote);

// multiple statements
const auth = true;
let redirect;

if (auth) {
    alert('Welcome to the dashboard');
    redirect = '/dashboard'
} else {
    alert ('Access Denied');
    redirect = '/login';
}

console.log(auth);
