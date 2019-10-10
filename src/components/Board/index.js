import React, { useState } from 'react';

import List from '../List'
import BoardContext from './context'

import { loadLists } from '../../services/api';

import { Container } from './styles';

const dataLists = loadLists();

export default function Board() {
  const [lists, setLists] = useState(dataLists)

  function move(from, to) {

  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map(list => <List key={list.title} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}
