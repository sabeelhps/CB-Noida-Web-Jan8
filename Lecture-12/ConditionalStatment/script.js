const isRaining = false;

// if (isRaining) {
//     console.log('Take the umbrella');
// } else {
//     console.log('Dont take the umbrella');
// }

// const randomNum = Math.floor(Math.random() * 100);

// if (randomNum % 2 === 0) {
//     console.log(`Even Number ${randomNum}`);
// }

// if (randomNum % 2 !== 0) {
//     console.log(`Odd Number ${randomNum}`);
// }

// Club
// const age = parseInt(prompt("Enter your age"));
// console.log(age);
// console.log(typeof age);


// Club - Bouncer
// 1. age < 18 - You cannont enter and drink
// 2. age is greater that or equal to 18 and less than 25 then you can enter but cannot drink
// 3. age is greater or equal to 25 then you can enter and drink

// if (age < 0) {
//     console.log('Invalid Age!');
// }
// else if (age < 18) {
//     console.log('You cannot enter and drink!');
// }
// else if (age >= 18 && age < 25) {
//     console.log('You can enter but cannot drink');
// }
// else {
//     console.log('You can enter and drink');
// }


// Switch Case

// const day = 'Tue';

// switch (day) {
//     case 'Mon':
//         console.log('Its Monday!');
//         break;
//     case 'Tue':
//         console.log('Its Tuesday');
//         break;
//     case 'Wed':
//         console.log('Its Wednesday');
//         break;
//     default:
//         console.log('Invalid Day');
// }

const food = prompt('Enter Food Name').toLowerCase();

if (food.includes('chicken') || food.includes('egg')) {
    console.log(`${food} belongs to Non-Veg Menu!`);
}
else if (food.includes('garlic') || food.includes('onion')) {
    console.log('This is veg Menu not a jain');
}
else {
    console.log('This is veg and jain menu');
}

