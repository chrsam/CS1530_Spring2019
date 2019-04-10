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
      <Fragment>
      <div className = "container ml-3 mr-3">
      <h2>Course Reviews</h2>
      {this.props.courses.map(course => (
        <div className = "container ml-3 mr-3 mt-3 mb-3">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <h2>{course.name}
            </h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">{course.university}</h4>
            <ul>
              <h5> Professor: {course.prof}</h5>
              <h5> Course Code: {course.class_code}</h5>
            </ul>
            <button className="btn btn-success btn-lg text-light" href="#" role="button">
            <Link to="/register" className = "text-light">See Review</Link>
            </button>
          </div>
        </div>
        </div>
      ))}
      </div>
      </Fragment>
    )


    const authLinks = (
      <Fragment>
        <div className = " container ml-3 mr-3">
        <h2>Course Reviews</h2>
        {this.props.courses.map(course => (
          <div className = "container ml-3 mr-3 mt-3 mb-3">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-header">
                <h2>{course.name}
                <div className = "float-right">
                  <button onClick = {this.props.deleteCourse.bind(this, course.id)} className = "btn btn-outline-dark  btn-sm">Delete</button>
                </div>
                </h2>
              </div>
            <div className="card-body">
              <h4 className="card-title">{course.university}</h4>
              <ul>
                <h5> Professor: {course.prof}</h5>
                <h5> Course Code: {course.class_code}</h5>
                <h5> Review: </h5>
                <p>{course.review}</p>
              </ul>
            </div>
          </div>
          </div>
        ))}

      </div>


      </Fragment>
    )
    return (
      <div>
      {isAuthenticated ? authLinks: guestLinks}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  auth: state.auth
})

export default connect(mapStateToProps, { getCourses, deleteCourse})(CourseList)
//
// <table className = "table table-hover">
//   <thead>
//     <tr>
//       <th>ID</th>
//       <th>Course Name</th>
//       <th>University</th>
//       <th>Professor</th>
//       <th>Class Code</th>
//       <th />
//     </tr>
//   </thead>
//   <tbody>
//     {this.props.courses.map(course => (
//       <tr key = {course.id}>
//         <td>{course.id}</td>
//         <td>{course.name}</td>
//         <td>{course.university}</td>
//         <td>{course.prof}</td>
//         <td>{course.class_code}</td>
//         <td><button onClick = {this.props.deleteCourse.bind(this, course.id)} className = "btn btn-outline-dark  btn-sm">Delete</button></td>
//       </tr>
//     ))}
//   </tbody>
// </table>
