import React,{useState} from 'react'
import Food from '../Food/Food';
import classes from "./FoodList.module.css";
import Form from '../Form/Form';

const FoodList = () => {

    const initialFoods = [
        {
            name: 'Mac Veggie',
            price: 100,
            qty: 5
        },
        {
            name: 'Garlic Bread',
            price: 200,
            qty: 7
        },
        {
            name: 'Onion Pizza',
            price: 300,
            qty: 6
        },
        {
            name: 'Mac Maharaja',
            price: 50,
            qty: 3
        }
    ];

    const [foods, setFoods] = useState(initialFoods);

    const addFood = (food) => {
        setFoods((prevState)=> [...prevState, food]);
    }

    return (
        <div>
            <Form addFood={addFood} />
            <ul className={classes["food-list"]}>
                {
                foods.map((food,idx) => {
                    return <Food key={ idx } food={ food } />
                })
            }
            </ul>
        </div>
      
    )
}

export default FoodList;