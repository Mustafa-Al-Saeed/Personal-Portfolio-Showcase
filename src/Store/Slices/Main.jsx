import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMode : window.localStorage.getItem("status") ? window.localStorage.getItem("status") : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setColor : (state, action) => {
      state.currentMode = action.payload
      if(action.payload === "light") {
        document.documentElement.classList.remove("dark")
        document.body.classList.remove("dark")
      }
      document.documentElement.classList.add(action.payload)
      window.localStorage.setItem("status" , action.payload )
      document.body.classList.add(window.localStorage.getItem("status"))
    }
  },
})

// Action creators are generated for each case reducer function
export const { setColor } = main.actions

export default main.reducer