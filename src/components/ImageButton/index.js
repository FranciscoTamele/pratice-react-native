import React from 'react';

import {Container, Botao} from './style';
export default ({IconSvg}) => {
  return (
    <Container>
      <Botao>
        <IconSvg width="40" height="40" fill="#000000" />
      </Botao>
    </Container>
  );
};
