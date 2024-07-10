import { Container, Logo, Button, Container__Logo, Button__Paragraph } from "./styled.js";

const Footer = () => (
  <Container>
    <Logo src="https://i.postimg.cc/cHFVK0bd/logo-css-is-awesome-gg.png"></Logo>
    <Button>
      <Button__Paragraph>
      POKAŻ
      <svg
        width="20"
        color="gray"
        height="20"
        fill="none"
        stroke="gray"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m18 15-6-6-6 6"></path>
      </svg>
      </Button__Paragraph>
    </Button>
  </Container>
);

export default Footer;
