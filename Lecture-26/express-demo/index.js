const express = require('express');
const app = express();

app.get('/cat', (req, res) => {
    res.send('MEOOWWWW');
});

app.get('/dog', (req, res) => {
    res.send('Woof Woof Wooof');
});

app.get('/monkey', (req, res) => {
    res.send('Kho Kho');
});

app.get('/give-json', (req, res) => {
   
    const movies = [
        {
            id: 1,
            name: 'Don',
            imdb: 8,
            cast: ["Shahrukh Khan","Priyanka Chopra"]
        },
        {
            id: 2,
            name: 'Gangs of wasseypur',
            imdb: 8,
            cast: ["Nawajuddin Siddique","Manoj Vajpayee"]
        },
        {
            id: 3,
            name: 'Don 2',
            imdb: 8,
            cast: ["Shahrukh Khan","Priyanka Chopra"]
        },
    ]

    if (Math.floor(Math.random() * 100) % 2 === 0) {
        return res.status(400).json({ message: 'This is the bad request due to even number' });
    }
    
    res.status(200).json(movies);
});


// app.get('/r/cat', (req, res) => {
//     res.send('Cat Subreditt');
// })

// app.get('/r/dog', (req, res) => {
//     res.send('Dog Subreditt');
// })

// app.get('/r/apple', (req, res) => {
//     res.send('Apple Subreditt');
// })

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;

    // some db 
    // Build the html page(css and js)

    res.send(`You are requesting ${subredit} subredit`);
})

app.get('/products/:productid/comments/:commentid', (req, res) => {
    const { productid, commentid } = req.params; 
    res.send(`Product Id : ${productid}, commentid : ${commentid}`);
});

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('YOU MADE A GOOGLE SEARCH!');
})

// This route should be written at the end of all routes
app.all('*', (req, res) => {
    res.send('YOU ARE REQUESTING THE WRONG URL!');
});


app.listen(1234, () => {
    console.log('server started at port 1234');
});



// https://www.google.com/search?q=mdn
// https://www.google.com/search?q=javascript
// https://www.google.com/search?q=html