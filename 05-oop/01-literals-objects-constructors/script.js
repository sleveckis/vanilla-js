/*----------------------------------------OOP-------------------------------------*/
// standard class defininition 
class Circle{
  #radius;
  constructor(radius){
    this.#radius = radius;
  }
  getArea() {
    return Math.pow(this.#radius, 2) * Math.PI;
  }
}

const c1 = new Circle(4.5)
console.log(c1.getArea());
/*--------------------------------------------Object Literals & this Keyword */
// object literals 
const rectangle = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
  getArea: function () {
    return this.width * this.height;
  },
  doubleSize: function () {
    this.width = this.width * 2;
    this.width = this.width * 2;
  },
  resetAttributes: function () {
    this.width = 10;
    this.height = 20;
  },
};

/*-------mini-challenge: change webpage <p> text based on altering objecet literal*/
function updateRectText(){
  const rect_text = document.querySelector('p');
  rect_text.innerHTML = `<strong>The rectangle is ${rectangle.getArea()} meters in area.</strong>`;
}

function doubleRectSize() {
  rectangle.doubleSize();
  updateRectText();
}

function resetRectSize(){
  rectangle.resetAttributes();
  updateRectText();
}


function populateDocument() {
  //make and insert the p element
  const h1 = document.querySelector('h1');
  const rect_text = document.createElement('p');
  rect_text.innerHTML = `<strong>The rectangle is ${rectangle.getArea()} meters in area.</strong>`;
  h1.insertAdjacentElement("afterend", rect_text);

  //make and insert the button element
  const dbl_btn = document.createElement('button');
  dbl_btn.textContent = "Double Size";
  rect_text.insertAdjacentElement("afterend", dbl_btn);
  dbl_btn.addEventListener("click", doubleRectSize);

  const reset_btn = document.createElement('button');
  reset_btn.textContent = "Reset Size";
  dbl_btn.insertAdjacentElement("afterend", reset_btn);
  reset_btn.addEventListener("click", resetRectSize)
}

populateDocument();

/*-----------------------------------------------------------------------Constructor fuctions */
// familiar example of using a constructor
const now = new Date();

function Rectangle(name, w, h) {
  this.name = name;
  this.w = w;
  this.h = h;
  this.area = () => this.h * this.w;
}
const r1 = new Rectangle('r1', 20, 30);
console.log(r1.area());

// is object instance of "class...?"
console.log(r1 instanceof Rectangle);
// display constructor for an object
console.log(r1.constructor);

/* 
  What 'new' does
  1) a new empty object is created
  2 the constructor function is called with the arguments we passed in
  3) the 'this' keyword is set to the new empty object
  4) the new ojbect is returned from the constructor function
*/

/*------------------------------------------------------------------Literals vs Objects/Constructors */
const strLit = 'Hello';               // string literal, a primitive
const strObj = new String('Hello');   // String object

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//      Boxing:
// Under the hood, JS adds a wrapper to the string literal to make it a String object such that
// it has methods that can now be called from it, like toUpperCase
console.log(strLit.toUpperCase());

//      Unboxing:
// Under the hood, JS is turned from an object back into a literal
console.log(strObj.valueOf, typeof strObj.valueOf());

//strings
console.log(strLit instanceof String);              // false 
console.log(strObj instanceof String);              // true
console.log(strLit, typeof strLit);                 //string
console.log(strObj, typeof strObj);                 //object

//bool
const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);             // boolean
console.log(boolObj, typeof boolObj);             // object

//arrays
const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);
console.log(arrLit, typeof arrLit);               // object
console.log(arrObj, typeof arrObj);               // object

// functions (weird)
const funcLit = function (x) {
  return x + x;
};

const funcObj = new Function('x', 'return x + x');      // this should be in the geneva convention

console.log(funcLit, typeof funcLit);           // function object
console.log(funcObj, typeof funcObj);           // function object


// bojects
const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);               // object
console.log(obj2, typeof obj2);               // object

/*---------------------------------------------------------------------- Object properties */
function Rectangle(n, w, h){
  this.n = n;
  this.w = w;
  this.h = h;
  this.area = () => h*w;
}

const rect = new Rectangle('Donald Rectangle', 15, 30);
// you can ADD attributes to objects just by explicitly calling them like they exist
rect.color = 'red';
rect.perimeter = () => (rect.w *2) + (rect.h *2);

// Get keys
console.log(Object.keys(rect));           // n, w, area, color, perimeter

// Get values
console.log(Object.values(rect));         // donald rectangle, 15, 30, f, red, f

for (let [key, value] of Object.entries(rect)){
  console.log(`key: ${key} - value: ${value}`);
}

/*----------------------------------------------------------------------- */


