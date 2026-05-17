
"use client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ObjResShape } from "./api/getrandomdata/route";
import { comingObjshape } from "./recdetails/[id]/oneRecipeget";
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
      return action.payload
    },
    updateObj: (state, action: { payload: keyof ObjResShape }) => {
      const key = action.payload

      state[key] = !(state[key])
      state.newProp = !(state.newProp)
    }


  }
})
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: { searchVale: '', getDateRecipes: false }, reducers: {
    updateSearchValue: (state, action) => {
      state.searchVale = action.payload
    },
    updateGetDateRecipes: (state, action) => {
      state.getDateRecipes = action.payload
    },
  }
})
const init: comingObjshape[] = []
const favSlice = createSlice({
  name: 'favslice', initialState: init, reducers: {
    updateFavObject: (state, action) => {
      const a = state.some((item) => {
        return item.data.recipe.id == action.payload.data.recipe.id
      })
      if (a) { return }
      state.push(action.payload)

    },
    removeItem: (state, action) => {
      const filtered = state.filter((item) => {
        return item.data.recipe.id != action.payload
      })
      return filtered
    }

  }
})
export const { fillState, updateObj } = showComponentsSlice.actions
export const { updateSearchValue, updateGetDateRecipes } = recipesSlice.actions
export const { updateFavObject, removeItem } = favSlice.actions


const store = configureStore({
  reducer: {
    showComponentsSlice: showComponentsSlice.reducer,
    recipesSlice: recipesSlice.reducer,
    favSlice: favSlice.reducer


  }

})

export default function ReduxWrapper({ children }: PropsWithChildren) {

  return <Provider children={children} store={store}></Provider>
}


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
