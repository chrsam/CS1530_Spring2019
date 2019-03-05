import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Register extends Component {



  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  submit(event) {
    event.preventDefault(); 
    // REST calls go here
    console.log("Register button clicked");
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