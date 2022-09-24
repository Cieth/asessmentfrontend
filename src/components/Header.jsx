import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header__body'>
      <div className='Header__navigation'>
        <Link to='/'>
          <h1>Products</h1>
        </Link>
        <Link to='/about'>
          <h2>About</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
