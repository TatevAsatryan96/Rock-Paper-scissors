import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button
        className={`app-btn ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;