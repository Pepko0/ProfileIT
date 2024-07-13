import React, { useState } from "react";
import "./styled.scss";

const Footer = ({ setFooterText, resetSettings, setSelectedOption }) => {
  const [isListVisible, setListVisible] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  const addTextonClick = () => {
    setFooterText("Kacper Lewko");
    setButtonDisabled(true);
  };

  const handleResetClick = () => {
    resetSettings();
    setSelectedOption(null);
    setButtonDisabled(false);
  };

  return (
    <footer>
      <div className="square">
        <p className="square-text">CSS<br/>IS<br/>AWESOME</p>
      </div>
      <p className="company">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 12h21"></path>
        </svg>
        nabthat
        <svg
          width="20"
          height="20"
          margin="auto"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 12h21"></path>
        </svg>
      </p>
      <div className="dropup">
        <button className="button" onClick={handleButtonClick}>
          <p className="button-paragraph">
            {isListVisible ? (
              <>
                UKRYJ
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </>
            ) : (
              <>
                POKAŻ
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </>
            )}
          </p>
        </button>
        <ul className={`lists ${isListVisible ? "active" : ""}`}>
          <li className="item">
            <button className="link" onClick={handleResetClick}>
              &gt; ZRESETUJ USTAWIENIA
            </button>
          </li>
          <li className="item">
            <button
              className="link"
              onClick={addTextonClick}
              disabled={isButtonDisabled}
            >
              &gt; POKAŻ DANE OSOBOWE
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
