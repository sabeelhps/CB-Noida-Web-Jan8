
// // creation of a promise
// const p = new Promise((resolve, reject) => {
//     resolve(100);
//     // reject(new Error('something went wrong!'));
// });


// // consuming the promise
// p
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Inside finally block')
//     })



// console.log('START');

// const res = fetch('https://fakestoreapi.com/products/1');

// res.then((response) => {
//         return response.json() // this also returns a promise
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log('END');


function downloadFile(path) {
    console.log(`started to download the file from path : ${path}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(path.split('/').pop());
        }, 3000);
    })
}


function compressFile(fileName) {
    console.log(`starting to compress the file ${fileName}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fileName.split('.')[0] + '.zip');
        }, 2000);
    })
}

function uploadFile(compressedFileName) {
    console.log(`starting to upload the file ${compressedFileName}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('http://whatsapp.cloud/'+compressedFileName);
        }, 2000);
    })
}

const URL = 'http://whatsapp.com/user/profile.jpg';


console.log('STARTED PROCESS');

downloadFile(URL)
    .then((fileName) => {
        console.log(`File downloaded successfully! ${fileName}`);
        return compressFile(fileName);
    })
    .then((compressedFileName) => {
        console.log(`file compressed successfully ${compressedFileName}`);
        return uploadFile(compressedFileName);
    })
    .then((uploadedPath) => {
        console.log(`File uploaded successfuly ${uploadedPath}`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Everything done!');
    });

console.log('PROCESS ENDED');