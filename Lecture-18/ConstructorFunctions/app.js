
function fun(name, age) {
    // Here in this case this refers to a window
    console.log(this);
    this.name = name;
    this.age = age;
}

// fun();

// Constructor functions

function Car(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
}

Car.prototype.getPrice = function () {
    return this.price;
}

const c1 = new Car('BMW', 100, 'red');

const c2 = new Car('Audi',200, 'black')

