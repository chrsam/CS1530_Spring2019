import axios from 'axios';
import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEWS_BY_COURSE_ID } from './types';

// GET REVIEWS BY COURSE ID
export const getReviewsByCourseID = (courseID) => dispatch => {
    console.log("getting reviews...");
    axios.get('/api/reviews?course_id=' + courseID)
        .then(response => {
            console.log("review action got response");
            console.log(response.data);
            dispatch({
                type: GET_REVIEWS_BY_COURSE_ID,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

// ADD REVIEW
export const addReview = (review) => dispatch => {
    axios.post("/api/reviews/", review)
        .then(response => {
            dispatch({
                type: ADD_REVIEW,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

// DELETE REVIEW
export const deleteReview = (id) => dispatch => {
    axios.delete(`/api/courses/${id}/`)
        .then(response => {
            dispatch({
                type: DELETE_REVIEW,
                payload: id
            });
        })
        .catch(error => console.log(error));
} 