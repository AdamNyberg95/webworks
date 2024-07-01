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

export const Wrapper = styled.nav<ScrollProps>`
  width: ${({ isScrolled }) => (isScrolled ? '95%' : '100%')};
  margin-top: ${({ isScrolled }) => (isScrolled ? '10px' : '')};
  padding:${({ isScrolled }) => (isScrolled ? '0px' : '10px')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '1.5px 1.5px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)' : 'none')};
 border-radius: ${({ isScrolled }) => (isScrolled ? '10px' : '0')};;
 height: 70px;
 display: flex;
 justify-content: centre;
 background: ${({ isScrolled }) => (isScrolled ? 'var(--header-color-light-yellow)' : 'transparent')};

;


`;

export const StyledNavList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
padding: 0px 50px;


`;

export const LoggoNavWrapper = styled.div`
display: flex;
flex-direction: row;
`;


export const Logga = styled.div`
display: flex;
align-items: center;

`;

export const NavLinks = styled.li`
display: flex;
align-items: center;
padding: 10px;
font-size: 16px;


a {
    text-decoration: none;
    color: inherit;
  }

`;


export const BtnPrimary = styled.button`
width: 135px;
height: 45px;
border-radius: 30px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: solid 1px;
background-color: black;
border-color: var(--header-color-light-yellow)


`;
export const BtnPrimarySmall = styled.button`
width: 112px;
height: 38px;
border-radius: 20px;
padding: 5px 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: solid 1px;
background-color: black;
border-color: white;


`;

export const BtnSmallTypography = styled.p`
font-size: 12px;
color: white;
`;


