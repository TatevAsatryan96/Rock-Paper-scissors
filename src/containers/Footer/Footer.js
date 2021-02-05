import React, { Component } from "react";

import Button from "../../components/Button/Button";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Made with ♥ in Melbourne, Australia by Peter Hanley</p>
        <Button className="app-footer_btn">rules</Button>
      </footer>
    );
  }
}

export default Footer;