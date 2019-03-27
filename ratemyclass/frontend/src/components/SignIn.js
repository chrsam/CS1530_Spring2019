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

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  submit(e) {
    e.preventDefault();
    console.log("Sign in button clicked");

    // POST the email and password
    fetch('http://localhost:8000', {     // 8000 is the default port for django
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS?
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(
      response => {
        // Handle the response from the server
        console.log(response);
      }
    );
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