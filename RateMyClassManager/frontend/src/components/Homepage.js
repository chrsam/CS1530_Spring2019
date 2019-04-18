import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import Login from "./accounts/Login";
import AddCourse from "./courses/AddCourse"

export class Homepage extends Component {
  //
  // state = {
  //   name: '',
  //   university: '',
  //   prof: '',
  //   class_code: ''
  // }

  static propTypes = {
    auth: PropTypes.object.isRequired
   }
  // onChange = event => this.setState({ [event.target.name]: event.target.value })
  //
  // onSubmit = event => {
  //   event.preventDefault();
  //   const { name , university, prof, class_code, review} = this.state
  //   const course = { name, university, prof, class_code, review}
  //   this.props.addCourse(course);
  //   this.setState({
  //     name: "",
  //     university: "",
  //     prof: "",
  //     class_code: "",
  //     review: ""
  //   });
  // }
  render () {
    // const {name, university, prof, class_code, review} = this.state;
    const {isAuthenticated} = this.props.auth

    const guestLinks = (
            <div className="jumbotron mt-5">
              <h1 className="display-3 text-center">Welcome to Rate My Class</h1>
              <p className="lead text-center">An application where students can add their courses and reviews on the course to share with other fellow students.</p>
              <hr className="my-4" />
              <Login />
            </div>
    )

    const authLinks = (
      <div>
      <div className="jumbotron">
        <h1 className="display-3 text-right">Welcome back to Rate My Class!</h1>
        <p className="lead text-right">An application where students can add their courses and reviews on the course to share with other fellow students.</p>
      </div>
        <AddCourse />
      </div>



    )
    return (
      <div className= "container">
      {isAuthenticated ? authLinks: guestLinks}
      </div>

    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {Homepage})(Homepage)


// import React, { Component, Fragment} from 'react';
// import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
// import Login from "./accounts/Login";
//
// export default function Homepage() {
//     return(
//
//       <Fragment>
//       <div className="jumbotron mt-5">
//         <h1 className="display-4">Welcome to Rate My Class</h1>
//         <p className="lead">An application where students can add their courses and reviews on the course to share with other fellow students.</p>
//         <hr className="my-4" />
//         <Login />
//       </div>
//
//       </Fragment>
//
//     )
//
// }
