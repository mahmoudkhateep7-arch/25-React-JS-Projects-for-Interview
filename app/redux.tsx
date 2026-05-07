
"use client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ObjResShape } from "./api/getrandomdata/route";
const a = true
interface MyNewInterFace extends ObjResShape {
  newProp: boolean
}
const initalState: (MyNewInterFace) =
  { showAccoridan: a, showlightDarkMode: a, showRandomColor: a, showTicTac: a, showTreeView: a, newProp: a }
const showComponentsSlice = createSlice({
  name: 'showComponentsSlice',
  initialState: initalState,
  reducers: {
    fillState: (state, action) => {
      console.log(action.payload)
      return action.payload
    },
    updateObj: (state, action: { payload: keyof ObjResShape }) => {
      const key = action.payload
      console.log(key)
      console.log(!(state[key]))

      state[key] = !(state[key])
      state.newProp = !(state.newProp)
    }


  }
})

export const { fillState, updateObj } = showComponentsSlice.actions
const store = configureStore({
  reducer: {
    showComponentsSlice: showComponentsSlice.reducer
  }

})

export default function ReduxWrapper({ children }: PropsWithChildren) {

  return <Provider children={children} store={store}></Provider>
}


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
