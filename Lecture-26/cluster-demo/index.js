const cluster = require('cluster');
const http = require('http');
const os = require('os');
const process = require('process');

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      cluster.fork();
  });
} else {
  http.createServer((req, res) => {
        res.statusCode = 200;
        let sum = 0;
        for (let i = 0; i < 10000000; i++) {
            sum += i;
        }
        res.end('Request completed');
  }).listen(8000, ()=>console.log('Server started using cluster at 8000'));

  console.log(`Worker ${process.pid} started`);
}