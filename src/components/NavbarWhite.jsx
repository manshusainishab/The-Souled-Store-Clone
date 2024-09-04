import React, { useState } from 'react';
import './navbarWhite.css';

function NavbarWhite() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div className="navbar">
        <img alt="souledstorelogo" className='img' src='https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png'/>
      <ul className="navbar-list">
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('MINIMALS')} onMouseLeave={handleMouseLeave}>
          MINIMALS <span className="new-tag">NEW</span>
          {dropdown === 'MINIMALS' && <DropdownMenu items={['Item 1', 'Item 2', 'Item 3']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('TOPWEAR')} onMouseLeave={handleMouseLeave}>
          TOPWEAR ▼
          {dropdown === 'TOPWEAR' && <DropdownMenu items={['T-Shirts', 'Shirts', 'Hoodies']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BOTTOMWEAR')} onMouseLeave={handleMouseLeave}>
          BOTTOMWEAR ▼
          {dropdown === 'BOTTOMWEAR' && <DropdownMenu items={['Jeans', 'Shorts', 'Trousers']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BESTSELLERS')} onMouseLeave={handleMouseLeave}>
          BESTSELLERS <span className="new-tag">NEW</span> ▼
          {dropdown === 'BESTSELLERS' && <DropdownMenu items={['Popular 1', 'Popular 2', 'Popular 3']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('SNEAKERS')} onMouseLeave={handleMouseLeave}>
          SNEAKERS <span className="new-tag">NEW</span>
          {dropdown === 'SNEAKERS' && <DropdownMenu items={['Sneaker 1', 'Sneaker 2', 'Sneaker 3']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('COLLECTIONS')} onMouseLeave={handleMouseLeave}>
          COLLECTIONS ▼
          {dropdown === 'COLLECTIONS' && <DropdownMenu items={['Collection 1', 'Collection 2', 'Collection 3']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('ACCESSORIES')} onMouseLeave={handleMouseLeave}>
          ACCESSORIES ▼
          {dropdown === 'ACCESSORIES' && <DropdownMenu items={['Watch', 'Bags', 'Belts']} />}
        </li>
        <li className="navbar-item">THEMES</li>
      </ul>
      <ul className="navbar-list icons">
        <li className="navbar-item">
          <i className="fa fa-search"></i>
        </li>
        <li className="navbar-item">
          <i className="fa fa-user"></i>
        </li>
        <li className="navbar-item">
          <i className="fa fa-heart"></i>
        </li>
        <li className="navbar-item">
          <i className="fa fa-shopping-bag"></i>
        </li>
        </ul>
    </div>
  );
}

function DropdownMenu({ items }) {
  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default NavbarWhite;
