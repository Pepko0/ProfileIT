import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${({theme}) => theme.color.black};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Logo = styled.img`
  background-color: #2d2d2d;
  color: white;
  padding: 5px;
  //border: solid;
  border-radius: 100%;
  width: 40px;
  color: white;
  margin: auto;
  margin-left: 20px;
`;

export const Title = styled.p`
  //border: solid;
  color: white;
  text-align: center;
  margin: auto;
`;
