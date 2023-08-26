import React, {useState} from 'react';
import classes from "./Food.module.css";

const Food = ({ food }) => {

  // let foodName = food.name;
  const [foodName, setFoodName] = useState(food.name);

  const foodClickHandler = () => {
    console.log(foodName);
    setFoodName('Anonymous');
    console.log(foodName);
  }

  return (
      <li onClick={foodClickHandler} className={classes.food}>
          <p>
            <span className={classes["food-name"]}>{foodName}</span>
            <br/>
            <span className={classes["food-price"]}>{ food.price }</span>
          </p>
          <span className={classes["food-qty"]}>{ food.qty }</span>
    </li>
  )
}

export default Food