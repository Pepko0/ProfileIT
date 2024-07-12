import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Header = styled.h1`
  position: relative;
  display: inline-block;
  color: white;
  font-size: 2em;
  text-align: center;
  font-weight: normal;
  //margin-top: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translate(-50%);
    width: 80%;
    height: 0.5px;
    background-color: white;
  }
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const BlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  //border: solid;
  width: 100%;
  text-align: left;
`;

export const BlockRight = styled.div`
  display: flex;
  flex-direction: column;
  //border: solid;
  width: 100%;
  text-align: Right;

  @media (min-width: ${({ theme }) => theme.breakpoint.phone}) {
    text-align: center;
  }
`;

export const BlockFooter = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.phone}) {
    display: block;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Button = styled.button`


  max-width: 100px;
  min-height: 40px;
  padding:0px 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.black};
  color: white;
  color: ${({ theme }) => theme.color.mineShaft};
  border: solid 0.3px;

  &:hover{
    cursor: pointer;
  }

`;

export const ButtonParagraph = styled.p`
  font-weight: bold;
  font-size: 15px;
  //margin: auto;
  text-align: center;
  color: white;
`;

export const Footer = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 90px;

  @media (min-width: ${({ theme }) => theme.breakpoint.phone}) {
    display: none;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 40px;
`;