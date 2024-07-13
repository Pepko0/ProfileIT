import styled from "styled-components";

export const Container = styled.header`
  height: 90px;
  padding-left: 20px;
  padding-right: 20px;;
  background-color: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;
export const Logo = styled.img`
  background-color: #2d2d2d;
  color: white;
  padding: 5px;
  //border: solid;
  border-radius: 100%;
  width: 60px;
  //margin-left: 20px;

  &:hover {
    background: linear-gradient(to top left, #ffcc00 0%, #ff9933 60%);
  }
`;

export const Title = styled.p`
  text-align: right;
  color: white;

  `;


export const Author = styled.p`
  margin-top: 0px;
`;