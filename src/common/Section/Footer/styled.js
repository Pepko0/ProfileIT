import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px; 
  background: ${({theme}) => theme.color.black};
  display: flex;
  justify-content: space-between;


`;

export const Logo = styled.img`
   // border: solid;
    color: white;
    margin: 10px 20px;
    background-color: ${({theme})=>theme.color.mineShaft};

`;


export const Button =styled.a`
    min-width: 150px;
    margin:20px;
    border-radius: 5px;
    background-color: ${({theme})=>theme.color.black};
    color:  ${({theme})=>theme.color.mineShaft};
    border: solid 2px; 
    display: flex;
    align-items: center;
`;

export const Button__Paragraph = styled.p`
    display: flex;
    font-weight: bold;
    align-items: center;
    font-size: 15px;
    margin: auto;
    color: gray;
    
`;