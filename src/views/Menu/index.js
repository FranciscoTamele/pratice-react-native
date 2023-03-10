import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../components/Text";

import Edit from "./../../../assets/edit.svg";
import Logout from "./../../../assets/power.svg";
import BtnBack from "./../../../assets/arrow-back.svg";
import IconHome from "./../../../assets/home.svg";
import IconMinhas from "./../../../assets/message-square.svg";
import IconMenu from "./../../../assets/menu.svg";

import {
    Container,
    ContainerPerfil,
    UserName,
    ContainerBtnPerfil,
    Header,
    ContainerBack,
    BtnTouch,
    Scroll,
    TitleMenu,
    ItemMenu,
    ContainerItemMenu,
    DividerMenu,
    TxtMenu,
} from "./style";

export default () => {
    return (
        <Container>
            <ContainerBack>
                <BtnTouch>
                    <BtnBack width="30" height="30" fill="#000"></BtnBack>
                </BtnTouch>
                <TxtMenu>Menu</TxtMenu>
            </ContainerBack>
            <Header>
                <ContainerPerfil>
                    <View>
                        <UserName>Francisco Tamele</UserName>
                        <Texto value="franciscotamelle@gmail.com"></Texto>
                        <Texto value="Mocambique"></Texto>
                    </View>
                    <ContainerBtnPerfil>
                        <TouchableOpacity>
                            <Edit width="30" height="30" fill="#000"></Edit>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Logout width="20" height="20" fill="#000" style={{ marginTop: 10 }} />
                        </TouchableOpacity>
                    </ContainerBtnPerfil>
                </ContainerPerfil>
            </Header>
            <Scroll>
                <View>
                    <TitleMenu>Mensagens</TitleMenu>
                    <ContainerItemMenu>
                        <IconHome style={style.icon} />
                        <ItemMenu>Inicio</ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMinhas style={style.icon} />
                        <ItemMenu>Minhas </ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMenu style={style.icon} />
                        <ItemMenu>Categoria</ItemMenu>
                    </ContainerItemMenu>
                    <DividerMenu />

                    <TitleMenu>Servi??os</TitleMenu>
                    <ContainerItemMenu>
                        <IconHome style={style.icon} />
                        <ItemMenu>Compras</ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMinhas style={style.icon} />
                        <ItemMenu>Restaura????o </ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMenu style={style.icon} />
                        <ItemMenu>Viagens</ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMenu style={style.icon} />
                        <ItemMenu>Presta????o de servi??os</ItemMenu>
                    </ContainerItemMenu>
                    <DividerMenu />

                    <TitleMenu>Jogo de conhecimento</TitleMenu>
                    <ContainerItemMenu>
                        <IconHome style={style.icon} />
                        <ItemMenu>Acad??mia</ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMinhas style={style.icon} />
                        <ItemMenu>V??rios temas</ItemMenu>
                    </ContainerItemMenu>
                    <DividerMenu />

                    <TitleMenu>MozTa App</TitleMenu>
                    <ContainerItemMenu>
                        <IconHome style={style.icon} />
                        <ItemMenu>Acerca</ItemMenu>
                    </ContainerItemMenu>
                    <ContainerItemMenu>
                        <IconMinhas style={style.icon} />
                        <ItemMenu>Fale connosco </ItemMenu>
                    </ContainerItemMenu>

                    <View style={{ padding: 10 }} />
                </View>
            </Scroll>
        </Container>
    );
};

const style = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        fill: "#000",
    },
});
