// // Implicit Binding

// const snake = {
//     name: 'Cobra',
//     length: 10,
//     color: 'black',
//     speak: function () {
//         return `${this.name}-----> HISSSSS`;
//     }
// }

// // Explicit Binding


// function fun(name, age, color) {
//     console.log(this);
//     console.log(name);
//     console.log(age);
//     console.log(color)
// }

// const a = {
//     l: 10,
//     m:true
// }

// // fun.call(a, "ABC", 22, 'Blue');

// const f = fun.bind(a);


// // ..1000 lines 

// f("ABC", 22, 'Blue');



function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function ElectronicProduct(name, price) {
    Product.call(this, name, price);
    this.category = 'Electronic product';
}

const cheese = new Food('Pizza', 5);
const laptop = new ElectronicProduct('Macbook', 2000);
