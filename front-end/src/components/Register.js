import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="App">
        <a href="/">Home</a>

        <header className="App-header">
        <h1>Register</h1>

          <div>First name:</div>
          <input type="text" name="email"></input>

          <div>Last name:</div>
          <input type="text" name="email"></input>

          <div>Email address:</div>
          <input type="text" name="email"></input>

          <div>Password:</div>
          <input type="text" name="password"></input>
        </header>
      </div>
    );
  }
}

export default Register;