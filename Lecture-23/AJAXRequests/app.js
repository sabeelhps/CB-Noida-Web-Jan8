// With the help of XMLHttpRequest - this is a traditional way of making ajax call with js

// const req = new XMLHttpRequest();
const cardImg = document.querySelector('.card-img-top');
const cardPrice = document.querySelector('.card-price');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-text');

// req.onload = function () {
//     const res = this.responseText;
//     const data = JSON.parse(res);
//     cardImg.setAttribute('src', data.image);
//     cardPrice.textContent = data.price;
//     cardDesc.textContent = data.description;
//     cardTitle.textContent = data.title;
// }
// req.onerror = function () {
//     console.log(this);
// }
// req.open('GET', 'https://fakestoreapi.com/products/4');
// req.send();


// -----------------------------Using fetch-----------------------

// fetch('https://fakestoreapi.com/products/4')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         // console.log(data);
//         cardImg.setAttribute('src', data.image);
//         cardPrice.textContent = data.price;
//         cardDesc.textContent = data.description;
//         cardTitle.textContent = data.title;
//     })
//     .catch((err) => {
//         console.log(err);
//     });

function render(data) {
    cardImg.setAttribute('src', data.image);
    cardPrice.textContent = data.price;
    cardDesc.textContent = data.description;
    cardTitle.textContent = data.title;
}


async function fetchProduct(id) {
    const FAKESTORE_URL = `https://fakestoreapi.com/products/${id}`;
    try {
        const res = await fetch(FAKESTORE_URL);
        if (res.status !== 200) {
            throw new Error('cannot fetch products at the moment');
        }
        const data = await res.json();
        render(data);
    }
    catch (err) {
        console.log(err);
    }
}

// fetchProduct(20);


// ===================Using Axios-------------------

axios.get('https://fakestoreapi.com/products/8')
    .then((res) => {
        console.log('Fetching using axios');
        render(res.data);
    });