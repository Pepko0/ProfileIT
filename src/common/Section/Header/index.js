import React, { useState } from 'react';
import { Container, Logo, Title } from "./styled.js";
import Footer from "../Footer/index.js";

const Header = ({footerText}) => {

  
  
return (
  <Container>
    <Logo src="https://i.postimg.cc/KYdcs756/5.png" />
    <Title>
      Zadanie <strong>rekrutacyjne</strong>
      {footerText}
    </Title>
  </Container>
  );
};

export default Header;
