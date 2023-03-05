// Q1. Print stars : row=4
// *
// * *
// * * *
// * * * *

// const row = 10;

// for (let i = 1; i <= row; i++){
//     let str = "";
//     for (let j = 1; j <= i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

// ------------------------------------------------------------------

// Q2.Reverse words in a sentence
// Input: "This is a blue dog"
// Expected: "dog blue a is This"

// const sentence = "This is a blue dog";
// const res = sentence.split(' ').reverse().join(' ');
// console.log(res);


// --------------------------------------------------------------
// Q3. Reverse each word without changing the position of word in a sentence
// Input: "This is a blue dog"
// Expected: "sihT si a eulb god"

// const sentence = "This is a blue dog";

// const words = sentence.split(' ');

// const res = [];
// for (let word of words) {
//     const reversedWord = word.split('').reverse().join('');
//     res.push(reversedWord);
// }

// console.log(res.join(' '));

// --------------------------------------------------------------
// Q4. Calculate frequency of each word in a sentence
// Input: "This is a blue dog blue dog is a This a a is"
// Expected: 
// This -> 2
// is -> 3
// a -> 4
// dog -> 2
// blue -> 2

// const sentence = "This is a blue dog blue dog is a This a a is";

// const freq = new Map();

// const words = sentence.split(' ');

// for (let word of words) {
//     if (freq.has(word)) {
//         freq.set(word, freq.get(word) + 1);
//     } else {
//         freq.set(word, 1);
//     }
// }

// for (let entry of freq) {
//     console.log(`${entry[0]}--->${entry[1]}`);
// }

// -----------------------------------------------------------------------
// Q5. Remove duplicate words from sentence

// Input: "This is a blue dog blue dog is a This a a is"
// Expected: "This is a blue dog"

// const sentence = "This is a blue dog blue dog is a This a a is";
// const uniqueWords = new Set(sentence.split(' '));
// const res = [];

// for (let word of uniqueWords) {
//     res.push(word);
// }

// const sentenceWithUniqueWord = res.join(' ');
// console.log(sentenceWithUniqueWord);

// Q6. 

const person = {
    name: 'Kartik',
    age: 20,
    isAdult: true,
    favColor: 'blue'
}

// // expected output : [['name', 'Kartik'],['age', 20], ['isAdult', true], ['favColor', 'blue']];

// const res = [];

// for (let key in person) {
//     res.push([key, person[key]]);
// }
// console.log(res);


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));








