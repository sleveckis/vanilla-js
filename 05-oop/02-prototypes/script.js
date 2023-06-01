/*-----------------------------------------------------Prototypes-------------------------------------------------------------------*/
function Rectangle(w, h){
  this.w = w;
  this.h = h;
}

const r = new Rectangle(20, 30);
/*
  expand the below console print in a browser, and notice the [[Prototype]]
  attribute. further chained prototypes contain methods that can be directly
  applied to the object
*/
console.log(r);

// get the prototype explicitly
console.log(Object.getPrototypeOf(r));

/*--------------------------------------------------------------------------------------------------Add methods to the prototype chain */

// note: arrow functions won't work here because arrow functions provide a lexical 'this', which means every 'this' inside an arrow function at global scope
// will refer to the global Window object, and not what we actually want it to

// explained another way: arrow functions use the 'this' that exists in the context where the function is created

// basically, arrow functions don't have their OWN 'this'

Rectangle.prototype.area = function () {return this.w * this.h;}          // area f () now exists in the top-level prototype chaibnn
Rectangle.prototype.perim = function () {return (this.w * 2) + (this.h * 2);}
Rectangle.prototype.printSides = function () {console.log(this.w); console.log(this.h);}
console.log(r);
r.printSides();
console.log(`area: ${r.area()}`);

/*-------------------------------------------------------------------alternate way of object creation/adding prototypes: Object.create()*/

// make n object literal of desired prototype functions
const rectPrototypes = {
  area: function () {
    return this.w * this.h;
  },
  perim: () => (this.h * 2) + (this.w * 2),
};

// alternative to a constructor;
// passing in the object literal of desired functions, and desired object attributes
// this makes an object with attributes h, w, and functions area and perim in its prototype
function createRectangle(h, w){
  return Object.create(rectPrototypes, {
    h: {
      value: h
    },
    w: {
      value: w
    },
  });
}

const rect = createRectangle(20, 30);
console.log(rect);
console.log(`area: ${rect.area()}`);

/*------------------------------------------------------------------------------------------------prototypical inheritance and call() */
function Shape(name){
  this.name = name;
}

// akin to class Square extends Shape
function Square(name, s){
  // call() allows us to pass in Square's 'this' (so passing Square in basically)
  Shape.call(this, name);
  this.s = s;
}

// necessary step: "point" Square's prototype to Shape's prototype so that inheretence truly exists
Square.prototype = Object.create(Shape.prototype);

// be default, making a Square object would use the Shape constructor based on our current implementation.
Square.prototype.constructor = Square;

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
// akin to class Triangle extends Shape
function Triangle(name, b, h) {
  Shape.call(this, name);
  this.b = b;
  this.h = h;
}
// Inherits Shape prototypes
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Object.create(Shape.prototype);

// add a prototype method too for funsies
Triangle.prototype.printName = function () {console.log(`This triangle's name is ${this.name}`);}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
const squ = new Square('Cool Squqre', 2);
const tri = new Triangle('Doorknob', 10, 12);
tri.printName();