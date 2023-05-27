
// async function getFruits(name) {
//     const fruits = {
//         pineapple: '🍍',
//         apple: '🍎',
//         mango: '🥭',
//         grapes: '🍇'
//     }

//     if (!(name in fruits)) {
//         throw new Error(`cannot find this fruit with key : ${name}`);
//     }
//     return fruits[name];
// }

// async function getFruitShake() {

//     try {
//         console.log('Starting to get fruits');

//         const apple = await getFruits('apple');
    
//         console.log(`Got first fruits : ${apple}`);
    
//         const grapes = await getFruits('orange');
    
//         console.log(`Got second fruit ${grapes}`);
    
//         console.log('Now we can make a shake'); 
//     }
//     catch (err) {
//         console.log(err);   
//     }
//     finally {
//         console.log('I will always run!');
//     }
// }

// console.log('START');

// getFruitShake();

// console.log('END');
// // ..100000

// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')
// console.log('After thousand lines of code..')


// ----------------Static methods provided my Promise class

// async function fun() {
//     return 1 + 2;
// }

// function fun1() {
//     return Promise.resolve(1 + 2);
// }

// function fun2() {
//     return Promise.reject('This is not funny!');
// }


const task1 = () =>{
    return fetch('https://fakestoreapi.com/products/1')
};
const task2 = () =>{
    return fetch('https://fakestoreapi.com/products/2')
};
const task3 = () =>{
    return fetch('https://fakestoreapi.com/products/3')
};
const task4 = () =>{
    return fetch('https://fakestoreapi.com/products/4')
};

async function performBatchTasks() {
    try {
        console.time('Task Timer');

        // THIS CODE FOLLOWS A SERIES PATTERN
        // const t1 = await task1();
        // const t2 = await task2();
        // const t3 = await task3();
        // const t4 = await task4();

        // WE SHOULD WRITE A COMPLETE PARELLEL CODE

        const t1 = task1();
        const t2 = task2();
        const t3 = task3();
        const t4 = task4();

        // const result = await Promise.all([t1, t2, t3, t4]);
        // const result = await Promise.allSettled([t1, t2, t3, t4]);
        // const result = await Promise.race([t1, t2, t3, t4]);
        const result = await Promise.any([t1, t2, t3, t4]);
        console.log(result);
        console.timeEnd('Task Timer')
        // console.log([t1.status, t2.status, t3.status, t4.status]);
    }
    catch (err) {
        console.log(err);
    }
}

performBatchTasks();


