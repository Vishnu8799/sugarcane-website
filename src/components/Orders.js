import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Orders.css";

const Orders = () => {
  const location = useLocation(); // Access the location object
  const { state } = useLocation();
  const navigate = useNavigate();
  const [orderItem, setOrderItem] = useState(location.state?.cartItem || null); // Default to null if not provided

  //   const totalAmount = orderItem ? orderItem.price * orderItem.quantity : 0;
  // Calculate total price
  const totalPrice =
    state && state.cartItems
      ? state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      : 0;

  const handlePayNow = () => {
    toast.success("Payment successful!", {
      position: "top-center",
      autoClose: 2000,
      onClose: () => {
        // Reset order item state and navigate to home
        setOrderItem(null);
        navigate("/");
      },
    });
  };

  return (
    <div className="orders">
      <ToastContainer />
      <h2>Your Order Summary</h2>
      {state && state.cartItems && state.cartItems.length > 0 ? (
        state.cartItems.map((item) => (
          <div style={{width:'350px'}} className="order-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
        ))
      ) : (
        <p>No order items found. Please add a product to the cart.</p>
      )}
      <h3>Total Price: ${totalPrice}</h3>
      {state && state.cartItems && state.cartItems.length > 0 && (
        <button onClick={handlePayNow}>Pay Now</button>
      )}
    </div>
  );
};

export default Orders;
