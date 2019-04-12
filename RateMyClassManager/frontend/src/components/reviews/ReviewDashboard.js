import React, { Component } from 'react'

export class ReviewDashboard extends Component {
  render() {
    return (
      <div>
        <h3>Reviews for {this.props.courseName}:</h3>
        {/* TODO: query for reviews by course id */}
      </div>
    )
  }
}

export default ReviewDashboard

