import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReview } from '../../actions/reviews';
import StarRatings from 'react-star-ratings';

export class NewReview extends Component {
    state = {
        numStars: 0,
        reviewText: ''
    }

    static propTypes = {
        addReview: PropTypes.func.isRequired
    }

    onChange = event => this.setState({[event.target.name]: event.target.value});

    onSubmit = event => {
        event.preventDefault();
        const { numStars, reviewText } = this.state;
        const review = {
            num_stars: numStars, 
            review_text: reviewText, 
            course_id: this.props.courseID
        };
        this.props.addReview(review)
        this.setState({
            numStars: 0,
            reviewText: ''
        })
    }

    changeRating = newRating => {
        this.setState({
            numStars: newRating
        });
      }

  render() {
    const { reviewText } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>New Review for course {this.props.courseName}:</h2>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Rating:</label>
                <StarRatings rating={this.state.numStars} starRatedColor="gold" changeRating={this.changeRating} numberOfStars={5} name='numStars'/>
            </div>
            <div className="form-group">
                <label>Review:</label>
                <textarea className="form-control" type="text" name="reviewText" onChange={this.onChange} value={reviewText} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addReview })(NewReview);