import { combineReducers, configureStore } from '@reduxjs/toolkit';
import inputSlice from './InputText/InputSlice';

const h1ConverterReducers = combineReducers({
  inputText: inputSlice
})

const store = configureStore ({
  reducer: h1ConverterReducers
})

export default store;