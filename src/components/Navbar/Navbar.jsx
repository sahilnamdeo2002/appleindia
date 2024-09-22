import React from 'react';
import { FaSearch, FaShoppingCart, FaApple } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='first'>
        <ul>
          <li>
            <FaApple />
            <div className='slider'>Apple Products</div>
          </li>
          <li>
            Store
            <div className='slider'>Visit our store</div>
          </li>
          <li>
            Mac
            <div className='slider'>Explore Mac products</div>
          </li>
          <li>
            Ipad
            <div className='slider'>Check out the latest iPads</div>
          </li>
          <li>
            Iphone
            <div className='slider'>Discover new iPhones</div>
          </li>
          <li>
            Watch
            <div className='slider'>Stay fit with Apple Watch</div>
          </li>
          <li>
            AirPods
            <div className='slider'>Wireless freedom</div>
          </li>
          <li>
            Tv & Home
            <div className='slider'>Enhance your home entertainment</div>
          </li>
          <li>
            Entertainment
            <div className='slider'>Music, movies, and more</div>
          </li>
          <li>
            Accessories
            <div className='slider'>Find the perfect accessories</div>
          </li>
          <li>
            Support
            <div className='slider'>Get help and support</div>
          </li>
          <li>
            <FaSearch />
            <div className='slider'>Search for products</div>
          </li>
          <li>
            <FaShoppingCart />
            <div className='slider'>View your cart</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
