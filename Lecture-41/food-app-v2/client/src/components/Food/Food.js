import React, {useState} from 'react';
import classes from "./Food.module.css";

const Food = ({ food }) => {
  return (
    <li className={classes.food}>
            <div>
                <p className={classes["food-name"]}>{food.name}</p>
                <p className={classes["food-desc"]}>{food.desc}</p>
                <p className={classes["food-price"]}>${ food.price}</p>
            </div>
            <div>
                <label>Quantity</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1}
                />
                <button className={classes['add-btn']}>+ Add</button>
            </div>
    </li>
  )
}

export default Food