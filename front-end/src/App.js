import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Welcome to RateMyClass</h1>
          <a href="/register">Register</a>
          <br/>
          <a href="/signin">Sign in</a>
        </header>
        <Register></Register>
        <SignIn></SignIn>
      </div>
      
    );
  }
}

export default App;
