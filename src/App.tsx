import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EchoText from './pages/EchoText';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

export default function App() {
  return (
    <div style={{ padding: '10px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/echo" element={<EchoText />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
