import React, {useEffect, useState} from 'react'
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getData} from "../../reducers/ApiReducer";


export default ({navigation})=>{

    const [auth, setAuth] = useState(false);

    const dispatch = useDispatch();

    /**
     * Para pegar o estado de um determinado, segue-se abaixo
     * Porque state.api? Porque foi o nome da variavel que usou-se no createConfigure
     * */
    const state = useSelector(state=>state.api);

    /**
     * O useEffect controla variaveis e aciona uma accao quando o estado dessas variaveis muda,
     * no useEffect abaixo essa accao so sera executada uma vez ou seja a primeira vez que o component renderizar
     * e nao ira executar novamente, o array das variaveis de controle esta vazia, logo nada ira acionar a funcao
     * */

    // useEffect(()=>{
    //     dispatch(getData())
    // },[])

    useEffect(()=>{
        console.log(auth)
        if(auth){

        }
    },[auth]);

    if(state.data.length>0){
        useEffect(()=>navigation.navigate(""),[])
    }


    return (
        <View style={{flex:1,justifyContent:'center',alignContent:'center',padding:20}}>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:30,color:"#000"}}>{state.loading?'Loading':'Not loading'}</Text>
            <Text style={{textAlign:"center",fontSize:30,padding:20}}>Content</Text>
            <Button title={"Request"} onPress={()=>dispatch(getData())}/>
        </View>
    )
}