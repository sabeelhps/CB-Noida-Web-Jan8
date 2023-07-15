const express = require('express');
const Movie = require('./models/movie');
const app = express();

// Add all the CRUD endpoins for movies.
app.get('/movies', async(req, res) => {
    const movies = await Movie.find({});
    res.status(200).json({
        message: 'All movies',
        status: 1000,
        data: movies
    });
})

module.exports = app;
