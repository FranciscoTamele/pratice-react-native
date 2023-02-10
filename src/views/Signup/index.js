import React,{useState} from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Botao from "../../components/Button";
import Campo from "../../components/Input";
import Spinner from "../../components/Spinner";

// Como carregar a biblioteca react-native-svg-transformer para usar arquivos svg basta importar apenas
import IconEmail from "./../../../assets/email.svg";
import IconPerson from "./../../../assets/person.svg";
import IconLock from "./../../../assets/lock.svg";

import {
    Container,
    ContainerHeader,
    Title,
    Scroll,
    Form
} from './style'

const initback = require("../../../assets/background.jpg");

const placeholderNome = "Nome                                  ";
const placeholderEmail = "Email                                ";
const placeholderSenha = "Senha                                ";
const placeholderSenhaAgain = "Reintroduza senha               ";

export default () => {

    const [selected, setSelected] = useState([]);

    const data = [
        { key:'1', value:"Maputo" },
        { key:'2', value:"Gaza" },
        { key:'3', value:"Inhambane" }
    ];


    return (
        <ImageBackground
            source={initback}
            resizeMode="stretch"
            style={styles.imageStyle}>
            <Container>
                <ContainerHeader>
                    <Title>New Account</Title>
                    <Botao value="Register"></Botao>
                </ContainerHeader>
                <Scroll>
                    <Form>
                        <Campo IconSvg={IconPerson} placeholder={placeholderNome} />
                        <Campo IconSvg={IconEmail} placeholder={placeholderEmail} />
                        <Spinner/>
                        <Spinner/>
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
