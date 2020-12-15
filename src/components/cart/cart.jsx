import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Your current cart</h2>
        <hr></hr>
        <h6>You have {this.props.count} items in the cart</h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// 2 params to connect
// 1st: fn that maps the properties to read from store
// 2nd: a list(obj) of actions you want to dispatch
export default connect(mapStateToProps, null)(Cart);
