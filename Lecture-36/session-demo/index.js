const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {  }
}));

app.get('/cat', (req, res) => {
    res.send('MEEOWW');
});

app.get('/login', (req, res) => {
    const { username } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username  = 'Anonymous'} = req.session; 
    res.send(`<h1>Hello from ${username}</h1>`)
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});