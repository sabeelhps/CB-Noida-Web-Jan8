const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index'); 
});


// http://localhost:3000/products?name=Iphone&price=4237638596

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send('YOU MADE A GET REQUEST!');
});

app.post('/products', (req, res) => {
    console.log(req.body)
    res.send('YOU MADE A POST REQUEST!');
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});