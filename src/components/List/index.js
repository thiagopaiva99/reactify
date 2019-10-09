import React from 'react';
import { If, For } from 'react-extras';

import { MdAdd } from 'react-icons/md'

import { Container } from './styles';

import Card from '../Card'

export default function List({ data: list }) {
  return (
    <Container done={list.done}>
      <header>
        <h2>{ list.title }</h2>
        
        <If condition={list.creatable}>
          <button  type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        </If>
      </header>

      <ul>
        <For of={list.cards} render={card => <Card key={card.id} data={card} /> } />
      </ul>
    </Container>
  );
}
