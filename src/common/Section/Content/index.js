
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
    const storedTexts = JSON.parse(localStorage.getItem("texts"));
    if (storedTexts && storedTexts.length > 0) {
      setTexts(storedTexts);
      setFooterText(localStorage.getItem("footerText") || "");
    } else {
      fetch(`${process.env.PUBLIC_URL}/texts.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const initialTexts = data.texts || [];
          setTexts(initialTexts);
          localStorage.setItem("texts", JSON.stringify(initialTexts));
          if (data.initialText) {
            setFooterText(data.initialText);
            localStorage.setItem("footerText", data.initialText);
          }
        })
        .catch((error) => console.error("Error loading texts:", error));
    }
  }, [setFooterText]);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const handleReplaceClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      let newText;
      if (selectedOption === 2) { // Opcja trzecia to indeks 2
        do {
          newText = texts[Math.floor(Math.random() * texts.length)];
        } while (newText === footerText);
      } else {
        newText = texts[selectedOption];
      }
      setFooterText(newText);
      localStorage.setItem("footerText", newText);
      navigate(`/${newText}`);
    }
  };

  const handleAppendClick = () => {
    if (selectedOption !== null && texts.length > 0) {
      let newText;
      if (selectedOption === 2) { // Opcja trzecia to indeks 2
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
        localStorage.setItem("footerText", updatedFooterText);
        navigate(`/${updatedFooterText}`);
        return updatedFooterText;
      });
    }
  };

  const addText = (text) => {
    const newTexts = [...texts, text];
    setTexts(newTexts);
    localStorage.setItem("texts", JSON.stringify(newTexts));
  };

  const editText = (index, newText) => {
    const newTexts = texts.map((text, i) => (i === index ? newText : text));
    setTexts(newTexts);
    localStorage.setItem("texts", JSON.stringify(newTexts));
  };

  const deleteText = (index) => {
    const newTexts = texts.filter((_, i) => i !== index);
    setTexts(newTexts);
    localStorage.setItem("texts", JSON.stringify(newTexts));
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
              checked={selectedOption === 2}
              onChange={() => handleRadioChange(2)}
            /><i className="check"></i>
            <span className="check_text">Opcja trzecia</span>
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
        <h2 className="title_cut">BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
        <p className="footer-text">{footerText}</p>
        <a href={`/${footerText}`}>{linkText}</a>
      </div>
    </div>
  );
};

export default Content;

