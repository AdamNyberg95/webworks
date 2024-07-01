'use client';

import React from 'react';
import { Container, LoggaContainer, TextFooter, Title, Wrapper, Typography, FooterCard, TextWrapper } from './Footer.styled';


export const Footer: React.FC = () => {
    return(<> <Container>
        <Wrapper>
        <LoggaContainer><TextFooter>SA Solutions</TextFooter></LoggaContainer>
        <Title>Kontakt</Title>
        <FooterCard>
           
           
            <img style={{width: '72px', backgroundColor: '#ffff', height: '80px'}}></img>
            <TextWrapper>
        <Typography>Sara@sasolutions.com</Typography> 
        <Typography>+46 763437347</Typography> 
     
        </TextWrapper>
        </FooterCard>
        <FooterCard>
           
           
           <img style={{width: '72px', backgroundColor: '#ffff', height: '80px'}}></img>
           <TextWrapper>
       <Typography>Adam@sasolutions.com</Typography> 
       <Typography>+46 763437347</Typography> 
    
       </TextWrapper>
       </FooterCard>
        </Wrapper>
    </Container>

    </>)
}