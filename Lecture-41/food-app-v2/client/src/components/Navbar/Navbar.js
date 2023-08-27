import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
      <nav className={classes.nav}>
          <ul>
              <li><a href="#">React Foods</a></li>
              <li><a href="#">Cart <sup>5</sup> </a></li>
          </ul>
    </nav>
  )
}

export default Navbar;