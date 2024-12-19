import { createSlice } from "@reduxjs/toolkit";
import { getSystemTheme } from "./themeUtil";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : getSystemTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", state.theme === "dark");
      localStorage.setItem("theme", state.theme);
    },
    setUsername: (state, action) => {
      state.username = action.payload.name;
    },
    clearUsername: (state) => {
      state.username = "";
    },
  },
});

export const { toggleTheme, setUsername, clearUsername } = userSlice.actions;
export default userSlice.reducer;
