'use client';

import React from 'react';
import { Container } from './Item.styled';

interface ItemProps {
  title: string;
  text: string;
}

const Item: React.FC<ItemProps> = ({ title, text }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Item;
