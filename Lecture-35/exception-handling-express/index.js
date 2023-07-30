const express = require('express');
const app = express();
const { BadRequestError, NoFoundError } = require('./core/ApiError');


const products = [
    {
        name: 'iphone',
        price:20
    },
    {
        name: 'macbook',
        price:30
    },
    {
        name: 'ipad',
        price:99
    }
]


app.get('/products/:name', (req, res) => {
    const { name } = req.params;
    const product = products.find((product) => product.name === name);
    if (!product) {
        throw new BadRequestError('product with this name is not found!');
    }
    res.status(200).json({
        message: 'product',
        payload: product
    });
});

app.all('*', (req, res, next) => next(new NoFoundError('Invalid Path')));

// Custom error handler
app.use((err, req, res, next) => {
    const { message = 'something went wrong', status = 500 } = err;
    res.status(status).json({
        message: message
    });
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});