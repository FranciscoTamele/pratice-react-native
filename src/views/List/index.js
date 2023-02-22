import React from "react";
import { Text, FlatList, Pressable, TouchableOpacity } from "react-native";
import { Container } from "./style";

export default () => {

    const data = [
        {
            id: 1,
            nome: "Francisco Rafael",
            type: "text"
        },
        {
            id: 2,
            nome: "Eulalia Antonio",
        },
        {
            id: 3,
            nome: "Francisco Rafael",
            type: "text"
        },
        {
            id: 4,
            nome: "Eulalia Antonio",
        }
    ];

    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={()=> console.log("Clicou")}>
                            <Text>{item.nome}</Text>
                            <TouchableOpacity onPress={()=>{
                                console.log("Clique me "+item.id)
                            }}>
                                <Text>Clique me</Text>
                            </TouchableOpacity>
                        </Pressable>
                    )
                }
            }/>
        </Container>
    );

}
