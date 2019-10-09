import React from 'react';

import GlobalStyles from './styles/global'
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <GlobalStyles />

      <main>
        <Header />
        <Board />
      </main>
    </>
  );
}

export default App;
