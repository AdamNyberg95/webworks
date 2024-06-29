import styled from 'styled-components';
import Link from 'next/link'

export const Container = styled.header`
  position: fixed;
  gap: 16px;
  width: 100%;
  height: 73px;
  display: flex;
flex-direction: row;
justify-content: center;
top: 0;
`;

export const StyledNavList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 90vw;
align-items: center;
max-width: 1400px;

`;

export const LoggoNavWrapper = styled.div`
display: flex;
flex-direction: row;
`;


export const Logga = styled.div`
display: flex;
align-items: center;
padding:  5px;
`;

export const StyledNavLinkItem = styled.nav`
display: flex;
align-items: center;
padding: 5px 5px;

`;

export const BtnWrapper = styled.div`

`;

export const BtnPrimary = styled.button`
width: 110px;
height: 40px;
border-radius: 20px;
padding: 5px 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: solid 1px;
padding: 2px;
`;

export const BtnTypography = styled.p`

`;


