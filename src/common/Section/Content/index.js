/*

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styled.scss";

const Content = ({
  footerText,
  setFooterText,
  linkText,
  selectedOption,
  setSelectedOption,
}) => {
  const [texts, setTexts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/texts.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setTexts(data))
      .catch((error) => console.error("Error loading texts:", error));
  }, []);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    if (texts.length === 0) {
      return;
    }

    let newText = "";
    if (option === 3) {
      do {
        newText = texts[Math.floor(Math.random() * texts.length)];
      } while (newText === footerText);
    } else {
      newText = texts[option];
    }
    setFooterText(newText);
    navigate(`/${newText}`);
  };

  const handleReplaceClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      const newText = texts[selectedOption];
      setFooterText(newText);
      navigate(`/${newText}`);
    }
  };

  const handleAppendClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      let newText;
      if (selectedOption === 3) {
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (newText === footerText);
      } else {
        newText = texts[selectedOption];
      }
      setFooterText((prevText) => {
        const updatedFooterText = [...prevText.split(" "), newText]
          .sort()
          .join(" ");
        navigate(`/${updatedFooterText}`);
        return updatedFooterText;
      });
    }
  };

  return (
    <div className="container">
      <header className="header">Nagłówek H1</header>
      <div className="blocks">
        
        
        <div className="block-left">
          <h2 className="title">BLOK PIERWSZY</h2>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 0}
              onChange={() => handleRadioChange(0)}
            /><i className="check"></i>
            <span className="check_text">Opcja pierwsza</span>
          </label>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 1}
              onChange={() => handleRadioChange(1)}
            /><i className="check"></i>
            <span className="check_text">Opcja druga</span>
          </label>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 3}
              onChange={() => handleRadioChange(3)}
            /><i className="check"></i>
            <span className="check_text">Opcja Trzecia</span>
          </label>
        </div>
        
        
        
        <div className="block-right">
          <h2 className="title">BLOK DRUGI</h2>
          <div className="block-more-right">
            <label className="label">
              <button className="button" onClick={handleReplaceClick}>
                <p className="button-paragraph">ZASTĄP</p>
              </button>
            </label>
            <label className="label">
              <button className="button" onClick={handleAppendClick}>
                <p className="button-paragraph">DOKLEJ</p>
              </button>
            </label>
          </div>
        </div>
        <div className="block-footer">
          <h2 className="title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
          <p className="footer-text">{footerText}</p>
          <a href={`/${footerText}`}>{linkText}</a>
        </div>
      </div>
      <div className="footer1">
        <h2 className="title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
        <p className="footer-text">{footerText}</p>
        <a href={`/${footerText}`}>{linkText}</a>
      </div>
    </div>
  );
};

export default Content;

*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styled.scss";

const Content = ({
  footerText,
  setFooterText,
  linkText,
  selectedOption,
  setSelectedOption,
}) => {
  const [texts, setTexts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/texts.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTexts(data.texts || []); // Pobieranie tekstów do opcji radiowych
        if (data.initialText) {
          setFooterText(data.initialText); // Ustawienie początkowego tekstu
        }
      })
      .catch((error) => console.error("Error loading texts:", error));
  }, [setFooterText]);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const handleReplaceClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      let newText;
      if (selectedOption === 3) {
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (newText === footerText);
      } else {
        newText = texts[selectedOption];
      }
      setFooterText(newText);
      navigate(`/${newText}`);
    }
  };

  const handleAppendClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      let newText;
      if (selectedOption === 3) {
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (newText === footerText);
      } else {
        newText = texts[selectedOption];
      }
      setFooterText((prevText) => {
        const updatedFooterText = [...prevText.split(" "), newText]
          .sort()
          .join(" ");
        navigate(`/${updatedFooterText}`);
        return updatedFooterText;
      });
    }
  };

  return (
    <div className="container">
      <header className="header">Nagłówek H1</header>
      <div className="blocks">
        <div className="block-left">
          <h2 className="title">BLOK PIERWSZY</h2>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 0}
              onChange={() => handleRadioChange(0)}
            /><i className="check"></i>
            <span className="check_text">Opcja pierwsza</span>
          </label>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 1}
              onChange={() => handleRadioChange(1)}
            /><i className="check"></i>
            <span className="check_text">Opcja druga</span>
          </label>
          <label className="label">
            <input
              type="radio"
              name="option"
              className="radio-button"
              checked={selectedOption === 3}
              onChange={() => handleRadioChange(3)}
            /><i className="check"></i>
            <span className="check_text">Opcja Trzecia</span>
          </label>
        </div>
        
        <div className="block-right">
          <h2 className="title">BLOK DRUGI</h2>
          <div className="block-more-right">
            <label className="label">
              <button className="button" onClick={handleReplaceClick}>
                <p className="button-paragraph">ZASTĄP</p>
              </button>
            </label>
            <label className="label">
              <button className="button" onClick={handleAppendClick}>
                <p className="button-paragraph">DOKLEJ</p>
              </button>
            </label>
          </div>
        </div>
        <div className="block-footer">
          <h2 className="title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
          <p className="footer-text">{footerText}</p>
          <a href={`/${footerText}`}>{linkText}</a>
        </div>
      </div>
      <div className="footer1">
        <h2 className="title">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
        <p className="footer-text">{footerText}</p>
        <a href={`/${footerText}`}>{linkText}</a>
      </div>
    </div>
  );
};

export default Content;
