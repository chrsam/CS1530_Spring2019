import React, { Component } from 'react';
import NewReview from "../reviews/NewReview";
import PropTypes from 'prop-types';
import ReviewDashboard from '../reviews/ReviewDashboard';
import { getCourseByID } from "../../actions/courses";
import {connect } from 'react-redux';



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
    if (this.props.courses && this.props.courses[0] && this.props.courses[0][0]){ // null checks
      courseName = this.props.courses[0][0].name;
      console.log(this.props.courses[0][0]);
    }
    
    return (
      <div>
        <h1>{courseName}</h1>
        <NewReview courseID={this.state.courseID} courseName={courseName}></NewReview>
        <ReviewDashboard courseID={this.state.courseID} courseName={courseName}></ReviewDashboard>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
})

export default connect(mapStateToProps, { getCourseByID }) (ViewCourse);
