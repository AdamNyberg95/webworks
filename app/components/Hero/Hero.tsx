'use client';

import React from 'react';
import { BtnPrimaryBig, BtnText, BtnWrapper, Container, H1, TextBox, TypographyBig, TypographySmall } from './Hero.styled';
import { BtnPrimary } from '../Header/Header.styled';
import { IoIosArrowRoundForward } from "react-icons/io";


export const Hero: React.FC = () => {
    return(<Container>
        <TextBox>
            <H1>Your solution for your web</H1>
             <TypographyBig> SA solutions erbjuder skärddarsydda digitala lösningar för din web. Har du inte en hemsida till ditt företag, behöver din hemsida uppdateras eller har du behov av att hitta andra digitala lösningar för ditt företag? Då är SA solutions rätt partner för dig. </TypographyBig>
             <BtnText> <TypographySmall> Läs mer om oss </TypographySmall><IoIosArrowRoundForward size={25} /></BtnText> 
             
             <BtnWrapper>

             <BtnPrimaryBig>Boka möte med oss <IoIosArrowRoundForward size={23}/></BtnPrimaryBig>        <BtnPrimary>Kontakta oss <IoIosArrowRoundForward size={23}/></BtnPrimary> 
             </BtnWrapper>
             </TextBox>
    

    
    </Container>)

}