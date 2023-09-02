import React, {useRef, useContext} from 'react';
import classes from "./Food.module.css";
import CartContext from '../../store/cart-context';

const Food = ({ food }) => {
  const { addItemToCart } = useContext(CartContext);
  const addFoodInpRef = useRef();
  
  const addItemClickHandler = () => {
    const qty = parseInt(addFoodInpRef.current.value) || 1;

    const newItem = {
      foodId: food._id,
      name: food.name,
      price: food.price,
      desc: food.desc
    }

    addItemToCart(newItem, qty);
  }

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
            ref={addFoodInpRef}
            />
        <button onClick={addItemClickHandler} className={classes['add-btn']}>+ Add</button>
      </div>
    </li>
  )
}

export default Food