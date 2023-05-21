

// creating a promise
const p = new Promise((resolve, reject) => { // resolve and reject are also the functions
    const randomNum = Math.floor(Math.random() * 10 + 1);
    if (randomNum % 2 === 0) {
        resolve(randomNum);
    } else {
        reject(new Error('Not a even number!'));
    }
});

p.then((value) => {
    console.log('inside resolve');
    console.log(value);
})
    .catch((err) => {
        console.log('inside reject');
        console.log(err.message);
    });