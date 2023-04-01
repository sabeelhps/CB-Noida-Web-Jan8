
// function fun() {
//     console.log('Inside fun');
// }

// function fetchData(n) {
//     for (let i = 1; i <= n; i++){
//         const currentEpoch = new Date().getTime();
//         while (new Date().getTime() < currentEpoch + 1000) { }
//     }
//     fun();
// }

// console.log('START');

// // fetchData(5);
// // setTimeout(fun, 5000);
// const id = setInterval(() => {
//     console.log('Inside Timer');
// }, 1000);


// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

// console.log('END');



// -----------------------------------------------------
// setTimeout(() => {
//     console.log('Inside set timeout');
// }, 1000);

// let num = 100;

// while (num <= 200) {
//     console.log(num);
//     num = num - 10;
// }


// ---------------------------------------------------------

for (var i = 1; i <= 5; i++){
    (function () {
        var k = i;
        setTimeout(function cb() {
            console.log(k);
        }, 1000);
    })();
}


// ------------------------------------------------------