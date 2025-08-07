import {createRoot} from 'react-dom/client'
import App from './App';
import './App.css'
// root.render(<App/>);
import React, { useState } from 'react';
const root=createRoot(document.getElementById('root'));

function AgeChecker() {
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(age) < 18) {
      setError('You must be at least 18 years old.');
      setMessage('');
    } else {
      setError('');
      setMessage('Hello ✅');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Your Age</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
        <button id="submit" type="submit">Submit</button>
      </form>

      {error && <p id="error" style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}
root.render(<AgeChecker/>);