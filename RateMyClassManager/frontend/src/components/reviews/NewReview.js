import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReview } from '../../actions/reviews';
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';

export class NewReview extends Component {
    state = {
        numStars: 0,
        professor: '',
        reviewText: ''
    }

    static propTypes = {
        addReview: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    }

    onChange = event => this.setState({[event.target.name]: event.target.value});

    onSubmit = event => {
        event.preventDefault();
        const { numStars, professor, reviewText } = this.state;
        const review = {
            num_stars: numStars,
            professor: professor,
            review_text: reviewText, 
            course_id: this.props.courseID
        };
        this.props.addReview(review)
        this.setState({
            numStars: 0,
            professor: '',
            reviewText: ''
        })
    }

    changeRating = newRating => {
        this.setState({
            numStars: newRating
        });
      }

  render() {
    const { reviewText, professor } = this.state;
    const {isAuthenticated} = this.props.auth

    const authLinks = (
        <div className="card card-body mt-4 mb-4">
            <h2>Write a review for {this.props.courseName}:</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Rating:</label>
                    <StarRatings rating={this.state.numStars} starRatedColor="gold" changeRating={this.changeRating} numberOfStars={5} name='numStars'/>
                </div>
                <div className="form-group">
                    <label>Which professor did you have for this class?</label>
                    <input type="text" className="form-control" name="professor" onChange={this.onChange} value={professor} style={{width: "40%"}}/>
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
      );

    const guestLinks = (
        <div className="card card-body mt-4 mb-4">
            <h2><Link to="/login">Login</Link> to write your own review of {this.props.courseName}</h2>
        </div>
      );

    return (
        <div>
        {isAuthenticated ? authLinks: guestLinks}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addReview })(NewReview);