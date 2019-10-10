import React, { useRef } from 'react';
import { If, For } from 'react-extras';
import { useDrag, useDrop } from 'react-dnd'

import { Container, Label } from './styles';

export default function Card({ data: card }) {
  const ref = useRef()

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: 'CARD'
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item, monitor) => {
      
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
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
