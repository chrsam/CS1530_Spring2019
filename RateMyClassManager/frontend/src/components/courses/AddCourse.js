import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {addCourse} from "../../actions/courses";
import {Link, Redirect} from "react-router-dom";

export class AddCourse extends Component {

  state = {
    name: '',
    university: '',
    prof: '',
    class_code: ''
  }

  static propTypes = {
    addCourse: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
   }
  onChange = event => this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault();
    const { name , university, prof, class_code, review} = this.state
    const course = { name, university, prof, class_code, review}
    this.props.addCourse(course);
    this.setState({
      name: "",
      university: "",
      prof: "",
      class_code: "",
      review: ""
    });
  }
  render () {
    const {name, university, prof, class_code, review} = this.state;
    const {isAuthenticated} = this.props.auth

    const guestLinks = (
        <div className="jumbotron mt-5">
          <h1 className="display-4">Add a Course Review</h1>
          <p className="lead">As a member of Rate My Course, you are able to review a course that you are currently taking or have taken in the past.</p>
          <hr className="my-4" />
          <p>Want to create a review for a course? Join now!</p>
          <button className="btn btn-success btn-lg text-light" href="#" role="button">
          <Link to="/register" className = "text-light">Join Now!</Link>
          </button>
        </div>
    )

    const authLinks = (
      <div className = "card card-body mt-5 mb-5">
        <h2>Add a Course Review</h2>
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <label>Course Name</label>
            <input className = "form-control" placeholder="Software Engineering" type = "text" name = "name" onChange = {this.onChange} value = {name} />
          </div>
          <div className = "form-group">
            <label>University</label>
            <input className = "form-control" placeholder="University of Pittsburgh" type = "text" name = "university" onChange = {this.onChange} value = {university} />
          </div>
          <div className = "form-group">
            <label>Professor</label>
            <input className = "form-control" placeholder="Professor John Smith" type = "text" name = "prof" onChange = {this.onChange} value = {prof} />
          </div>
          <div className = "form-group">
            <label>Course Code</label>
            <input className = "form-control" placeholder="CS1530" type = "text" name = "class_code" onChange = {this.onChange} value = {class_code} />
          </div>
          <div className = "form-group">
            <label>Course Code</label>
            <textarea className = "form-control" placeholder="Review here..." type = "text" name = "review" onChange = {this.onChange} value = {review} />
          </div>
          <div className = "form-group">
            <button type="sumbit" className = "btn btn-outline-success btn-lg btn-block"> Add Course </button>
          </div>

        </form>
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

export default connect(mapStateToProps, {addCourse})(AddCourse)

// <div class="form-group form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1">
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
