import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/echo">EchoText로</Link>
      </div>
    </div>
  );
}
