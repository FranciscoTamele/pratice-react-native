import React,{useState} from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import Botao from "../../components/Button";
import Campo from "../../components/Input";
import Texto from "../../components/Text";

// Como carregar a biblioteca react-native-svg-transformer para usar arquivos svg basta importar apenas
import Logo from "./../../../assets/ic_mozta.svg";
import IconPerson from "./../../../assets/email.svg";
import IconLock from "./../../../assets/lock.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import {submitSign,logout} from "../../reducers/SignInSlice";

const initback = require("../../../assets/background.jpg");

import {
    Container,
    TitleApp,
    Form,
    ViewTop,
    ViewBottom,
    TextoEsqueceu,
} from "./style";

const placeholderEmail = "Insert your email                                ";
const placeholderSenha = "Insert your password                               ";

export default ({navigation}) => {

    const [email, setEmail] = useState('');

    /**
     * Para pegar o estado de um determinado, segue-se abaixo
     * Porque state.signin? Porque foi o nome da variavel que usou-se no createConfigure
     * */
    const userState = useSelector(states => states.signin)

    const handleSign = ()=>{
        dispatch(submitSign("Francisco Tamele"))
        navigation.navigate("SignUp")
    }

    const dispatch = useDispatch();

    return (
        <ImageBackground
            source={initback}
            resizeMode="stretch"
            style={styles.imageStyle}>
            <Container>
                <Logo width="100%" height="60" />
                <TitleApp>MozTa</TitleApp>
                <Form>
                    <Campo onChangeText={(t)=>setEmail(t)} IconSvg={IconPerson} placeholder={placeholderEmail} />
                    <Campo onChangeText={(t)=>setEmail(t)} IconSvg={IconLock} placeholder={placeholderSenha} password={true} />

                    <TouchableOpacity style={{alignSelf:"flex-end"}}>
                        <TextoEsqueceu>Forget password?</TextoEsqueceu>
                    </TouchableOpacity>
                    <Botao onPress={handleSign} value={"SignIn"}/>
                </Form>
                <ViewBottom>
                    <Texto value="Do you have account?" bold={false} />
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                        <Texto value="Create account" bold={true} />
                    </TouchableOpacity>
                </ViewBottom>
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
