import React, { Component } from 'react';
import NewReview from "../reviews/NewReview";
import PropTypes from 'prop-types';
import ReviewList from '../reviews/ReviewList';
import { getCourseByID } from "../../actions/courses";
import { connect } from 'react-redux';

export class ViewCourse extends Component {

  state = {
    courseID: this.props.match.params.id
  }

  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourseByID: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getCourseByID(this.state.courseID);
  }

  render() {
    var courseName = "";
    var courseCode = "";
    var university = "";
    if (this.props.courses && this.props.courses[0] && this.props.courses[0][0]){ // null checks
      courseName = this.props.courses[0][0].name;
      courseCode = this.props.courses[0][0].class_code;
      university = this.props.courses[0][0].university;
    }
    
    return (
      <div>
        <br/>
        <h1>{courseCode}: {courseName}</h1>
        <h3>{university}</h3>
        <NewReview courseID={this.state.courseID} courseName={courseName}></NewReview>
        <ReviewList courseID={this.state.courseID} courseName={courseName}></ReviewList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
})

export default connect(mapStateToProps, { getCourseByID }) (ViewCourse);
