import React, {Component, Fragment} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { getReviewsByCourseID } from "../../actions/reviews";

export class ReviewList extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired,
    getReviewsByCourseID: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getReviewsByCourseID(this.props.courseID);
  }

  render () {
    return (
      <Fragment>
        <div className = "container ml-3 mr-3">
          <h2>Reviews</h2>
          {this.props.reviews.map(review => (
            <div className = "container ml-3 mr-3 mt-3 mb-3">
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-header">
                  <h3>
                    {[...Array(review.rating)].map((x, i) =><span>⭐</span>)}
                    from {review.author}
                  </h3>
                </div>
                <div className="card-body">
                  <ul>
                    <li>Professor: {review.professor}</li>
                    <li>{review.review}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  auth: state.auth
})

export default connect(mapStateToProps, { getReviewsByCourseID }) (ReviewList)

