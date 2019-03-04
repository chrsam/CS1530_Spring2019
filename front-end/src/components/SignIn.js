import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <div className="App">
        <a href="/">Home</a>
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