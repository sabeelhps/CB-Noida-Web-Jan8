


// const radii = [1, 2, 3, 4, 5, 6, 7, 8];

// const area = (radius) => Math.PI * radius * radius;
// const diameter = (radius) => 2 * radius;


// function myMap(radii, logic) {
//     const res = [];
//     for (let radius of radii) {
//         res.push(logic(radius));
//     }
//     return res;
// }

// console.log(myMap(radii, area));
// console.log(myMap(radii, diameter));

// const areas = radii.map(function (radius) {
//     return Math.PI*radius*radius;
// })

// console.log(areas);


// ===============================polyfill---------

const radii = [1, 2, 3, 4, 5, 6, 7, 8];

const area = (radius) => Math.PI * radius * radius;
const diameter = (radius) => 2 * radius;


Array.prototype.myMap = function(logic) {
    const res = [];
    for (let el of this) {
        res.push(logic(el));
    }
    return res;
}

const res = radii.myMap(area);

console.log(res);


const nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(nums.myMap((num) => Math.sqrt(num)));


Array.prototype.myFilter = function (logic) {
    const res = [];
    for (let el of this) {
        if (logic(el)) {
            res.push(el);
        }
    }
    return res;
}

console.log(nums.myFilter(function (num) {
    return num % 2 === 0;
}))




