import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    data:[],
    error:null
}


// Esta funcao thunk retorna um promise pode dispara action como: pending,fulfilled,rejected
// Essas acoes podem ser tratadas pelo atributos estraReducers, do parametro da funcao createSlice
export const getData = createAsyncThunk('endpoint',()=>{

    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)

})

const apiSlicer = createSlice({
    name:"api",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{

        /**
         * O extraReducers gere os estados da funcao Asyncthunk, adicionando funcoes para varios casos
         * cada async thunk retorna tres estados que serao apresentados abaixo, gerindo a funcao asyncthunk acima 'getData'
         *
         * # getData.pending
         * getData - Nome da funcao async que se pretende gerir o estado
         * pending - O estado da funcao
         *
         * */
        builder.addCase(getData.pending,(state)=>{
            // Basta mudar o valor do atributo do estado que a tela sera renderizada novamente e o novo valor sera acessado pelo useSelector dentro do componente
            state.loading = true;
        });

        builder.addCase(getData.fulfilled,(state, action)=>{
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(getData.rejected,(state)=>{
           state.error = "Erro ao buscar os dados";
           state.data = [];
        });

        /**********************************************************************************/
    }
});

export default apiSlicer.reducer;