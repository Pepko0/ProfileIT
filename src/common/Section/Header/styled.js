import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
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
  width: 40px;
  //margin-left: 20px;
`;

export const Title = styled.p`
  text-align: right;
  color: white;
  margin-right: 40px
`;
