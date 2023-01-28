import React from 'react';

import {SafeAreaView, ImageBackground, StyleSheet, View} from 'react-native';
import {Container, ProgressLoad, Title} from './style';

import Logo from '../../../assets/ic_mozta.svg';

const initback = require('../../../assets/background.jpg');

export default () => {
  return (
    <ImageBackground
      source={initback}
      resizeMode="stretch"
      style={styles.imageStyle}>
      <SafeAreaView>
        <Container>
          <Logo width="100%" height="80" />
          <Title>MozTa</Title>
          <ProgressLoad size="large" color="#ed1c39" />
        </Container>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
