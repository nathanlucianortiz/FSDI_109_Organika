import React, { Component } from "react";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div className="product-in-cart">
        <img src={"/images/products/" + this.props.data.product.image}></img>

        <div className="product-title">
          <h4>
            {this.props.data.product.title +
              " " +
              "(" +
              this.props.data.quantity +
              ")"}
          </h4>
        </div>

        <div className="product-price">
          <h6>
            ${this.props.data.product.price.toFixed(2) + " " + "/per unit"}
          </h6>
        </div>

        <div className="price-total">
          <h5>
            $
            {(this.props.data.product.price * this.props.data.quantity).toFixed(
              2
            )}
          </h5>
        </div>

        <button className="btn btn-danger">Remove from cart</button>
      </div>
    );
  }
}

export default ProductInCart;

/**
 * 1 - create css file
 * 2 - import css files in line 2
 * 3 - work on layout
 */
