import React, { Component } from "react";
import { connect } from "react-redux";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";
import { increaseCounter, addProductToCart } from "../../store/actions/actions";

class Product extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="product">
        <img src={"/images/products/" + this.props.data.image} alt="" />
        <h4>{this.props.data.title}</h4>

        <div className="prices">
          <label className="total-value">${this.getTotal()}</label>
          <label className="price-value">
            ${this.props.data.price.toFixed(2)}
          </label>
        </div>

        <div className="controls">
          <QuantityPicker
            onValueChange={(qnty) => this.handleQuantityChange(qnty)}
          ></QuantityPicker>
          <button
            onClick={this.addProduct}
            className="btn btn-sm btn-primary btn-add"
          >
            Add
          </button>
        </div>
      </div>
    );
  }

  addProduct = () => {
    console.log("Dispatching action!");
    this.props.increaseCounter();

    var addedProduct = {
      product: this.props.data,
      quantity: this.state.quantity,
    };

    this.props.addProductToCart(addedProduct);
  };

  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };
}

// 2 params to connect
// 1st: fn that maps the properties to read from store
// 2nd: a list(obj) of actions you want to dispatch
export default connect(null, { increaseCounter, addProductToCart })(Product);
