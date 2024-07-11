
import React, { useState, useEffect } from "react";

import {
  Header,
  Container,
  Blocks,
  BlockLeft,
  Label,
  BlockRight,
  Title,
  Button,
  ButtonParagraph,
  Footer,
  FooterText,
} from "./styled.js";


const Content = () => {
    const [texts, setTexts] = useState([]);
    const [footerText, setFooterText] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
  
    useEffect(() => {
      fetch("/texts.json")
        .then((response) => response.json())
        .then((data) => setTexts(data))
        .catch((error) => console.error("Error loading texts:", error));
    }, []);
  
    const handleRadioChange = (option) => {
      setSelectedOption(option);
      if (option === 3) {
        let randomText = "";
        do {
          randomText = texts[Math.floor(Math.random() * texts.length)];
        } while (randomText === footerText);
        setFooterText(randomText);
      } else {
        setFooterText(texts[option]);
      }
    };
  
    const handleReplaceClick = () => {
      if (selectedOption !== null) {
        setFooterText(texts[selectedOption]);
      }
    };
  
    const handleAppendClick = () => {
      if (selectedOption !== null) {
        setFooterText((prevText) => prevText + " " + texts[selectedOption]);
      }
    };
    
  
    return (
      <Container>
        <Header>Nagłówek H1</Header>
        <Blocks>
          <BlockLeft>
            <Title>BLOK PIERWSZY</Title>
            <Label>
              <input
                type="radio"
                name="option"
                onChange={() => handleRadioChange(0)}
              />{" "}
              Opcja pierwsza
            </Label>
            <Label>
              <input
                type="radio"
                name="option"
                onChange={() => handleRadioChange(1)}
              />{" "}
              Opcja druga
            </Label>
            <Label>
              <input
                type="radio"
                name="option"
                onChange={() => handleRadioChange(3)}
              />{" "}
              Opcja trzecia
            </Label>
          </BlockLeft>
          <BlockRight>
            <Title>BLOK DRUGI</Title>
            <Label>
              <Button onClick={handleReplaceClick}>
                <ButtonParagraph>ZASTĄP</ButtonParagraph>
              </Button>
            </Label>
            <Label>
              <Button onClick={handleAppendClick}>
                <ButtonParagraph>DOKLEJ</ButtonParagraph>
              </Button>
            </Label>
          </BlockRight>
        </Blocks>
        <Footer>
          <Title>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</Title>
          <FooterText>{footerText}</FooterText>
        </Footer>
      </Container>
    );
  };
  
  export default Content;