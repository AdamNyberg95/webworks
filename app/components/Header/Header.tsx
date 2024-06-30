'use client';

import React, { useEffect, useState } from 'react';
import {  BtnPrimarySmall, BtnTypography, Container, Logga, LoggoNavWrapper, StyledNavLinkItem, StyledNavList, Wrapper} from './Header.styled';
import logga2 from '../../assets/icons/logga1.png'


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
    <Container>
      <Wrapper isScrolled={isScrolled}>
      <StyledNavList>
        <LoggoNavWrapper>
      <Logga><Image src={logga2} alt="logga"  width={65} height={65}/> </Logga>
        {links.map((link, index) => (
          <StyledNavLinkItem key={index}>{link}</StyledNavLinkItem>
        ))}
      </LoggoNavWrapper>
      <BtnPrimarySmall><BtnTypography>Boka möte </BtnTypography> <IoIosArrowRoundForward size={23}/>
      </BtnPrimarySmall>
      </StyledNavList>
      </Wrapper>
    </Container>
  );
};
