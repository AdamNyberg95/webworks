'use client';

import React from 'react';
import Item from './components/Item/Item';
import { Container } from './page.styled';

const Cases: React.FC = () => {
  return (
    <section>
      <h1>AS solutions here are a few cases</h1>
      <Container>
        <Item title="Case 1" text="Description of case 1." />
        <Item title="Case 2" text="Description of case 2." />
        <Item title="Case 3" text="Description of case 3." />
      </Container>
    </section>
  );
};

export default Cases;
