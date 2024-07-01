'use client';

import React from 'react';
import { Container, LoggaContainer, TextFooter, Wrapper } from './Footer.styled';
import { H2 } from '../Hero/Hero.styled';

export const Footer: React.FC = () => {
    return(<> <Container>
        <Wrapper>
        <LoggaContainer><TextFooter>SA Solutions</TextFooter></LoggaContainer>
        </Wrapper>
    </Container>

    </>)
}