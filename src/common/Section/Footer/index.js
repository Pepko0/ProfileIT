
import React, { useState, useEffect } from "react";
import "./styled.scss";

const Footer = ({ setFooterText, resetSettings, setSelectedOption }) => {
  const [isListVisible, setListVisible] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  const addTextOnClick = () => {
    setFooterText("Kacper Lewko");
    setButtonDisabled(true);
    setListVisible(false);
  };

  const handleResetClick = () => {
    resetSettings();
    setSelectedOption(null);
    setButtonDisabled(false);
    setListVisible(false);
  };

  const handleClickOutside = (event) => {
    if (isListVisible && !event.target.closest(".footer__dropup")) {
      setListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isListVisible]);

  return (
    <footer className="footer">
      <div className="footer__square">
        <p className="footer__square-text">
          CSS
          <br />
          IS
          <br />
          AWESOME
        </p>
      </div>
      <p className="footer__company">
        <span className="footer__line"></span>nabthat
        <span className="footer__line"></span>
      </p>
      <div className="footer__dropup">
        <button
          title="Naciśnij aby zobaczyc dodatkowe funkcje"
          className="footer__button"
          onClick={handleButtonClick}
        >
          <p className="footer__button-paragraph">
            {isListVisible ? (
              <>
                UKRYJ
                <span className="footer__button-paragraph-rotateDown">
                  &gt;
                </span>
              </>
            ) : (
              <>
                POKAŻ
                <span className="footer__button-paragraph-rotateUp">&gt;</span>
              </>
            )}
          </p>
        </button>
        <ul
          className={`footer__list ${
            isListVisible ? "footer__list--active" : ""
          }`}
        >
          <li className="footer__item">
            <button
              title="Zresetuj Zmiany na stronie"
              className="footer__link"
              onClick={handleResetClick}
            >
              &gt; ZRESETUJ USTAWIENIA
            </button>
          </li>
          <li className="footer__item">
            <button
              title="Wyświetl w nagłówku osobę, która zrobiła Zadanie Rekrutacjne"
              className="footer__link"
              onClick={addTextOnClick}
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

