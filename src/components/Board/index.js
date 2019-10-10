import React, { useState } from 'react';
import produce from 'immer';
import { For } from 'react-extras';

import List from '../List'
import BoardContext from './context'

import { loadLists } from '../../services/api';

import { Container } from './styles';

const dataLists = loadLists();

export default function Board() {
  const [lists, setLists] = useState(dataLists)

  function move(fromList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[fromList].cards.splice(to, 0, dragged)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        <For of={lists} render={(list, index) => (
          <List 
            key={list.title} 
            index={index} 
            data={list} 
          />
        )} />
      </Container>
    </BoardContext.Provider>
  );
}
