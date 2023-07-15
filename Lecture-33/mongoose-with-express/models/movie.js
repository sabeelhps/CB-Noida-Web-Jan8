const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
}, { versionKey: false });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;