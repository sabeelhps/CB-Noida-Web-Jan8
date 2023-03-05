
// // sayHello is a function name
// function sayHello() {
//     // function body
// }

const a = 20;
const b = 30;
const res = a + b;
// console.log(res);

// ..
// ..100 lines

const c = 40;
const d = 50;
const e = c + d;
// console.log(e);

//...1000 lines

function add(x, y) { //function defintion - x,y are parameters
    const res = x + y;
    // console.log(res);
}

add(4, 5); //function call - arguments are 4,5 

//...200 lines

add(6, 7);

//...

function cube(num) {
    return num ** 3;
}

const cubeOf3 = cube(3);

// console.log(cubeOf3);

// default params

function multiply(x, y, z=3) {
    return x * y * z;
}

const ans = multiply(2, 3, 5);

// console.log(ans);


// Q. sum of n positive integers

function sumOfNIntegers(num) {
    return num * (num + 1) / 2;
}

console.log(sumOfNIntegers(5))

// Q. Factorial of a number

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// Q. find nCr

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(nCr(3,2));
console.log(nCr(5,1));
console.log(nCr(4, 2));

// Q. Print table of number N;

function printTable(num) {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

printTable(4);


function convertMinToSec(min) {
    return min * 60;
}
