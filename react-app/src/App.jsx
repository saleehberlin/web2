import React from 'react';

// Greeting 
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Greeting name="Saleinca" />
      <Greeting name="Berlin" />
    </div>
  );
}