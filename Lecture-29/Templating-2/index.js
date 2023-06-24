const express = require('express');
const app = express();
const path = require('path');

// This is to tell express to use views folder for rendering templates
app.set('views', path.join(__dirname, 'views'));

// This tell express to use ejs as templating engine
app.set('view engine', 'ejs');

// This is required to server static files from server
app.use(express.static(path.join(__dirname, 'public')));

const todos = ["Go to gym", "Buy Vegetables", "Watch Movies"];

app.get('/home', (req, res) => {
    const data1 = `<p>This is some paragrah</p>`;
    const data2 = `<a href="http://codingblocks.com">Coding Blocks</a>`;
    const data3 = Math.floor(Math.random() * 10 + 1);
    res.render('home', { data1, data2, data3 });
});

app.get('/todos', (req, res) => {
    res.render('todos', { todos });
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});