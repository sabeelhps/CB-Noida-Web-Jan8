const fs = require('fs/promises');
const { v4: uuid } = require('uuid');
const path = require('path');

const DATA_FILE_PATH = path.join(__dirname, '../data/data.txt');

const writeFile = async(data) => {
    console.log('Writing data into a file');
    return await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data));
}

const readFile = async() => {
    console.log('Reading from data file');
    return JSON.parse(await fs.readFile(DATA_FILE_PATH, {encoding:'utf-8'}));
}

const findProductById = async (productId) => {
    const products = await readFile();
    const product = products.find((product) => product.id === productId);
    return product;
}

const updateProduct = async (productId, updateProduct) => {
    const products = await readFile();
    const isPresent = products.some((product) => product.id === productId);
    if (!isPresent) {
        return false;
    }
    const updatedProducts = products.map((product) => product.id === productId ? { ...product, ...updateProduct } : product);
    await writeFile(updatedProducts);
    return true;
}

const seedFile = async() => {
    const products = [
        {
            id: uuid(),
            name: 'Iphone',
            price: 100
        },
        {
            id: uuid(),
            name: 'Macbook Air',
            price: 200
        },
    ];

    await writeFile(products);
    console.log('File seeded with dummy data');
}

module.exports = {
    readFile,
    writeFile,
    seedFile,
    findProductById,
    updateProduct
}