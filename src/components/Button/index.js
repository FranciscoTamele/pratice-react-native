import React from 'react';
import {Botao, BotaoText} from './style';

export default props => {
  return (
    <Botao onPress={props.onPress}>
      <BotaoText>{props.value}</BotaoText>
    </Botao>
  );
};
