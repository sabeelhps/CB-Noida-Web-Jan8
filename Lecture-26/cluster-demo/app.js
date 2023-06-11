const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum += i;
    }
    res.end('Request completed');
});

server.listen(3000, () => console.log('started the server at 3000'));