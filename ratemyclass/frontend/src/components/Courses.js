import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, deleteCourse } from '../actions/courses'

export class Courses extends Component {
    static propTypes = {
        // Defining prop types is not necessary but is good practice
        courses: PropTypes.array.isRequired,
        getCourses: PropTypes.func.isRequired,
        deleteCourse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCourses();
    }

  render() {
    return (
      <Fragment>
        <h3>Courses</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class Code</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                { this.props.courses.map(course => (
                    <tr id={course.id}>
                        <td>{course.id}</td>
                        <td>{course.name}</td>
                        <td>{course.class_code}</td>
                        <td><button onClick={this.props.deleteCourse.bind(this, course.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )) }
            </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    courses: state.courses.courses // Redux state -> courses reducer -> courses data
});

export default connect(mapStateToProps, { getCourses, deleteCourse })(Courses);
