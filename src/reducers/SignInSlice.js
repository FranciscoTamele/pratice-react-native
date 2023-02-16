import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'signin',
    initialState:{
        user:null,
        isLogged:false,
    },
    reducers:{
        // Os metodos dos reducers devem receber sempre o parametro 'state' que e o estado actual
        // caso seja passada alguma informacao, iria ser recebido no parametro payload
        submitSign(state,{payload}){
            return { ...state,
            user: payload,
            isLogged: true}
        },

        logout(state){

        }
    }
});

export const {submitSign,logout} = slice.actions

export default slice.reducer;


