import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      
      <p>Fazer a migração completa do servidor</p>

      <img src="https://avatars0.githubusercontent.com/u/20430611?s=460&v=4" alt="User Profile Picture" />
    </Container>
  );
}
