

console.log('START');

function fetchData(callback) {
    setTimeout(() => {
        const data = [{ name: 'Iphone', price: 100 }, { name: 'Macbook', price: 200 }];
        const err = null;
        callback(data, err);
    }, 5000);
}

fetchData(function (data, err) { // function call
    if (err) {
        throw new Error('Cannot fetch the data!');
    }
    console.log(data);
});

fun();

console.log('END');

function fun() {
    console.log('inside fun!');
}


