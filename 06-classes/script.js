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
// static methods must be used on the CLASS THEMSELF not the instanc(s) of a class, see below
class House {
    constructor(address, height, sqft){
        this.address = address;
        this.height = height;
        this.sqft = sqft;
    }
    static getClass() {
        return 'House';
    }
}

const my_home = new House("123 cool guy street", 120, 2000);
console.log(House.getClass());                                  // my_home.getClass() would result in an error!