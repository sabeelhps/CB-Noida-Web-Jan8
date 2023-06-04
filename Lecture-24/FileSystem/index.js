const fs = require('fs');

console.log('START');

const data = "Hello from file system but with non blocking I/O";

// fs.writeFileSync('abc.txt', data, { encoding: 'utf-8', flag: 'w' });

fs.writeFile('def.txt', data, { encoding: 'utf-8', flag: 'w' }, (err) => {
    if (err) {
        throw err;
    }
    console.log('Written Successfully');
});

console.log('END');