const fs = require('fs/promises');
const path = require('path');

const F1 = path.join(__dirname, 'files/file1.txt');
const F2 = path.join(__dirname, 'files/file2.txt');
const F3 = path.join(__dirname, 'files/output.txt');

function readFile(path) {
    return fs.readFile(path, {encoding:'utf-8'});
}

async function main() {
    try {
        // Reading file1 and file2 parellely
        const [str1, str2] = await Promise.all([readFile(F1), readFile(F2)]);  
        // concating the two string 
        const str = str1.concat(str2);
        // Split two string
        const arr = str.split('\n');
        // Sort the array of string
        const res = arr.sort((a, b) => a - b);
        // join back all the number
        const data = res.join('\n');
        // Write into a file3
        await fs.writeFile(F3, data);
        console.log('File written successfully');
    }
    catch (err) {
        
    }
}

main();

