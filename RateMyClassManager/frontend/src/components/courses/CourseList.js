import React, {Component, Fragment} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, Redirect} from "react-router-dom";
import { getCourses, deleteCourse, addCourse} from "../../actions/courses";

export class CourseList extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    getCourses: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getCourses();
  }

  render () {
    const {isAuthenticated} = this.props.auth

    const guestLinks = (
        <h3>Don't see the course you're looking for? <Link to="/login">Login to add it!</Link></h3>
    );

    const authLinks = (
      <h3>Don't see the course you're looking for? <Link to="/addcourse">Click here to add it!</Link></h3>
    );

    return (
      <Fragment>
        <div className = "container ml-3 mr-3">
          <h2>Courses</h2>
          {this.props.courses.map(course => (
            <div className = "container ml-3 mr-3 mt-3 mb-3">
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-header">
                  <Link to={"/viewcourse/" + course.id}><h3>{course.class_code}: {course.name}</h3></Link>
                </div>
                <div className="card-body">
                  <ul>
                    <h5 className="card-title">{course.university}</h5>
                    <h5 className="card-title">Average rating: {Math.round(course.average_rating * 100) / 100} stars</h5>
                    <h5 className="card-title">{course.num_reviews} reviews</h5>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
        {isAuthenticated ? authLinks: guestLinks}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  auth: state.auth
})

export default connect(mapStateToProps, { getCourses, deleteCourse })(CourseList)

