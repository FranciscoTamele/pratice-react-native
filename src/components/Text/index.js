import React, {View} from 'react-native';
import styled from 'styled-components';

import {Texto} from './style';

export default props => {
  if (props.bold) {
    return <TextBold>{props.value}</TextBold>;
  }

  return <Texto>{props.value}</Texto>;
};

const TextBold = styled(Texto)`
  font-weight: bold;
  margin-left: 10px;
  color: #000;
`;
