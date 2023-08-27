import React,{useState} from 'react'
import Food from '../Food/Food';
import classes from "./FoodList.module.css";
import Form from '../Form/Form';

const FoodList = () => {

    const initialFoods = [
        {
          name: 'Burger',
          price: 10,
          desc: 'Extra Cheese and Spice',
        },
        {
          name: 'Panner Tikka',
          price: 22.25,
          desc: 'Smooth and Delicious Paneer grilled to Perfection',
        },
        {
          name: 'Pizza',
          price: 19.25,
          desc: 'Smooth and Delicious Pizza grilled to Perfection',
        },
        {
          name: 'Pasta',
          price: 15.99,
          desc: 'Smooth and Delicious Pasta grilled to Perfection',
        },
        {
          name: 'Noodles',
          price: 15.99,
          desc: 'Smooth and Delicious Pasta grilled to Perfection',
        }
    ]
      
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