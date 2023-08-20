import React from 'react';
import Food from './Food';

const Person = () => {

    const magicNum = 37;
    const num = Math.floor(Math.random() * 100 + 1);
    let element = null;
    if (num % 2 === 0) {
        element = <h2>This is a even number : { num }</h2>
    } else {
        element = <h2>This is a odd number : { num }</h2>
    }

    const luckyNumber = Math.floor(Math.random() * 10 + 1);

    const burgers = [
        {
            name: 'Mac Aloo Tikki',
            price: 100,
            rating : 4
        },
        {
            name: 'Mac Maharaja',
            price: 200,
            rating : 3
        },
        {
            name: 'Mac Puff',
            price: 300,
            rating : 5
        }
    ]

    return (
        <div>
            <h1>My Fav Random Number : {Math.floor(Math.random() * 10 + 1)}</h1>
            <h2>Magic Number : {magicNum}</h2>
            {element}
            {num % 2 === 0 ? <h2>This is a even number : {num}</h2> : <h2>This is a odd number : {num}</h2>}
            <h2>Lucky Number : { luckyNumber }</h2>
            {luckyNumber===7 && <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXk2NG81dHk2ZjZ0dWt3bHA4Mndib3RnZjQ3YjdkNGxnZml6MHV4dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2sXf9PbHcEdE1x059I/giphy.gif"/>}
            <ul>
                {
                    burgers.map((burger) => {
                        return <Food burger={burger} />
                    })
                }
            </ul>
        </div>
  )
}

export default Person