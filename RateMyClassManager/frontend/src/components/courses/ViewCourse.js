import React, { Component } from 'react';
import NewReview from "../reviews/NewReview";
import PropTypes from 'prop-types';
import ReviewDashboard from '../reviews/ReviewDashboard';
import { getCourses } from "../../actions/courses";
import {connect } from 'react-redux';



export class ViewCourse extends Component {

  state = {
    courseID: this.props.match.params.id,
    courseName: 'Course Name'
  }

  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired
  }

  componentDidMount() {
    /*this.props.getCourses()
      .then((data) => {
        console.log(data);
        console.log("hello there!!!!");
        var course = this.props.courses.filter(course => course.id == this.props.match.params.id);
        //console.log(this)
        console.log(this.props.courses);
        this.setState({
          courseName: course.name
        })
      });*/
    
    //console.log(course);
  }

  render() {
    return (
      <div>
        <h1>{this.state.courseName}</h1>
        <NewReview courseID={this.state.courseID} courseName={this.state.courseName}></NewReview>
        <ReviewDashboard></ReviewDashboard>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
})

export default connect(mapStateToProps, { getCourses})(ViewCourse);
