import React, { useRef, useContext } from 'react';
import { If, For } from 'react-extras';
import { useDrag, useDrop } from 'react-dnd'

import BoardContext from '../Board/context'
import { Container, Label } from './styles';

export default function Card({ data: card, index, listIndex }) {
  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: 'CARD',
      index,
      listIndex
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item, monitor) => {
      const draggedListIndex = item.listIndex
      // const targetListIndex = listIndex

      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex) {
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset.y - targetSize.top

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return
      }

      move(draggedListIndex, draggedIndex, targetIndex)

      item.index = targetIndex
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
