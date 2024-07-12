/*
import React, { useState } from "react";
import {
  Container,
  Logo,
  Button,
  ButtonParagraph,
  DropUp,
  Link,
  Lists,
  Item,
} from "./styled.js";

const Footer = ({ setFooterText, resetSettings, setFooterTextContent }) => {
  const [isListVisible, setListVisible] = useState(false);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  const addTextonClick = () => {
    setFooterText("Kacper Lewko");
  };

  const handleResetClick = () => {
    resetSettings();
    setFooterTextContent("");
  }

  return (
    <Container>
      <Logo src="https://i.postimg.cc/cHFVK0bd/logo-css-is-awesome-gg.png"></Logo>
      <DropUp>
        <Button onClick={handleButtonClick}>
          <ButtonParagraph>
            {isListVisible ? (
              <>
                UKRYJ
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="gray"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
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
          </ButtonParagraph>
        </Button>
        <Lists active={isListVisible}>
          <Item>
            <Link onClick={handleResetClick}> &gt; ZRESETUJ USTAWIENIA</Link>
          </Item>
          <Item>
            <Link onClick={addTextonClick}>&gt; POKAŻ DANE OSOBOWE</Link>
          </Item>
        </Lists>
      </DropUp>
    </Container>
  );
};

export default Footer;
*/

import React, { useState } from "react";
import {
  Container,
  Logo,
  Button,
  ButtonParagraph,
  DropUp,
  Link,
  Lists,
  Item,
} from "./styled.js";

const Footer = ({ setFooterText, resetSettings, setFooterTextContent, setSelectedOption }) => {
  const [isListVisible, setListVisible] = useState(false);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  const addTextonClick = () => {
    setFooterText("Kacper Lewko");
  };

  const handleResetClick = () => {
    resetSettings();
    setSelectedOption(null);
  };

  return (
    <Container>
      <Logo src="https://i.postimg.cc/cHFVK0bd/logo-css-is-awesome-gg.png"></Logo>
      <DropUp>
        <Button onClick={handleButtonClick}>
          <ButtonParagraph>
            {isListVisible ? (
              <>
                UKRYJ
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="gray"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
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
          </ButtonParagraph>
        </Button>
        <Lists active={isListVisible}>
          <Item>
            <Link onClick={handleResetClick}> &gt; ZRESETUJ USTAWIENIA</Link>
          </Item>
          <Item>
            <Link onClick={addTextonClick}>&gt; POKAŻ DANE OSOBOWE</Link>
          </Item>
        </Lists>
      </DropUp>
    </Container>
  );
};

export default Footer;
