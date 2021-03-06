import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login, loginAdmin} from "../../actions/auth";



export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.username == "admin") {
      this.props.loginAdmin(this.state.username, this.state.password)
    } else {
      this.props.login(this.state.username, this.state.password)
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    const {username, password} = this.state

    return (
      <div className= "col-md-6 m-auto">
        <div className = "card card-body mt-5 mb-5">
          <h2 className = "mb-3">Login</h2>
          <form onSubmit = {this.onSubmit}>
            <div className = "form-group">
              <label>Username</label>
              <input className = "form-control" placeholder="abc123" type = "text" name = "username" onChange = {this.onChange} value = {username} />
            </div>
            <div className = "form-group">
              <label>Password</label>
              <input className = "form-control" type = "password" name = "password" onChange = {this.onChange} value = {password} />
            </div>
            <div className = "form-group">
              <button type="sumbit" className = "btn btn-outline-success btn-lg btn-block"> Login </button>
            </div>
            <p>
            Do not have an account? <Link to="/register">Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login, loginAdmin})(Login)
