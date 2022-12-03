import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import H1Converter from './Pages/H1Converter';

export default function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" end element={<H1Converter />} />
        </Routes>
    </>
  )
}