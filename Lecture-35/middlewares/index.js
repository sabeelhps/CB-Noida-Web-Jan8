const express = require('express');
const app = express();

const verify = (req, res, next) => {
    const { password } = req.query;
    if (!password) {
        return res.send('Password is empty');
    }
    if (password !== 'apple') {
        return res.send('Incorrect Password');
    }
    return next();
}


app.use((req, res, next) => {
    req.username = "sabeel";
    console.log('My first middleware');
    // res.send('HIJACK BY MY APP.USE!!!');
    return next();

    console.log('Inside first middlware after calling next()');
});

app.use((req, res, next) => {
    const { username } = req;
    console.log(`Hello ${username}`);
    console.log('My second middleware');
    next();
})

app.get('/', (req, res) => {
    res.send('Home Route!');
});

app.get('/cat', (req, res) => {
    res.send('MEEOOWWWW');
});

app.get('/secret',verify, (req, res) => {
    res.send('I wear headphone in public so that i dont have to talk to anyone!');
})

app.listen(3000,()=>{
  console.log('server started at port 3000');
});