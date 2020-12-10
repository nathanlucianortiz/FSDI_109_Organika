import React, { Component } from "react";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";

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
          <button className="btn btn-sm btn-primary btn-add">Add</button>
        </div>
      </div>
    );
  }

  getTotal = () => {
    return (this.props.data.price * this.state.quantity).toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
  };
}

export default Product;
