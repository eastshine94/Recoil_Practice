import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EchoText from './pages/EchoText';
import Home from './pages/Home';

export default function App() {
  return (
    <div style={{ padding: '10px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/echo" element={<EchoText />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
