// class Car{
//     static className = 'This Class Name is Car';

//     constructor(name, price, color) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }

//     getDiscountedPrice(discount) {
//         return this.price - (this.price * discount / 100);
//     }

//     // Getter and Setter methods
//     get getPrice() {
//         return this.price;
//     }

//     get getName() {
//         return this.name;
//     }

//     set setPrice(newPrice) {
//         if (newPrice < 0) {
//             this.price = 0;
//         } else {
//             this.price = newPrice;
//         }
//     }

//     static sayHello() {
//         console.log(this.className);
//         console.log('Hello from Car class');
//     }
// }

// const c1 = new Car('Audi', 1000, 'white');
// const c2 = new Car('BMW', 2000, 'red');



// class Point{
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     getEuclidianDist(point) {
//         const x1 = this.x;
//         const y1 = this.y;
        
//         const x2 = point.x;
//         const y2 = point.y;

//         return Math.hypot((y2 - y1), (x2 - x1));
//     }

//     static distance(p1, p2) {
//         return Math.hypot((p2.y - p1.y), (p2.x - p1.x));
//     }

//     static getCentroid(p1, p2, p3) {
//         const x = (p1.x + p2.x + p3.x) / 3;
//         const y = (p1.y + p2.y + p3.y) / 3;
//         return new Point(x, y);
//     }
// }

// const p1 = new Point(3, 4);
// const p2 = new Point(5, 6);
// const p3 = new Point(1, 2);
// const p4 = new Point(0, 4);


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    sayName() {
        return `This is from parent class ${this.name}`;
    }
}

class Student extends Person{
    constructor(name, age, rollNo) {
        super(name, age);
        this.rollNo = rollNo;
    }
    
    get getRollNo() {
        return this.rollNo;
    }

    sayName() {
        return `This is from child class ${this.name}`;
    }
}

const s1 = new Student('ABC', 20, 324768987);
const s2 = new Student('DEF', 20, 324768987);
