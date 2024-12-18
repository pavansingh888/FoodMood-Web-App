import {createSlice} from "@reduxjs/toolkit";
import { getSystemTheme } from "./themeUtil";

const userSlice = createSlice({
    name:"user" ,
    initialState:{
      theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : getSystemTheme() ,
    } ,
    reducers:{
     toggleTheme : (state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', state.theme === 'dark');
        localStorage.setItem('theme',state.theme); 
     },
    }
})

export const {toggleTheme} = userSlice.actions;
export default userSlice.reducer;