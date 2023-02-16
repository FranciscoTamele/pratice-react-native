import {configureStore} from "@reduxjs/toolkit";

import SignInSlice from "./SignInSlice";

export default configureStore({
    reducer:{
        signin:SignInSlice
    }
})
