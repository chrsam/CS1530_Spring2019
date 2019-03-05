import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  componentDidMount() {
    document.title = "Sign In | RateMyClass"
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  submit(e) {
    e.preventDefault();
    // REST calls go here
    console.log("Sign in button clicked");
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });  
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <header className="App-header">
        <h1>Sign in</h1>

          <div>Email address:</div>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>

          <div>Password:</div>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

          <br/>

          <button type="button" onClick={this.submit}>Sign In</button>

        </header>
      </div>
    );
  }
}

export default SignIn;