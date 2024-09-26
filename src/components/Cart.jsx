import React, { useContext } from 'react';
import { ProductState } from '../contexts/pagecontext/PageState';
import './cart.css';
import NavbarRed from './NavbarRed';
import NavbarWhite from './NavbarWhite';
import Footer from './Footer';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductState);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <>
    <NavbarRed></NavbarRed>
    <NavbarWhite></NavbarWhite>
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">₹{item.price}</p>
                <button 
                  className="remove-item-button" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
      )}
      <div className="cart-summary">
        <h2 className="total-price">Total Price: ₹{totalPrice}</h2>
        <button className="proceed-button">Proceed to Pay</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Cart;
