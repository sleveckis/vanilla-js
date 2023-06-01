/*-------------------------------------------------------Classes---------------------------------------------------*/
class Rectangle {
    constructor(id, w, h) {
        console.log('Ran');
        this.id = id;
        this.w = w;
        this.h = h;
    }

    // class methods don't use the 'function' keyword lol
    area() {
        return this.h * this.h;
    }

    // can also just do arrow functions though
    perimeter = () => this.h
    isSquare = () => this.h === this.w

}
const r = new Rectangle('001', 20, 20);
console.log(r);
console.log(r.perimeter(), r.isSquare(), r.area());

/*-----------------------------------------------------------------inheritance, override, polymorphism, subclasses */
 class Shape {
    constructor(id){
        this.id = id;
    }
    printId = () => console.log(this.id);
 }

 class Triangle extends Shape {
    constructor(id, b, h){
        // super() calls constructor of the parent class
        super(id);
        this.b = b;
        this.h = h;
    }
    getArea = () => (this.b * 0.5 * this.h);
    // override the function from the parent class (polymorphism)
    printId = () => console.log(`Triangle ID: ${this.id}`);
 }

 const tri = new Triangle("002", 20, 40);
 console.log(tri);
 // inherited from Shape class
 tri.printId();
 console.log(tri.getArea());

/*---------------------------------------------------------------------------------------------static methods */
