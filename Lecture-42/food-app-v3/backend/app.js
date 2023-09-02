const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catchAsync = require('./utils/catchAsync');
const Food = require('./models/Food');
const seedFoods = require('./seed');
const cors = require('cors');

app.use(express.json());

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/food-app-db')
    console.log('DB Connected');
    //this is only for seeding the foods in development phase, not to be used in prod.
    // await seedFoods()
})();

// This is added to enable cross origin requests to the server
app.use(cors());

app.get('/foods', catchAsync(async(req, res) => {
    const foods = await Food.find({});
    res.json({
        message: 'All foods',
        payload: foods,
        error: null 
    })
}));


app.post('/cart', (req, res) => {
    console.log(req.body);
    res.send('Got your updated cart');
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message || 'something went wrong',
        payload: null,
        error: err.message 
    })
})

app.listen(8000,()=>{
  console.log('server started at port 8000');
});