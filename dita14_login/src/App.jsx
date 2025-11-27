import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  //  forma nuk rifreskon faqen,
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Të dy fushat janë të detyrueshme!');
      setSuccess(false);
      return;
    }

    if (username === 'admin' && password === 'password') {
      setError('');
      setSuccess(true);
    } else {
      setError('Emri i përdoruesit ose fjalëkalimi është i pasaktë.');
      setSuccess(false);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Jeni kyçur me sukses!</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Emri i Përdoruesit</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Shkruani emrin e përdoruesit"
            />
          </div>
          <div className="input-group">
            <label>Fjalëkalimi</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Shkruani fjalëkalimin"
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
