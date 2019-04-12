import React, { Component } from 'react';
import CourseDashboard from "../courses/CourseDashboard";
import { Link , NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";


class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  render() {
    const { isAuthenticated, user} = this.props.auth

    const authLinks = (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Rate My Class</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
          <Link to="/courses" className ="nav-link">
          All Courses
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/addcourse" className ="nav-link">
          Add Course
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/findcourses" className ="nav-link">
          Find Courses
          </Link>
          </li>


          </ul>
        {/*
        <form className="form-inline my-2 my-lg-1 ">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>*/}

        <ul className="navbar-nav ml-3">
        <li className="nav-item">
          <button onClick= {this.props.logout} type="button" className="nav-link btn btn-light text-dark">
          Logout
          </button>
        </li>
        </ul>

      </div>
      </nav>

    )

    const guestLinks = (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Rate My Class</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
          <Link to="/courses" className ="nav-link">
          Courses
          </Link>
          </li>


          </ul>
        <form className="form-inline my-2 my-lg-1 ">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        <ul className="navbar-nav ml-3">
        <li className="nav-item">
          <Link to="/login" className ="nav-link">
          Login
          </Link>
        </li>
        </ul>

      </div>
      </nav>
    )
    return (
      <div>
      {isAuthenticated ? authLinks: guestLinks}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header)


// <li className="nav-item">
//   <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
// </li>

// <li className="nav-item dropdown">
//   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Login
//   </a>
//   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//     <a className="dropdown-item" href="#">Login</a>
//     <a className="dropdown-item" href="#">Create a Account</a>
//
//   </div>
// </li>

// SHOWS USER NAME
// <span className = "navbar-text mr-3">
// <strong>
//   {user ? `Welcome, ${user.username}`: ""}
// </strong>
// </span>
