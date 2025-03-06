import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => setQuantity(prequantity + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id,
      img,
      name,
      price,
      quantity: prequantity,
      size,
      color,
      coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Reset form fields
    setQuantity(1);
    setSize('');
    setColor('');
    setCoupon('');
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>
            {ratingsCount} {ratingsCount === 1 ? 'review' : 'reviews'}
          </span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option value="">Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option value="">Select Color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Pink">Pink</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Ash">Ash</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setQuantity(isNaN(value) ? 1 : value);
              }}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/* btn section */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
