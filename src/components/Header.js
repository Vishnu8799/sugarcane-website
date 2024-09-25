import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='head'>
              <h1 style={{display:'flex',justifyContent:'flex-end',alignContent:'center',color:'white'}}>Organic Sugar-Cane!</h1> {/* Added heading here */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Add to Cart</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
