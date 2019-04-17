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
  state = {
      courseName: '',
      university: '',
      courseCode: '',
      gen_ed:'',
      minRating: ''
  }

  componentDidMount() {
    this.props.getCourses(),
    console.log(this.state)
  }

  onSubmit = event => {
    event.preventDefault();
    const { courseName, university, courseCode, gen_ed } = this.state;
    // const filters = {
    //   inputName: courseName,
    //   inputUniversity: university,
    //   inputCourse: courseCode
    // }
    console.log(this.state)
    this.render()
  }

  onChange = event => this.setState({
    [event.target.name]: event.target.value
  });


  render () {
    const {isAuthenticated} = this.props.auth
    const { courseName, university, courseCode, minRating, gen_ed } = this.state;
    const guestLinks = (
      <div className= "jumbotron">
      <h1 className="display-4">All Courses</h1>
      <hr className ="my4"/>
      {this.props.courses.map(course => (
        <div className = "container ml-3 mr-3 mt-3 mb-3">

          <div className="card shadow p-3 mb-5 bg-white rounded" >

            <div className="card-header">
              <h3>{course.class_code}: {course.name}
              <div className = "float-right">
              <button className = "btn btn-outline-dark text-dark">
              <Link to="/login" className="text-dark">
              See Course
              </Link>
              </button>
              </div>
              </h3>
            </div>
            <div className="card-body">
              <ul>
                <h5 className="card-title">{course.university}</h5>
                <h5 className="card-title">Average rating: {Math.round(course.average_rating * 100) / 100} stars</h5>
                <h5 className="card-title">{course.num_reviews} reviews</h5>
                <h5 className="card-title">Class Type: {course.gen_ed}</h5>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <hr className="my-4"/>
      <h3>Don't see the course you're looking for?</h3>
      <button className="btn btn-success btn-lg mt-2">
      <Link to="/login" className="text-white">Click here to add it!</Link>
      </button>
    </div>


    );

    const authLinks = (
      <div className= "jumbotron">
      <h1 className="display-4">All Courses</h1>
      <h3 className="lead">Take a look at what other students have said about classes they have taken.</h3>
      <hr className ="my-4"/>
      <div>
        <div className="row">
          <div className="col-2">
            <h4>Filter courses:</h4>
            <hr className = "my-2"/>
            <form onSubmit={this.onSubmit}>
              <div className="form-group mb-3">
                <label for="university">University Name:</label>
                <input type="text" className="form-control" name="university" onChange={this.onChange} value={university}/>
              </div>
              <div className="form-group mb-3">
                <label for="courseName">Course Name:</label>
                <input type="text" className="form-control" name="courseName" onChange={this.onChange} value={courseName}/>
              </div>
              <div className="form-group mb-3">
                <label for="courseCode">Course Code:</label>
                <input type="text" className="form-control" name="courseCode" onChange={this.onChange} value={courseCode}/>
              </div>
              <div className="form-group mb-3">
                <label for="courseCode">Gen ed requirements:</label>
                <input type="text" className="form-control" name="gen_ed" onChange={this.onChange} value={gen_ed}/>
              </div>
              <div className="form-group mb-3">
                <label for="courseCode">Minimum Star Rating:</label>
                <input type="text" className="form-control" name="minRating" onChange={this.onChange} value={minRating} style={{width: "20%"}}/>
              </div>
            </form>
            </div>
          <div className="col-10">
            {this.props.courses.filter(course => {
                  if (university != "" && !course.university.toLowerCase().includes(university.toLowerCase()))
                    return false;
                  if (courseName != "" && !course.name.toLowerCase().includes(courseName.toLowerCase()))
                    return false;
                  if (courseCode != "" && !course.class_code.toLowerCase().includes(courseCode.toLowerCase()))
                    return false;
                  if (gen_ed != "" && (!course.gen_ed || !course.gen_ed.toLowerCase().includes(gen_ed.toLowerCase())))
                    return false;
                  let minStarRating = parseInt(minRating);
                  if (!isNaN(minStarRating) && course.average_rating < minStarRating)
                    return false;
                  return true;
                }).map(course => (
              <div className = "container ml-3 mr-3 mt-3 mb-3">
                <div className="card shadow p-3 mb-5 bg-white rounded" >

                  <div className="card-header">
                    <h3>{course.class_code}: {course.name}
                    <div className = "float-right">
                    <button className = "btn btn-outline-dark text-dark">
                    <Link to={"/viewcourse/" + course.id} className="text-dark">
                    See Course
                    </Link>
                    </button>
                    </div>
                    </h3>
                  </div>
                  <div className="card-body">
                    <ul>
                      <h5 className="card-title">{course.university}</h5>
                      <h5 className="card-title">Class Type: {course.gen_ed}</h5>
                      <h5 className="card-title">Average rating: {Math.round(course.average_rating * 100) / 100} stars</h5>
                      <h5 className="card-title">{course.num_reviews} reviews</h5>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4"/>
      <h4 className="container">Don't see the course you're looking for? </h4>
      <button className="btn btn-success btn-lg mt-2">
      <Link to="/addcourse" className="text-white">Click here to add it!</Link>
      </button>
    </div>
    );

    return (
      <Fragment>
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



//
