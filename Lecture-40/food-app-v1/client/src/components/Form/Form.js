import React, { useState } from 'react';
import classes from "./Form.module.css";

const Form = (props) => {

    let [name, setName] = useState("");
    let [price, setPrice] = useState(0);
    let [qty, setQty] = useState(0);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const qtyChangeHandler = (event) => {
        setQty(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(price);
        console.log(qty);
        props.addFood({ name, price, qty });
        setName("");
        setPrice("");
        setQty("")
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div>
              <label htmlFor='name'>Name</label>
              <input onChange={nameChangeHandler} type="text" placeholder="Food Name" value={name}/>
            </div>
            <div>
              <label htmlFor='name'>Price</label>
              <input  onChange={priceChangeHandler} type="number" placeholder="Food Price" value={price}/>
            </div>
            <div>
              <label htmlFor='name'>Quantity</label>
              <input onChange={qtyChangeHandler} type="number" placeholder="Food Quantity" value={qty}/>
            </div>
            <button>Add</button>
      </form>
    )
}

export default Form;