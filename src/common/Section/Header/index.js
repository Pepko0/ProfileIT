import { Link } from "react-router-dom";
import { Container, Logo, Title, Author } from "./styled.js";

const Header = ({footerText}) => {

return (
  <Container>
    <Link to="/">
    <Logo src="https://i.postimg.cc/KYdcs756/5.png" />
    </Link>
    <Title>
      Zadanie <strong>rekrutacyjne </strong>
      <Author>{footerText}</Author>
    </Title>
  </Container>
  );
};

export default Header;
