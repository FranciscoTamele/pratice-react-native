import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Botao from "../../components/Button";
import Campo from "../../components/Input";
import ImageButton from "../../components/ImageButton";

// Como carregar a biblioteca react-native-svg-transformer para usar arquivos svg basta importar apenas
import IconEmail from "./../../../assets/email.svg";
import IconPerson from "./../../../assets/person.svg";
import IconLock from "./../../../assets/lock.svg";
import BtnBack from "./../../../assets/arrow-back.svg";

const initback = require("../../../assets/background.jpg");

import {
    Container,
    Form,
    ContainerHeader,
    Title,
    Subtitle,
    ViewBottom,
    Scroll
} from "./style";

const placeholderNome = "Nome                                  ";
const placeholderEmail = "Email                                ";
const placeholderSenha = "Senha                                ";
const placeholderSenhaAgain = "Reintroduza senha               ";

export default () => {
    return (
        <ImageBackground
            source={initback}
            resizeMode="stretch"
            style={styles.imageStyle}>
            <Container>
                <ContainerHeader>
                    <Title>Criar conta</Title>
                    <Botao value="Register"></Botao>
                </ContainerHeader>
                <Scroll>
                    <Form>
                        <Campo IconSvg={IconPerson} placeholder={placeholderNome} />
                        <Campo IconSvg={IconEmail} placeholder={placeholderEmail} />
                        <Campo IconSvg={IconLock} />
                        <Campo IconSvg={IconLock}/>
                        <Campo
                            IconSvg={IconLock}
                            placeholder={placeholderSenha}
                            password={true}
                        />
                        <Campo
                            IconSvg={IconLock}
                            placeholder={placeholderSenhaAgain}
                            password={true}
                        />
                    </Form>
                </Scroll>
            </Container>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        justifyContent: "center",
    },
});
