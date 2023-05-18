/*--------------------------------------------DOM STUFF--------------------------------------------------------*/


/*                          DOM Properties                              */
/* there are better ways to access these elements, but it is also possible this way (via document.x.y.z) */
let output;
// this is deprecated, but good to know (?) according to brad
output= document.all;
output = document.all[2] // grabs 3rd element in the dom.all 

// grab everything in the html element
output = document.documentElement;

// grab everything in the head or body
output = document.head;
output = document.body;

// grab everything directly in the body as an 'HTML collection' (not an array, but can be converted into one, say, for the forEach() function)
output = document.head.children;
output = document.body.children;

output = document.doctype; // HTML via '<!DOCTYPE html> in index.html
output = document.characterSet;
output = document.contentType;

// if we had forms, could use below
// output = document.forms[0].id;
// output = document.forms[0].method;       // this will be 'get' by defualt because there's always at least a get method 
// output = document.forms[0].action

// if we had links, could use below
// output = document.links;
// output = document.links[0].href;         
// output = document.links[0].href = 'htpps://facebook.com'             // changes first link to direct to facebook
// output = document.links[0].id = 'cool-link';

// output = document.images[0].src;


/*                          DOM Selectors                               */
/* more practical than the stuff in DOM Properties */
output = document.getElementById('app-title');                           //<h2 id='app-title'>Web Cralwer</h2>
output = document.getElementById('app-title').getAttribute('id');       // app-title
output = document.getElementById('app-title').setAttribute('class', 'large-texts');     // adds (sets) a class to whatever's grabbed by asking for 'stuff with the app-title id'
console.log(document.getElementById('app-title'));                      // can see the class has been added to the h2, cool!


// get/change content
const title = document.getElementById('app-title');
console.log(title.textContent);
title.textContent = 'Hello 1'
title.innerText = 'Hellow 2'
title.innerHTML = '<strong>Web Crawler</strong>'

// change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding= '10px';
title.style.borderRadius = '10px';

// document.querySelector() - before this, needed getElementById, assisted by jquery
console.log(document.querySelector('h1'));                  // only selects the FIRST h1... generally used for selecting by id or singleton attributes
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('li:nth-child(2)'));     // <li>...orange juice... </li>


/*                          DOM Selectors - querySelectorALL()          */
console.log("---------------------------------------");
const listItems = document.querySelectorAll('.itemitem');
console.log(listItems[2].innerText);                                     // returns NodeList, not HTML collection (can do higher-order array functions on NodeList)
listItems.forEach(x => x.style.color = 'blue')                           // higher order array function on a NodeList to edit css and make every list item red

/*                          more getElementByX                          */
console.log("---------------------get elements by x (not great to use)-------------------");
const listItems2 = document.getElementsByClassName('itemitem');             // returns an HTMLCollection
const listItems2Arr = Array.from(listItems2);                            // convert HTMLCollection to Array so higher-order array functions work on it
listItems2Arr.forEach(x => console.log(x.innerText));
console.log(listItems2);                                                // apples, orange juice, crab shells
// can also get stuff via tag (li, ul, p, h1, etc)
const listItemsTags = document.getElementsByTagName('li');
console.log(listItemsTags[0].innerText);                                // apples


/*                                    DOM Traversal                                             */

// getting children from parent (down the tree)
console.log("---------------------------------dom travesal -----------------------  ---------");
let parent = document.querySelector('.parent');
console.log(parent);
output = parent.children;                                               // HTMLCollection
output = parent.children[1];                                            // <div class ="child">Child 2</div> ... also.. sometimes it just says div.child... weird
output = parent.children[1].innerText;                                  // Child 2
output = parent.children[1].innerText = "Child 2 New"                   // changes the text in the webpage
parent.firstElementChild.innerText = 'Child One';                       // changes the text of Child 1 in the webpage. also need firstElementChild not just firstChild

// getting parent from child
const child = document.querySelector('.child');                         // will select the first child, child 1
output = child.parentElement;                                           // div.parent
child.parentElement.style.border = '1px solid #ccc';                    // adds a border around the children elements (the list) even though the parent element is just a bland div of class .parent
child.parentElement.style.padding = '10px';                             // adds a border around the children elements (the list) even though the parent element is just a bland div of class .parent

// sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')        // y.nth-child(x)         css pseudo-selector to get xth child of class y
console.log(secondItem.innerText);                                      // Child 2 New
secondItem.previousElementSibling.style.color = 'red';
secondItem.nextElementSibling.style.color = 'green';

/*                                     DOM Node Types                                                  */
// 12 Types:
// Element, Attr, Text, CDATASection, EntityReference, Entity, ProcessingInstruction, Comment, Document, DocumentType, DocumentFragment, Notation
// DOM Nodes use firstChild instead of firstElementChild, previousSibling instead of previousElementSibling, etc
parent = document.querySelector('.parent');

// Creates NodeList of length 9: text, comment, text, div.child, text, div.child, text, div.child, text             see index.html for context
// (NOTE: "text" is the whitespace between divs, and the "div.child" is the div which actually contains text)
output = parent.childNodes;                                         
// by this logic we can actually use the Nodes to influence stuff, just have to be a bit more careful
// "Child 1" is at index 3 of the Nodelist currently saved in 'parent' via the return parent.ChildNodes
parent.childNodes[3].innerText = "Child the First";                    // changes text on webpage
const lastNode = parent.lastChild.textContent;                         // the last "text" whitepace object


console.log(output);



