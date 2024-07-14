import { Link } from "react-router-dom";
import { Container, Logo, Title, Author, BlockText } from "./styled.js";

const Header = ({footerText}) => {

return (
  <Container>
    <Link to="/">
    <Logo src="https://i.postimg.cc/KYdcs756/5.png" />
    </Link>
    <BlockText>
    <Title>
      Zadanie <strong>rekrutacyjne </strong>
      <Author>{footerText}</Author>
    </Title>
    </BlockText>
  </Container>
  );
};

export default Header;
