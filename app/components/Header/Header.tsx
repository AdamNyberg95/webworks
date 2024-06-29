'use client';

import React from 'react';
import { BtnBooking, BtnTypography, Container, Logga, LoggoNavWrapper, StyledNavLinkItem, StyledNavList} from './Header.styled';
import logga from '../../assets/icons/logga.ico'
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

export const Header: React.FC = () => {
const links = ["Våra tjänster", "Om oss", "kontakt"];

  return (
    <Container style={{ backgroundColor: 'var(--header-color)' }}>
      <StyledNavList>
        <LoggoNavWrapper>
      <Logga><Image src={logga} alt="logga"  width={72} height={72}/> </Logga>
        {links.map((link, index) => (
          <StyledNavLinkItem key={index}>{link}</StyledNavLinkItem>
        ))}
      </LoggoNavWrapper>
      <BtnBooking><BtnTypography>Boka möte </BtnTypography> <IoIosArrowForward /></BtnBooking>
      </StyledNavList>
    </Container>
  );
};
