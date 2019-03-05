import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {

  componentDidMount() {
    document.title = "Register | RateMyClass"
  }


  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  submit(event) {
    event.preventDefault(); 
    // REST calls go here
    console.log("Register button clicked");

    // POST the user's name, email, and password
    fetch('http://localhost:8000', {     // 8000 is the default port for django
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS?
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
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
      <div>
        <Link to="/">Home</Link>

        <header className="App-header">
        <h1>Register</h1>

          <div>First name:</div>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>

          <div>Last name:</div>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>

          <div>Email address:</div>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>

          <div>Password:</div>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

          <br/>
          <button type="button" onClick={this.submit}>Register</button>
        </header>

      </div>
    );
  }
}

export default Register;