import { configureStore } from '@reduxjs/toolkit'
import main from "./Slices/Main"
import showLayer from "./Slices/ShowLayer"

export const store = configureStore({
    reducer: {main : main , showLayer : showLayer},
})