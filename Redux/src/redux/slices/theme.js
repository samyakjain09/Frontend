import { createSlice } from "@reduxjs/toolkit";
export const themeSlice=createSlice({
    name:'theme',
    initialState:{
        value:"light"
    },
    reducers:{
        changeThemeToBlack:(state)=>{
            state.value='dark'
        },
        changeThemeToRed:(state)=>{
            state.value='Red'
        }
    }
})

export const {changeThemeToBlack,changeThemeToRed}=themeSlice.actions
export default themeSlice.reducer