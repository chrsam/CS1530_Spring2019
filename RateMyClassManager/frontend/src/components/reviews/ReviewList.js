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
        <div className = "jumbotron bg-white">
          <h1 className="display-4">Reviews</h1>
          <hr className="my-4"/>
          {this.props.reviews.map(review => (
            <div className = "container ml-3 mr-3 mt-3 mb-3">
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-header">
                  <h3>
                    Review by: {review.author}
                  <div className = "float-right">
                    {[...Array(review.rating)].map((x, i) =><span className="mr-1 ml-1">⭐</span>)}
                  </div>
                  </h3>
                </div>
                <div className="card-body">
                  <h5>
                    {review.tag_list.map(tag => (<span className="badge badge-pill badge-success mr-1 ml-1">{tag}</span>))}
                  </h5>
                    <h5 className = "mt-2">Professor: {review.professor}</h5>
                    <h5 className = "mt-2">Review:</h5>
                    <h6 className="container mt-2">{review.review}</h6>
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
