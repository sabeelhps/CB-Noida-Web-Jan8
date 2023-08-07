const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1/auth-demo')
    .then(() => console.log('connected'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true, parameterLimit: 5000, limit: '10mb' }));
app.use(session({
    secret: 'WeNeedABetterSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}));

const isLoggedIn = (req, res, next) => {
    if (!req.session.user_id) {
        return res.send('You need login first to do that');
    }
    next();
}

// Get new form to register the user

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async(req, res) => {
    const { username, email, password } = req.body;    
    const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hash });
    await user.save();
    res.send('User Registered Successfully!');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
        return res.redirect('/login');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.redirect('/login');
    }
    // storing the user_id inside the session for persistent login.
    req.session.user_id = user._id;
    return res.redirect('/secret');
});

app.get('/logout', async(req, res) => {
    await req.session.destroy();
    res.send('Logged Out Successfully!');
})

app.get('/secret', isLoggedIn,(req, res) => {
    res.send('<h1>This is some secret page after login!</h1>');
});

app.listen(3000,()=>{
  console.log('server started at port 3000');
});