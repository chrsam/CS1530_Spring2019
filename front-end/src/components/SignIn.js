import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <header className="App-header">
        <h1>Sign in</h1>

          <div>Email address:</div>
          <input type="text" name="email"></input>

          <div>Password:</div>
          <input type="text" name="password"></input>

          <button type="button">Sign in</button>

        </header>
      </div>
    );
  }
}

export default SignIn;