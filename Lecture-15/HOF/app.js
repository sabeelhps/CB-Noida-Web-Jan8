

// function fun(func) {
//     var b = 200;
//     console.log(b);
//     func();
// }


// function a() {
//     console.log('Inside a');
// }

// fun(a);


// function b() {
//     function c() {
//         console.log("Inside c");
//     }
//     return c;
// }


// const f = b();

// // console.log(f);
// f();



// ----------------------------------------------

const radii = [1, 2, 3, 4, 5];




function calculateDiameter(radii) {
    let res = [];
    for (let radius of radii) {
        res.push(2 * radius);
    }
    return res;
}

function calculateAreas(radii) {
    let res = [];
    for (let radius of radii) {
        res.push(Math.PI*radius*radius);
    }
    return res;
}

function calculateCircumference(radii) {
    let res = [];
    for (let radius of radii) {
        res.push(2 * Math.PI * radius);
    }
    return res;
}

// ====================================Better way==================

const diameter = radius => 2 * radius;
const area = radius => Math.PI * radius * radius;
const circumference = radius => 2 * Math.PI * radius;

function calculate(radii, logic) {
    const res = [];
    for (let radius of radii) {
        res.push(logic(radius));
    }
    return res;
}

// console.log(calculateDiameter(radii))
// console.log(calculateAreas(radii))
// console.log(calculateCircumference(radii))

console.log(calculate(radii, diameter));
console.log(calculate(radii, area));
console.log(calculate(radii, circumference));