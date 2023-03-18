const arr = [[1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12]];

const res = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(res);

const sumOfEachArray = arr.map((curr) => {
    return curr.reduce((sum, num) => sum + num);
});

console.log(sumOfEachArray);

const arr1 = [[1, 2, 3], [4, 5], 6, 7, 8, { name: 'ABC' }, [{ name: 'Kartik', age: 21 }]];

let res1 = [];

for (let el of arr1) {
    if (Array.isArray(el)) {
        res1.push(...el);
    } else {
        res1.push(el);
    }
}

console.log(res1);
