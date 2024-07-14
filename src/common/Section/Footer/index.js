
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
        <p className="square-text">
          CSS
          <br />
          IS
          <br />
          AWESOME
        </p>
      </div>
      <p className="company">
      <span className="line-only"></span>nabthat<span className="line-only"></span>
      </p>
      <div className="dropup">
        <button className="button1" onClick={handleButtonClick}>
          <p className="button-paragraph">
            {isListVisible ? <>UKRYJ<span className="button_paragraph-rotateDown" >&gt;</span></> : <>POKAŻ  <span className="button_paragraph-rotateUp" >&gt;</span></>}
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
