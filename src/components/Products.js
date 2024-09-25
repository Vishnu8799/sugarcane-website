import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sugarcane Juice', price: 120, image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/BJ/BZ/EH/107120912/raw-sugarcane-juice-1000x1000.jpg', quantity: 1 },
    { id: 2, name: 'Sugarcabe Jaggery Cube', price: 250, image: 'https://brightcrop.in/cdn/shop/products/1_92669e73-7963-45c9-a701-d208f0072fd0_740x.jpg?v=1641410419', quantity: 1 },
    { id: 3, name: 'Sugarcane Cookies', price: 190, image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/cookie-biscuit/h/1/k/150-satisfying-sugarcane-premium-cookies-favourite-tea-time-original-imah28mbxetzzyxz.jpeg?q=70', quantity: 1 },
    { id: 4, name: 'Sugarcane Syrup', price: 400, image: 'https://m.media-amazon.com/images/I/61aM8JTde+L._SX679_.jpg', quantity: 1 }
  ]);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Navigate to cart without ID in the path
    navigate('/cart', { state: { product } });
  };

  const increaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  return (
    <div className="products">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div style={{width:'100%',height:'60%'}}>
          <img style={{width:'100%',height:'100%'}} src={product.image} alt={product.name} />
          </div>
          <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {/* <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div> */}
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
