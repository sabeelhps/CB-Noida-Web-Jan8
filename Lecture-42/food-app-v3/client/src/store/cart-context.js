import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const BACKEND_URL = "http://localhost:8000";

const CartContext = createContext({
    cart: [],
    addItemToCart: ()=>{}
});

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addItemToCart = (item, newQty) => {
        const isPresent = cart.some((cartItem) => cartItem.foodId === item.foodId);
        if (isPresent) {
            setCart((prevState) => {
                return prevState.map((cartItem)=> cartItem.foodId === item.foodId ? {...cartItem, qty: cartItem.qty+newQty} : cartItem)
            })
            return;
        }
        setCart((prevState) => [...prevState, { ...item, qty: newQty }]);
    }

    useEffect(() => {
        (async () => {
            const res = await axios.post(`${BACKEND_URL}/cart`, cart);
            console.log(res);
        })()
    }, [cart]);

    const context = {
        cart: cart,
        addItemToCart: addItemToCart
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;
