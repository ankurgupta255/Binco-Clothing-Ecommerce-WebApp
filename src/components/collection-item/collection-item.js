import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <div className="collection-footer">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
        </div>
        <Button onClick={() => addItem(item)} inverted>
          {" "}
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
