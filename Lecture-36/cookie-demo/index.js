const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('weneedabettersecret'));

app.get('/cart', (req, res) => {
    res.cookie('username', 'Sabeel');
    res.cookie('mode', 'dark');
    res.cookie('favFruit', 'apple', {
        signed: true,
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.send('cart Route'); 
});

app.get('/products', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('Product route')
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});