import React from 'react';
import { If, For } from 'react-extras';
import { useDrag } from 'react-dnd'

import { Container, Label } from './styles';

export default function Card({ data: card }) {
  return (
    <Container>
      <header>
        <For of={card.labels} render={label => <Label key={label} color={label} /> } />
      </header>
      
      <p>{card.content}</p>

      <If condition={card.user}>
        <img src={card.user} alt="User" />
      </If>
    </Container>
  );
}
