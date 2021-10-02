import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.scss";
// import { removeItemFromCart } from '../../redux/cart/cart.utils';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{cartItem.quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
