import React, { Component } from 'react';
import NewReview from "../reviews/NewReview";
import PropTypes from 'prop-types';
import ReviewDashboard from '../reviews/ReviewDashboard';

export class ViewCourse extends Component {


  render() {
    return (
      <div>
        <h1>Course name here</h1>
        <ReviewDashboard></ReviewDashboard>
        <NewReview></NewReview>
      </div>
    )
  }
}

export default ViewCourse;