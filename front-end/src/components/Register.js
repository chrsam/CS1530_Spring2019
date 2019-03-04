import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  submit(e) {
    e.preventDefault();
    // REST calls go here
    console.log("Register button clicked");
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>

        <header className="App-header">
        <h1>Register</h1>

          <div>First name:</div>
          <input type="text" name="email" value={this.state.firstName}></input>

          <div>Last name:</div>
          <input type="text" name="email" value={this.state.lastName}></input>

          <div>Email address:</div>
          <input type="text" name="email" value={this.state.email}></input>

          <div>Password:</div>
          <input type="text" name="password" value={this.state.password}></input>

          <br/>
          <button type="button" onClick={this.submit}>Register</button>
        </header>

      </div>
    );
  }
}

export default Register;