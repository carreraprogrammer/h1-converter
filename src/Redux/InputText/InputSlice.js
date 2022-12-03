
import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  h1Text: '',
}

const inputSlice = createSlice(
  {
    name: 'InputText',
    initialState,
    reducers: {
        resetState(state) {
          return {...state, content:'', h1Text: '' }
        },
        followInput(state, { payload }) {
          return {...state, content: payload}
        },
        followh1(state, {payload}) {
          return {...state, content: payload, h1Text: payload.replace('/1', '') }
        }
    }
  }
) 

export const { resetState, followInput, followh1 } = inputSlice.actions;
export default inputSlice.reducer