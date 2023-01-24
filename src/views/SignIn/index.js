import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Botao from "../../components/Button";
import Campo from "../../components/Input";
import Texto from "../../components/Text";
import styled from 'styled-components';

// Como carregar a biblioteca react-native-svg-transformer para usar arquivos svg basta importar apenas
import Logo from './../../../assets/ic_mozta.svg'
import IconPerson from './../../../assets/person.svg'
import IconLock from './../../../assets/lock.svg'

const initback = require('../../../assets/background.jpg')

import {
    Container,
    TitleApp,
    Form,
    ViewTop,
    ViewBottom,
    TextoEsqueceu
} from "./style";

const placeholderEmail = "Insira seu email                                ";
const placeholderSenha = "Insira sua senha                                ";

export default () => {

    const onSignIn = () => {
        console.log("Tentou fazer SignIn !");
    }


    return (
        <ImageBackground source={initback} resizeMode="stretch" style={styles.imageStyle}>
            <Container>
            <Logo width="100%" height="60" />
            <TitleApp>MozTa</TitleApp>
            <Form>
                <Campo IconSvg={IconPerson} placeholder={placeholderEmail} />
                <Campo IconSvg={IconLock} placeholder={placeholderSenha} password={true} />
                <TextoEsqueceu>Esqueceu senha?</TextoEsqueceu>
                <Botao onPress={onSignIn} />
            </Form>
            <ViewBottom>
                <Texto value="Não tenho conta." bold={false} />
                <Texto value="Criar nova conta." bold={true} />
            </ViewBottom>
        </Container>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        justifyContent: 'center'
    }
});
