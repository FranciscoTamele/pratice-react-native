import React from 'react';
import {Text} from 'react-native';
import {Botao, BotaoText} from './style';

export default props => {
  return (
    <Botao>
      <BotaoText>{props.value}</BotaoText>
    </Botao>
  );
};
