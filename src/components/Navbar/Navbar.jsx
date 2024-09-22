import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import "./Navbar.css";
const Navbar = () => {

  return (
    <div className='nav'>
      <div className='first'>
        <ul>
          <li><FaApple/></li>
          <li>Store</li>
          <li>Mac</li>
          <li>Ipad</li>
          <li>Iphone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>Tv & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
          <li> <FaSearch /></li>
          <li><FaShoppingCart /></li>
        </ul>




      </div>

    </div>
    


  );
};

export default Navbar;
