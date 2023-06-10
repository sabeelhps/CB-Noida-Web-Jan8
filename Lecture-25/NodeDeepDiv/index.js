process.env.UV_THREADPOOL_SIZE = 3;

const http = require('http');
const bcrypt = require('bcrypt');

// Default - 1200 req/sec

// UV_THREADPOOL_SIZE =1, 1400 req/sec
// UV_THREADPOOL_SIZE =2, 1400 req/sec
// UV_THREADPOOL_SIZE =3, 1400 req/sec

const server = http.createServer((req, res) => {
    bcrypt.hash('HelloWorld', 2).then((hash) => { 
        res.statusCode = 200;
        res.end(hash);
    });
});

server.listen(1234, () => {
    console.log('Server started at port 1234');
})
