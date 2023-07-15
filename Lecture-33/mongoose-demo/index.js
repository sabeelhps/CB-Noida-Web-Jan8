const mongoose = require('mongoose');

// Here we are trying to connect with existing moviesDB database
mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(() => console.log('CONNECTION OPEN!'))
    .catch((err) => console.log(err));


// mongoose.disconnect().then(() => console.log('Connection Closed'));

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
}, { versionKey: false });

const Movie = mongoose.model('Movie', movieSchema);

// const nightManager = new Movie({ name: 'Night Manager', year: 2023, rating: 8, isWatched: true });
// const aquaMan = new Movie({ name: 'Aquaman', year: 2018, rating: 7.6, isWatched: false });

// console.log(nightManager);

// nightManager.save()
//     .then((m) => console.log(m));


// aquaMan.save()
//     .then((m) => console.log(m));


// Movie.find({}).then((m) => console.log(m));


// Movie.find({rating: {$gte: 7}}).then((m)=>console.log(m))

// Movie.find({$and:[{rating: {$gte:7}},{rating: {$lte: 8}}]}).then(m=>console.log(m))


// Movie.findById('64b25cdc792ee04aa71eac3f')

