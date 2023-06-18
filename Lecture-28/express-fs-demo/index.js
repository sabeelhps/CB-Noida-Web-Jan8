const express = require('express');
const productRepo = require('./repository/productRepo');
const productService = require('./services/productService');
const app = express();

// This is just for seeding a file-------
// (async () => {
//     try {
//         await productRepo.seedFile();
//     }
//     catch (err) {
//         console.log('Inside IIFE')
//         console.log(err);
//     }
// })()

app.get('/products', async (req, res) => {
    try {
        const products = await productRepo.findAll();
        res.json(products); 
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/products/:productid', async (req, res) => {
    const { productid } = req.params;
    const product = await productRepo.findProductById(productid);
    res.json(product);
});

app.put('/products/:productid', async (req, res) => {
    const { productid } = req.params;
    const updatedProduct = await productRepo.updateProduct(productid, { price: 900, name: 'Iphone 14 Pro' });
    res.json(updatedProduct);
});

app.patch('/products/applyDiscount', async(req, res) => {
    const { discount } = req.query; 
    console.log(`Entry into apply discount , discount : ${discount}`);
    await productService.applyDiscountOnAllProducts(discount);
    res.json({
        message:`Applied ${discount} percent discount on all products`
    })
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});