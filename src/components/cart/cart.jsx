import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "./../productInCart/productInCart";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <hr></hr>
        <h6>You have {this.props.count} items in your cart</h6>

        <div className="cart-products">
          {this.props.cart.map((p) => (
            <ProductInCart data={p}></ProductInCart>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    cart: state.cart,
  };
};

// 2 params to connect
// 1st: fn that maps the properties to read from store
// 2nd: a list(obj) of actions you want to dispatch
export default connect(mapStateToProps, null)(Cart);
