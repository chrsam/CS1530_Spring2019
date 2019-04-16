import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReview } from '../../actions/reviews';
import StarRatings from 'react-star-ratings';
import {Link, Redirect} from 'react-router-dom';
import ViewCourse from "../courses/ViewCourse";

export class NewReview extends Component {
    state = {
        numStars: 0,
        professor: '',
        reviewText: '',
        tags: []
    }

    tagOptions = [
        "easy",
        "hard",
        "homework heavy",
        "project heavy",
        "exam heavy",
        "lecture heavy",
        "interesting",
        "useful"
    ];


    addTag(tagOption) {
        if (this.state.tags.length < 3) {
            if (!this.state.tags.includes(tagOption)) {
                this.state.tags.push(tagOption);
            }
            this.forceUpdate();
        }
    }

    removeTag(tagOption) {
        var index = this.state.tags.indexOf(tagOption);
        if (index > -1) {
            this.state.tags.splice(index, 1);
        }
        this.forceUpdate();
    }

    static propTypes = {
        addReview: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    }

    onChange = event => this.setState({[event.target.name]: event.target.value});

    onSubmit = event => {
        event.preventDefault();
        const { numStars, professor, reviewText, tags } = this.state;
        const review = {
            rating: numStars,
            professor,
            review: reviewText,
            tags: tags.join(","),
            course: this.props.courseID
        };
        this.props.addReview(review)
        this.setState({
            numStars: 0,
            professor: '',
            reviewText: '',
            tags: ''
        })

        window.location.reload();
    }

    changeRating = newRating => {
        this.setState({
            numStars: newRating
        });
      }

  render() {
    const { reviewText, professor, tags } = this.state;
    const {isAuthenticated} = this.props.auth

    const authLinks = (
        <div className="card card-body mt-4 mb-4">
            <h2>Write a new review for {this.props.courseName}:</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>Rating:</h5>
                    <StarRatings rating={this.state.numStars} starRatedColor="" changeRating={this.changeRating} numberOfStars={5} name='numStars'/>
                </div>
                <div className="form-group">
                    <h5>Which professor did you have for this class?</h5>
                    <input type="text" className="form-control" name="professor" onChange={this.onChange} value={professor} style={{width: "40%"}}/>
                </div>
                <div className="form-group">
                    <h5>Tags (select up to 3):</h5>
                    {this.tagOptions.map(tagOption => {
                        if (!tags.includes(tagOption)) {
                            return (
                                <span className="btn btn-sm btn-outline-dark mr-1 ml-1" onClick={() => this.addTag(tagOption)}>{tagOption}</span>
                            );
                        }
                        else {
                            return (
                                <span className="btn btn-sm btn-dark mr-1 ml-1" onClick={() => this.removeTag(tagOption)}>{tagOption}</span>
                            );
                        }
                    })}
                </div>
                <div className="form-group">
                    <h5>Review:</h5>
                    <textarea className="form-control" type="text" name="reviewText" onChange={this.onChange} value={reviewText} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Submit Review</button>
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
