import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if there are any products being passed to the cart
    if (state && state.product) {
      // Add the product to the cart only if it's not already in the cart
      setCartItems(prevItems => {
        const existingProductIndex = prevItems.findIndex(item => item.id === state.product.id);
        if (existingProductIndex > -1) {
          // Product already exists in the cart, do nothing
          return prevItems;
        } else {
          // Add new product to the cart with quantity 1
          return [...prevItems, { ...state.product, quantity: 1 }];
        }
      });
    }
  }, [state]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const handlePlaceOrder = () => {
    navigate('/orders', { state: { cartItems } });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        cartItems.map(cartItem => (
          <div style={{width:'300px'}} className="cart-item" key={cartItem.id}>
            <img src={cartItem.image} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
            <p>Price: ${cartItem.price}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Total Price: ${totalPrice}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
