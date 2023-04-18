import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log({isLoggedIn})

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {isLoggedIn ? "Welcome" : "Sign Up"}
        </p>
      </header>
      {!isLoggedIn && <SignUpForm handleSignUp={setIsLoggedIn} />}
    </div>
  );
}

export default App;
