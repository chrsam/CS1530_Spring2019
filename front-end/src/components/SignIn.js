import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  state = {
    email: "",
    password: ""
  };

  submit(e) {
    e.preventDefault();
    // REST calls go here
    console.log("Sign in button clicked");
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <header className="App-header">
        <h1>Sign in</h1>

          <div>Email address:</div>
          <input type="text" name="email" value={this.state.email}></input>

          <div>Password:</div>
          <input type="text" name="password" value={this.state.password}></input>

          <br/>

          <button type="button" onClick={this.submit}>Sign In</button>

        </header>
      </div>
    );
  }
}

export default SignIn;