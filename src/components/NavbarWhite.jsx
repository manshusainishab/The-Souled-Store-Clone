import React, { useState } from 'react';
import './navbarWhite.css';
import { ProductState } from '../contexts/pagecontext/PageState'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

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
        <a href="/" ><img alt="souledstorelogo" className='img' src='https://www.thesouledstore.com/static/img/newlogo.8dcc6cc.png'/></a>
      <ul className="navbar-list">
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('TOPWEAR')} onMouseLeave={handleMouseLeave}>
          TOPWEAR ▼ <span className="new-tag">NEW</span>
          {dropdown === 'TOPWEAR' && <DropdownMenu items={['T-Shirts', 'Shirts', 'Hoodies']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BOTTOMWEAR')} onMouseLeave={handleMouseLeave}>
          BOTTOMWEAR ▼
          {dropdown === 'BOTTOMWEAR' && <DropdownMenu items={['Jeans', 'Shorts', 'Trousers']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('BESTSELLERS')} onMouseLeave={handleMouseLeave}>
          BESTSELLERS <span className="new-tag">NEW</span> ▼
          {dropdown === 'BESTSELLERS' && <DropdownMenu items={['BestSeller #1', 'BestSeller #2', 'BestSeller #3']} />}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('SNEAKERS')} onMouseLeave={handleMouseLeave}>
          SNEAKERS <span className="new-tag">NEW</span>
          {dropdown === 'SNEAKERS' && <DropdownMenu items={['MarvelEdition']}/>}
        </li>
        <li className="navbar-item" onMouseEnter={() => handleMouseEnter('ACCESSORIES')} onMouseLeave={handleMouseLeave}>
          ACCESSORIES ▼
          {dropdown === 'ACCESSORIES' && <DropdownMenu items={['Perfumes', 'Bags', 'Belts']} />}
        </li>
        {/* <li className="navbar-item">THEMES</li> */}
      </ul>
      <ul className="navbar-list icons">
        <li className="navbar-item">
          <i className="fa fa-search"></i>
        </li>
        <li className="navbar-item">
          <a href="./profile"><i className="fa fa-user"></i></a>
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
  const { changeData } = useContext(ProductState); // Destructure to get changeData

  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
         <li className="dropdown-item" key={index} onClick={() => changeData(item)}>
         <Link to="/products">{item}</Link> {/* Link wraps the item text */}
        </li>
        
      ))}
    </ul>
  );
}
export default NavbarWhite;
