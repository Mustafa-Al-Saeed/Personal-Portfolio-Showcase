import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    layerStatus : false
}

export const showLayer = createSlice({
  name: 'showLayer',
  initialState,
  reducers: {
    setShowLayer : (state , action) => {
        state.layerStatus = !action.payload
    }
  },
})

export const { setShowLayer } = showLayer.actions

export default showLayer.reducer