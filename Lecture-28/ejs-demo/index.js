const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('CONNECTED');
});

const todos = [
    {
        task: 'Go to gym',
        completed: true
    },
    {
        task: 'Buy Groceries',
        completed: false
    },
    {
        task: 'Buy Vegetables',
        completed: true
    },
]

app.get('/home', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    res.render('home', { randomNum });
});


app.get('/todos', (req, res) => {
    res.render('todos', { todos });
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});