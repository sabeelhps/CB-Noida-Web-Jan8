const Food = require('./models/Food');

const initialFoods = [
    {
        name: 'Burger',
        price: 10,
        desc: 'Extra Cheese and Spice',
    },
    {
        name: 'Panner Tikka',
        price: 22.25,
        desc: 'Smooth and Delicious Paneer grilled to Perfection',
    },
    {
        name: 'Pizza',
        price: 19.25,
        desc: 'Smooth and Delicious Pizza grilled to Perfection',
    },
    {
        name: 'Pasta',
        price: 15.99,
        desc: 'Smooth and Delicious Pasta grilled to Perfection',
    },
    {
        name: 'Noodles',
        price: 15.99,
        desc: 'Smooth and Delicious Pasta grilled to Perfection',
    }
];

async function seedFoods() {
    await Food.deleteMany({});
    await Food.insertMany(initialFoods);
    console.log('Foods Seeded');
}

module.exports = seedFoods;