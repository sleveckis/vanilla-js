/* DOM intro */
/* 
                    what is the dom?

- the structure of a webpage that we can interface via javascript
- includes attributes, tags, etc
- represented as a tree structure
*/
// in the dom, classes, ids, etc are 'attributes' of a dom element, and the 'text node' contains the text, if there is any

// show some dom elements in da console
console.log(document)
console.log(document.body);
console.log(document.body.innerHTML);

// can also write to the dom
/*
document.body.innerHTML = '<h1>Hello Everyone</h1>'; // this will replace all body text (h1 and p, etc) - commented out because will mess with getElementByID further down
*/
// not super helpful because it just appends paragraph text to the end of the webpage, there are more targeted ways to add text to a page via js
document.write('Hello from the script');

// grab specific element
console.log("--------------------------");
console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>';

// will overwrite line above 
const justTheH1 = document.querySelector('#main h1').innerText = 'Hello';