import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };

    const handleIncrease = (item) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCartItems(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    const orderTotal = cartSubtotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-toprice">Total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-item cat-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop">
                                                        <img src={item.img} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cat-price">$ {item.price}</td>
                                            <td className="cat-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={() => handleDecrease(item)}>
                                                        -
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="cart-plus-minus-box"
                                                        name="qtybutton"
                                                        value={item.quantity}
                                                        readOnly
                                                    />
                                                    <div className="inc qtybutton" onClick={() => handleIncrease(item)}>
                                                        +
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cat-toprice">${calculateTotalPrice(item)}</td>
                                            <td className="cat-edit">
                                                <button onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="Remove item" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* cart bottom */}
                        <div className="cart-bottom">
                            <div className="checkout-box">
                                <form className="coupon">
                                    <input
                                        className="cart-page-input-text"
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        placeholder="Coupon code..."
                                    />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className="cart-checkout">
                                    <input type="submit" value="Update Cart" />
                                    <div><CheckOutPage/></div>
                                </form>

                                <div className="shiping-box">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="calculate-shipping">
                                                <h3>Calculate Shipping</h3>
                                                <div className="outline-select">
                                                    <select>
                                                        <option value="uk">United Kingdom (UK)</option>
                                                        <option value="usa">United States (USA)</option>
                                                        <option value="canada">Canada</option>
                                                        <option value="australia">Australia</option>
                                                        <option value="ind">India</option>
                                                    </select>
                                                    <span className="select-icon">
                                                        <i className="icofont-rounded-down"></i>
                                                    </span>
                                                </div>

                                                <div className='outline-select shipping-select'>
                                                    <select>
                                                        <option value="uk"> New York</option>
                                                        <option value="usa"> Los Angeles</option>
                                                        <option value="canada"> Chicago</option>
                                                        <option value="australia"> Houston</option>
                                                    </select>
                                                    <span className="select-icon">
                                                        <i className="icofont-rounded-down"></i>
                                                        </span>
                                                </div>
                                                <input type="text name=postalCode" id="postalCode" placeholder="Postalcode/zip *" className="cart-page-input-text" />
                                                <button type="submit">Update Adress</button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="cart-overview">
                                                <h3>Cart Totals</h3>
                                                <ul className="lab-ul">
                                                    <li>
                                                        <span className="pull-left">Cart Subtotal</span>
                                                        <p className="pull-right">${cartSubtotal}</p>
                                                    </li>
                                                    <li>
                                                        <span className="pull-left">Shipping and Handling</span>
                                                        <p className="pull-right">$Free Shipping</p>
                                                    </li>
                                                    <li>
                                                        <span className="pull-left">Order Total</span>
                                                        <p className="pull-right">${orderTotal.toFixed(2)}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
