// Sum of number element
// input: [1,2,3,"999","123",12,"235678"]
// Output: 18

function sumOfNum(arr) {
    let sum = 0;
    for (let el of arr) {
        if (typeof el === 'number') {
            sum += el;
        }
    }
    return sum;
}

console.log(sumOfNum([1, 2, 3, "999", "123", 12, "235678"]));


// Captilaize first letter

const sentence = "The blue fox jumps over a white lazy dog";

function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    const temp = [];
    for (let word of words) {
        temp.push(word.replace(word[0], word[0].toUpperCase()));
    }
    return temp.join(' ');
}

console.log(capitalizeFirstLetter(sentence));