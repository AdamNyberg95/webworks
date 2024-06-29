import styled from 'styled-components';
import Link from 'next/link'

interface ScrollProps{
  isScrolled: boolean;
}

export const Container = styled.header`
  position: fixed;
  gap: 16px;
  width: 100%;
  align-items: center;
  transition: all 0.3s ease;

  display: flex;
flex-direction: row;
justify-content: center;
top: 0;

`;

export const Wrapper = styled.div<ScrollProps>`
  width: ${({ isScrolled }) => (isScrolled ? '95%' : '100%')};
  margin-top: ${({ isScrolled }) => (isScrolled ? '10px' : '')};
  padding:${({ isScrolled }) => (isScrolled ? '0px' : '10px')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '1.5px 1.5px 3px 3px rgba(0, 0, 0, 0.1)' : 'none')};
 border-radius: ${({ isScrolled }) => (isScrolled ? '15px' : '0')};;
 height: 82px;
 display: flex;
 justify-content: centre;

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

`;

export const StyledNavLinkItem = styled.nav`
display: flex;
align-items: center;
padding: 10px;


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


