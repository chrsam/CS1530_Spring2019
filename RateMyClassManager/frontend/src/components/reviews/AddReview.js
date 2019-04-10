
import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
// import StarRatings from 'react-star-ratings';

export class AddReview extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
   }
  render () {
    const {isAuthenticated} = this.props.auth

    const guestLinks = (
      <div className="jumbotron mt-5">
        <h1 className="display-4">Make a review</h1>
        <p className="lead">This is a application where students can add their courses and reviews on the course to share with other fellow students.</p>
        <hr className="my-4" />
        <p>Want to see reviews on these courses? Become a member now!</p>
        <button className="btn btn-success btn-lg text-light" href="#" role="button">
        <Link to="/register" className = "text-light">Join Now!</Link>
        </button>
      </div>
    )

    const authLinks = (
      <div className="jumbotron mt-5">
        <h1 className="display-4">Write a review</h1>
        <p className="lead">Make a review on previous post by another student!</p>
        <hr className="my-4" />
        <h1>Forms will go down here</h1>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
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

export default connect(mapStateToProps, {AddReview})(AddReview)




// import React, {Component} from 'react';
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {addCourse} from "../../actions/courses";
// import {Link, Redirect} from "react-router-dom";
//
// export class AddReview extends Component {
//   render () {
//     // const {name, university, prof, class_code} = this.state;
//     return (

//
//
//     )
//   }
// }
// const mapStateToProps = state => ({
//   auth: state.auth
// })
//
// export default connect(mapStateToProps, {AddReview})(AddReview)
