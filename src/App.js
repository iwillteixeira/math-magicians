import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes className="content">
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
