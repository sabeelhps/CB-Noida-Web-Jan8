const productRepo = require('../repository/productRepo');

const applyDiscountOnAllProducts = async (discount) => {
    console.log('Processing discount on all products')
    const products = await productRepo.findAll();
    for (const product of products) {
        const newPrice = product.price - product.price * discount / 100;
        await productRepo.updateProduct(product.id, { price: newPrice });
    }
}

module.exports = {
    applyDiscountOnAllProducts
}