import React from "react";
import { Link } from "react-router-dom";
import "./styled.scss";

const Header = ({ footerText }) => {
  return (
    <header className="header1">
      <Link to="/">
        <img src="https://i.postimg.cc/KYdcs756/5.png" title="Logo HTML5" alt="Logo HTML5" className="header1__logo" />
      </Link>
      <div className="header1__block-text">
        <p className="header1__title">
          Zadanie <strong>rekrutacyjne</strong>
          <span className="header1__author">{footerText}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
