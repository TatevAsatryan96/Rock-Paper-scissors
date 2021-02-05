import React from "react";

import "./Header.scss";

const Header = ({ currentScore }) => {
  return (
    <header>
      <h1 className="app-header_title">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h1>
      <div className="scoreBox">
        <div className="scoreBox_title">score</div>
        <div className="scoreBox-score">{currentScore}</div>
      </div>
    </header>
  );
};

export default Header;