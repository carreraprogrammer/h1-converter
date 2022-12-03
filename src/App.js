import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navbar from './Components/Navbar';
import H1Converter from './Pages/H1Converter';

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
        <Routes>
          <Route path="/" end element={<H1Converter />} />
        </Routes>
    </Provider>
  )
}