import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    qnty: 1,
  };

  render() {
    return (
      <div className="qntPicker">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>

        <label>{this.state.qnty}</label>

        <button className="btn btn-sm btn-info" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }

  increase = () => {
    /**
     * read current val
     * increase it by 1
     * update the state
     */
    var current = this.state.qnty;
    current += 1;

    // state is inmutable, you should not modify it
    // call the setState instead
    this.setState({ qnty: current });
    this.props.onValueChange(current);
  };

  decrease = () => {
    var current = this.state.qnty;
    current -= 1 && current > 1;

    this.setState({ qnty: current });
    this.props.onValueChange(current);

    // OR: this.setState({qnty: this.state.qnty > 1 ? this.state.qnty - 1 : this.state.qnty});
  };
}

export default QuantityPicker;
