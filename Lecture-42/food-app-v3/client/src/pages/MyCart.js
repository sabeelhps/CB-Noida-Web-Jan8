import React, {useContext} from 'react';
import CartContext from '../store/cart-context';

const MyCart = () => {
  const {cart} = useContext(CartContext);
  return (
    <ul style={{margin:'30px auto', width:'300px'}}>
      {
        cart.map((item) => {
          return <li key={item.foodId}>
            <strong>{item.name}</strong> X <span>{ item.qty }</span>
          </li>
        })
      }
    </ul>
  )
}

export default MyCart