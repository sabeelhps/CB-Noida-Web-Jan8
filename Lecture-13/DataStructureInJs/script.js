const person = {
    name: 'Kartik',
    age: 20,
    isAdult: true,
    favColors: ['Blue', 'Green']
}

// console.log(person);

const aquaman = {
    name: 'Aquaman',
    imdb: 8,
    director: {
        firstName: 'James',
        lastName:'Wan'
    },
    cast: [
        {
            name: 'Jason Momoa',
            age:34
        },
        {
            name: 'Amber Heard',
            age:30
        }
    ]
}

// console.log(aquaman);

const mp = new Map();

mp.set('name', 'BMW');
mp.set('price', 100000);
mp.set('isDiscBrake', true);

console.log(mp);