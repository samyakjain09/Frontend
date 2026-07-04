import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "./slices/counter"
import themeReducer from "./slices/theme"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        theme:themeReducer
    }
})
