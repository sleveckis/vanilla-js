/* operators */

// ternary operator
age >= 18 ? console.log("You can vote!") : console.log("You cannot vote yet");
// assigning a conditional value to a variable
const canVote = age > 18 ? true : false;
console.log(canVote);

// multiple statements, the long way
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
// the short way:
const redirect1 = auth ? (alert('Welcome 2 tha dashbors'), '/dashboard') : (alert ('Access Denied'), '/login');

// if we only want something to happen up on truth
auth ? console.log('Welcome 2 the dashboard') : null;
// or... could use the && operator instead
auth && console.log('Welcome to the dashboard');