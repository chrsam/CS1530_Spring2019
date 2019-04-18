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
    var gen_ed = "";
    var averageRating = -1;
    var tags = [];
    if (this.props.courses && this.props.courses[0] && this.props.courses[0][0]){ // null checks
      courseName = this.props.courses[0][0].name;
      courseCode = this.props.courses[0][0].class_code;
      university = this.props.courses[0][0].university;
      gen_ed = this.props.courses[0][0].gen_ed;
      averageRating = this.props.courses[0][0].average_rating;
      tags = this.props.courses[0][0].tags;
    }

    return (
      <div>
      <div className = "jumbotron">
        <h1 className="display-4">{courseCode}: {courseName}</h1>
        <h2>{university}</h2>
        <h4>Class type: {gen_ed}</h4>
        {averageRating ? (<h3 className="lead">Average user rating: {Math.round(averageRating * 100) / 100} stars</h3>) : (<h3 className="lead">No reviews yet</h3>)}
        {tags.length > 0 ? (<h3 className="lead">Tagged as: {tags.map(tag => (<span className="badge badge-success badge-pill mr-1 ml-1">{tag}</span>))}</h3>) : (<h3 className="lead">No tags yet</h3>)}
        <hr className="my-4"/>
        <NewReview courseID={this.state.courseID} courseName={courseName}></NewReview>

      </div>
      <ReviewList courseID={this.state.courseID} courseName={courseName}></ReviewList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses
})

export default connect(mapStateToProps, { getCourseByID }) (ViewCourse);
