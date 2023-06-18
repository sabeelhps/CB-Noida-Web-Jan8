const fs = require('fs/promises');

const products = [
    {
        id: 1,
        name: 'Iphone',
        desc: 'some description of iphone',
        quantity: 100
    },
    {
        id: 2,
        name: 'Macbook',
        desc: 'some description of macbook',
        quantity: 200
    },
]

async function main() {
    // await fs.writeFile('data.txt', JSON.stringify(products));
    // console.log('written successfully');

    const data = await fs.readFile('data.txt', { encoding: 'utf-8' });

    console.log(JSON.parse(data));
}

main();