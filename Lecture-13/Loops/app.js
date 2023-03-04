// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// Foor Loop
// for (initilisation; condition; updation){
//     work
// }

// let i;

// for (i = 1; i <= 10; i++){
//     console.log(i);
// }

// console.log(i);

// Infinite Loop
// for (let num = 100; num < 200; num = num - 10){
//     console.log(num);
// }


// for (let num = 100; num < 200; num = num - 10){
   
//     if (num === 0) {
//         break;
//     }

//     console.log(num);
// }

// for (let i = 1; i <= 10; i++){
//     if (i === 5) continue;
//     console.log(i);
// }


// while (conditon) {
        // work
// }

// let num = 100;

// while (num >= 0) {
//     console.log(num);
//     num = num - 10;
// }


const colors = ['blue', 'orange', 'green', 'purple'];

// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }


// for (let color of colors) {
//     console.log(color);
// }

const cart = [
    {
        name: 'Iphone',
        price: 20,
        qty: 3
    },
    {
        name: 'Watch',
        price: 30,
        qty: 2
    },
    {
        name: 'Airpods',
        price: 10,
        qty: 4
    }
];

let totalAmount = 0;

for (let item of cart) {
    totalAmount += item.price * item.qty;
}

console.log(totalAmount);

const car = {
    name: 'BMW',
    price: 100,
    color: 'Black'
}

for (let prop in car) {
    console.log(`${prop}---> ${car[prop]}`);
}

