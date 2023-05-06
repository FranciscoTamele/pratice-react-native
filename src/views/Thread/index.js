import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

export default ()=>{

    return (
        <View style={{justifyContent:'center',alignItems:'center',padding:50,flex:1}}>
            <Opccao/>
            <TouchableOpacity onPress={()=>{
                console.log("Clicou no touchable")
            }}>
                <Text>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )

}

const Opccao = ()=>{

    const [color,setColor] = React.useState('#fff');

    var i = 1;
    const checkOpccao = async ()=>{

        setTimeout(function(){
            if(i%2===0){
                setColor('#ed1c39');
            }else{
                setColor('#000ed1');
            }
            if(i<10){
                checkOpccao();
            }
            i++;
        },400);

    }


    return (
        <TouchableOpacity style={{backgroundColor:color,padding:12,fontSize:20}} onPress={checkOpccao}>
            <Text>Opccao</Text>
        </TouchableOpacity>
    )
}