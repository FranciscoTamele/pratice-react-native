import React from 'react';

import {ContainerCampo, Campo} from './style';

export default ({IconSvg, placeholder, password, onChangeText}) => {
  return (
    <ContainerCampo>
      <IconSvg width="24" height="24" fill="#F3677A" />
      <Campo onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={password} />
    </ContainerCampo>
  );
};
