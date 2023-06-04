function add(x, y) {
    return x + y;
}

console.log(add(4, 5));

const car = {
    name: 'BMW',
    color: 'black',
    price:20000
}

console.log(car);

console.log(car.__proto__ === Object.prototype);

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }
}

const vivek = new Person("Vivek", 26);

console.log(vivek.getName);
