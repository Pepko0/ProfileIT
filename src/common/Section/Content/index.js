
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  BlockFooter,
} from "./styled.js";


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
          throw new Error('Network response was not ok');
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
    <Container>
      <Header>Nagłówek H1</Header>
      <Blocks>
        <BlockLeft>
          <Title>BLOK PIERWSZY</Title>
          <Label>
            <input
              type="radio"
              name="option"
              checked={selectedOption === 0}
              onChange={() => handleRadioChange(0)}
            />{" "}
            Opcja pierwsza
          </Label>
          <Label>
            <input
              type="radio"
              name="option"
              checked={selectedOption === 1}
              onChange={() => handleRadioChange(1)}
            />{" "}
            Opcja druga
          </Label>
          <Label>
            <input
              type="radio"
              name="option"
              checked={selectedOption === 3}
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
        <BlockFooter>
          <Title>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</Title>
          <FooterText>{footerText}</FooterText>
          <a href={`/${footerText}`}>{linkText}</a>
        </BlockFooter>
      </Blocks>
      <Footer>
        <Title>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</Title>
        <FooterText>{footerText}</FooterText>
        <a href={`/${footerText}`}>{linkText}</a>
      </Footer>
    </Container>
  );
};

export default Content;

