import React, {useContext} from 'react';
import classes from "./Navbar.module.css";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className={classes.nav}>
      <ul>
        <li><Link to="/">React Foods</Link></li>
        <li style={{ width:'150px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Link to="/cart">Cart <sup>{ cart.length }</sup> </Link>
          <Link to="/profile"><BiUserCircle/></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;