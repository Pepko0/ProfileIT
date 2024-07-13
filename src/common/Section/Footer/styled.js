import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
`;

export const Logo = styled.img`
  border: solid;
  color: white;
  margin: 10px 20px;
  background-color: ${({ theme }) => theme.color.mineShaft};
`;

export const DropUp = styled.div`
  align-items: right;
  margin-top: 20px ;
`;

export const Button = styled.button`
  width: 175px;
  min-height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.mineShaft};
  border: solid 2px;
  display: flex;
  margin-bottom: -172px;
`;

export const ButtonParagraph = styled.p`
  display: flex;
  font-weight: bold;
  align-items: center;
  font-size: 15px;
  margin: auto;
  color: gray;
`;

export const Link = styled.button`
  //margin: 0 1rem;
  text-decoration: none;
  //padding: 1rem .5rem;
  border: none;
  // width: 100%;
  background-color: transparent;
  cursor: pointer;

  color: ${(props) => (props.disabled ? "grey" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};


  &:disabled {
    cursor: not-allowed;
    color: gray;
  }

`;

export const Lists = styled.ul`
  max-width: 250px;
  position: relative;
  background-color: white;
  padding: 0px;
  list-style-type: none;
  box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  bottom: 0px;
  right: 20px;
  display: none;

  &.active {
    display: block;
  }
`;

export const Item = styled.li`
  padding: 0.5rem;

  &:hover {
    background-color: #272b3f;
    border-radius: 5px;
  }
`;

export const Company = styled.p`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.phone}) {
    display: block;
    margin: auto;
    text-decoration: line-through;
  }
`;

export const Square = styled.div`
  width: 75px;
  height: 100%;
  border: 1px solid;
  color: #323232;
  padding: 0px;

  @media (min-width: 767px) {
    &:hover {
      color: #ff9933;
    }
    

    .SquareText {
      color: grey;
    }
  }
`;

export const SquareText = styled.p`
  position: absolute;
  margin-top: 3px;
  margin-left: 6px;
  font-size: 18.5px;
  color:#323232;

  &:hover {
    color:#b6b3b3
  }
`;
