'use strict'

// map

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareNums = nums.map(num => num ** 2);

console.log(squareNums);

const cubeRoot = nums.map((num, idx, array) => {
    return { cubeRoot: Math.cbrt(num), index: idx };
});

console.log(cubeRoot);
console.table(cubeRoot);

// filter

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const evenNums = nums.filter(isEven);

console.log(evenNums);


const vehicles = [
    { wheels: 4, color: 'black' },
    { wheels: 2, color: 'red' },
    { wheels: 3, color: 'Orange' },
    { wheels: 12, color: 'green' },
    { wheels: 1, color: 'purple' },
    {wheels: 4, color:'aqua'},
    {wheels: 8, color:'purple'},
    {wheels: 4, color:'black'},
    {wheels: 4, color:'red'},
    {wheels: 2, color:'orange'},
    {wheels: 2, color:'green'},
    {wheels: 2, color:'black'},
    {wheels: 2, color:'white'},
]

const twoVehiler = vehicles.filter((vehicle) => vehicle.wheels === 2);
const fourVehiler = vehicles.filter((vehicle) => vehicle.wheels === 4);

console.log(twoVehiler);
console.log(fourVehiler)

// Reduce

// const sumOfNums = nums.reduce(function (accumator, currentNum) {
//     return accumator + currentNum;
// }, 10);

// console.log(sumOfNums);

// const cart = [
//     { name: 'Iphone', qty: 5, price: 10 },
//     { name: 'Ipad', price: 20, qty: 2 },
//     { name: 'Mac', price: 10, qty: 3 }
// ];

// const totalAmount = cart.reduce((total, item) => total + item.price * item.qty, 0);

// console.log(totalAmount);

const arr = [[1, 2, 4], [5, 6], [7, 8, 9], [10, 11, 12, 13, 14]];

// const output = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];






