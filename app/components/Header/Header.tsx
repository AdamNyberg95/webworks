'use client';

import React, { useEffect, useState } from 'react';
import {  BtnPrimary, BtnTypography, Container, Logga, LoggoNavWrapper, StyledNavLinkItem, StyledNavList, Wrapper} from './Header.styled';
import logga from '../../assets/icons/logga.ico'
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";


export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const links = ["Våra tjänster", "Om oss", "Kontakt"];


useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <Container style={{ backgroundColor: 'var(--header-color)' }} >
      <Wrapper isScrolled={isScrolled}>
      <StyledNavList>
        <LoggoNavWrapper>
      <Logga><Image src={logga} alt="logga"  width={80} height={80}/> </Logga>
        {links.map((link, index) => (
          <StyledNavLinkItem key={index}>{link}</StyledNavLinkItem>
        ))}
      </LoggoNavWrapper>
      <BtnPrimary><BtnTypography>Boka möte </BtnTypography> <IoIosArrowRoundForward size={23}/>
      </BtnPrimary>
      </StyledNavList>
      </Wrapper>
    </Container>
  );
};
