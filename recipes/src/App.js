import React, { useState } from 'react';
import './App.css';
import LoginForm from './Component/Form';
import Home from './Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      
      {isLoggedIn ? (
        <Home username={username} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      
    </div>
  );
}

export default App;
