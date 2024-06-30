'use client';

import React from 'react';
import { BoldSpan, BtnPrimaryBig, BtnText, BtnWrapper, Container, H1, H2, TextBox, TypographyBig, TypographySmall} from './Hero.styled';
import { BtnPrimary } from '../Header/Header.styled';
import { IoIosArrowRoundForward } from "react-icons/io";


export const Hero: React.FC = () => {
    return(<Container style={{ background: 'linear-gradient(to bottom, var(--header-color-light-yellow) 0%, var(--header-color-light-orange) 25%, var(--header-color) 50%, var(--header-color-shade) 75%, var(--header-color-light-yellow) 100%)' }}>

        <TextBox>
           <H1 >SA Solutions</H1> 
            
           <H2 >Your solution for  <BoldSpan>your </BoldSpan> web</H2> 
             <TypographyBig> SA Solutions erbjuder skärddarsydda digitala lösningar för din web. Ser du behov av en hemsida till ditt företag, behöver din hemsida uppdateras eller har du behov av att hitta andra digitala lösningar för ditt företag? <br></br> <br></br> Hör av dig, vi tror att vi är rätt partner för dig! </TypographyBig>
             <BtnText> <TypographySmall> Läs mer om oss </TypographySmall><IoIosArrowRoundForward size={25} /></BtnText> 
             
             <BtnWrapper>

             <BtnPrimaryBig>Boka möte med oss <IoIosArrowRoundForward size={23}/></BtnPrimaryBig>        <BtnPrimary>Kontakta oss <IoIosArrowRoundForward size={23}/></BtnPrimary> 
             </BtnWrapper>
             </TextBox>
       
    

    
    </Container>)

}