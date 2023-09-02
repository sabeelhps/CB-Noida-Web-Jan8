import React,{useEffect, useId, useState} from 'react'
import Food from '../Food/Food';
import classes from "./FoodList.module.css";
import axios from 'axios';
import Banner from '../Banner/Banner';

const BACKEND_URL = 'http://localhost:8000';

const FoodList = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    (async() => {
      const res = await axios.get(`${BACKEND_URL}/foods`);
      setFoods(res.data.payload);
    })()
  }, []);

  return (
    <div>
        <Banner />
          <ul className={classes["food-list"]}>
              {
              foods.map((food,idx) => {
                  return <Food key={food._id} food={ food } />
              })
          }
          </ul>
      </div>
  )
}

export default FoodList;