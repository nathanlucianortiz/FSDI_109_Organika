import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVisible: false,
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Mission Statement</h1>
        <p className="lead">
          All of our products are organic and free of harmful pesticides or
          hormones. We pride ourselves in providing a liveable wage and full
          medical care to all our employees.
        </p>
        <hr className="my-4"></hr>
        <p>
          If you would like to join our team, please email us your resume and
          list of references. We look forward to hearing from you.
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
      return <h6>Click on the button for our contact information!</h6>;
    }
  };
}

export default About;

/* 
1) Catch click event on the btn and update the state

2) in getEmailText verify if the state flag is true, return email otherwise return the message
*/
