const express = require('express');
const productRepo = require('./repository/productRepo');
const app = express();

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
        const products = await productRepo.readFile();
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

app.patch('/products/:productid', async (req, res) => {
    const { productid } = req.params;
    const updatedProduct = await productRepo.updateProduct(productid, { price: 900, name:'Iphone 14 Pro' });
    res.json(updatedProduct);
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});