import {configureStore} from "@reduxjs/toolkit";

import SignInSlice from "./SignInSlice";
import ApiReducer from "./ApiReducer";

export default configureStore({
    reducer:{
        signin:SignInSlice,
        api:ApiReducer
    }
})
