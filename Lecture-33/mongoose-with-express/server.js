const mongoose = require('mongoose');
const app = require('./app');

(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/moviesDB');
        console.log('DB Connection Open')
        app.listen(3000,()=>{
            console.log('server started at port 3000');
        });
    }
    catch (err) {
        console.log('Initiating gracefull shutdown');
        console.log(err);
        await mongoose.disconnect();
    }
})();


