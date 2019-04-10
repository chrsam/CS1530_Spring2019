import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../actions/auth";
import {createMessage} from '../../actions/messages';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
    const {username, email, password, password2} = this.state;
    if (password !== password2) {
      this.props.createMessage({passwordsNotMatch:
      "Passwords do not match"})
    } else {
      const newUser = {
        username,
        email,
        password
      }
      this.props.register(newUser)
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to= "/courses" />
    }
    const {username, email, password, password2} = this.state

    return (
      <div className= "col-md-6 m-auto">
        <div className = "card card-body mt-5 mb-5">
          <h2 className = "mb-3">Create an Account</h2>
          <form onSubmit = {this.onSubmit}>
            <div className = "form-group">
              <label>Username</label>
              <input className = "form-control" placeholder="abc123" type = "text" name = "username" onChange = {this.onChange} value = {username} />
            </div>
            <div className = "form-group">
              <label>Email</label>
              <input className = "form-control" placeholder="abc123@pitt.edu" type = "email" name = "email" onChange = {this.onChange} value = {email} />
            </div>
            <div className = "form-group">
              <label>Password</label>
              <input className = "form-control" type = "text" name = "password" onChange = {this.onChange} value = {password} />
            </div>
            <div className = "form-group">
              <label>Re-enter Password</label>
              <input className = "form-control" type = "text" name = "password2" onChange = {this.onChange} value = {password2} />
            </div>
            <div className = "form-group">
              <button type="sumbit" className = "btn btn-outline-success btn-lg btn-block"> Create Account </button>
            </div>
            <p>
            Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register, createMessage})(Register)
