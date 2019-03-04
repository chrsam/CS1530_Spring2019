import React, { Component } from 'react';
import logo from './logo.svg';

class Register extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Register</h1>
          <a href="/register">Register</a>

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