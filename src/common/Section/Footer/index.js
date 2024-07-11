import React, { useState } from "react";
import {
  Container,
  Logo,
  Button,
  Button__Paragraph,
  DropUp,
  Link,
  Lists,
  Item,
} from "./styled.js";

const Footer = ({ setFooterText, resetSettings }) => {
  const [isListVisible, setListVisible] = useState(false);

  const handleButtonClick = () => {
    setListVisible(!isListVisible);
  };

  const addTextonClick = () => {
    setFooterText("Kacper Lewko");
  };

  return (
    <Container>
      <Logo src="https://i.postimg.cc/cHFVK0bd/logo-css-is-awesome-gg.png"></Logo>
      <DropUp>
        <Button onClick={handleButtonClick}>
          <Button__Paragraph>
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
          </Button__Paragraph>
        </Button>
        <Lists active={isListVisible}>
          <Item>
            <Link onClick={resetSettings}> &gt; ZRESETUJ USTAWIENIA</Link>
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
