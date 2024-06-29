'use client';

import React from 'react';
import {  BtnPrimary, BtnTypography, Container, Logga, LoggoNavWrapper, StyledNavLinkItem, StyledNavList} from './Header.styled';
import logga from '../../assets/icons/logga.ico'
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";


export const Header: React.FC = () => {
const links = ["Våra tjänster", "Om oss", "Kontakt"];

  return (
    <Container style={{ backgroundColor: 'var(--header-color)' }}>
      <StyledNavList>
        <LoggoNavWrapper>
      <Logga><Image src={logga} alt="logga"  width={72} height={72}/> </Logga>
        {links.map((link, index) => (
          <StyledNavLinkItem key={index}>{link}</StyledNavLinkItem>
        ))}
      </LoggoNavWrapper>
      <BtnPrimary><BtnTypography>Boka möte </BtnTypography> <IoIosArrowRoundForward size={23}/>
      </BtnPrimary>
      </StyledNavList>
    </Container>
  );
};
