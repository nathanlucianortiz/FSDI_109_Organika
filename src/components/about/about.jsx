import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVisible: false,
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4"></hr>
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>

        {this.getEmailText()}

        <button
          onClick={this.handleBtnClick}
          className="btn btn-primary btn-lg"
        >
          Show Email
        </button>
      </div>
    );
  }

  handleBtnClick = () => {
    this.setState({ isEmailVisible: true });

    setTimeout(() => {
      this.setState({ isEmailVisible: false });
    }, 30000);
  };

  getEmailText = () => {
    if (this.state.isEmailVisible) {
      return (
        <h6>
          <a href="emailto:contact@nortiz.com">contact@nortiz.com</a>
        </h6>
      );
    } else {
      return <h6>Click on the button to reveal contact info</h6>;
    }
  };
}

export default About;

/* 
1) Catch click event on the btn and update the state

2) in getEmailText verify if the state flag is true, return email otherwise return the message
*/
