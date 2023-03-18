const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const firstGreaterThan5 = nums.find((num) => num > 5);

console.log(firstGreaterThan5);


const products = [
    {
        id: 1,
        name: 'Iphone',
        price: 400
    },
    {
        id: 2,
        name: 'Ipad',
        price: 200
    },
    {
        id: 3,
        name: 'Macbook',
        price: 300
    },
    {
        id: 4,
        name: 'Jeans',
        price: 700
    },
];

const product = products.find((item) => item.id === 2);

console.log(product);

const isPresent = products.some((item) => item.id === 10);

console.log(isPresent);


//
const numbers = [10, 20, 99, 88, 100, 45];

console.log(numbers);
numbers.sort((a, b) => a - b);

console.log(numbers);

const sortedProducts = products.sort((item1, item2) => item1.price - item2.price);

console.log(sortedProducts);