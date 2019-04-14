import axios from 'axios';
import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEWS_BY_COURSE_ID } from './types';
import { tokenConfig } from './auth';

// GET REVIEWS BY COURSE ID
export const getReviewsByCourseID = (courseID) => (dispatch, getState) => {
    axios.get('/api/reviews?course_id=' + courseID, tokenConfig(getState))
        .then(response => {
            dispatch({
                type: GET_REVIEWS_BY_COURSE_ID,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

// ADD REVIEW
export const addReview = (review) => (dispatch, getState) => {
    axios.post("/api/reviews/", review, tokenConfig(getState))
        .then(response => {
            dispatch({
                type: ADD_REVIEW,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

// DELETE REVIEW
export const deleteReview = (id) => (dispatch, getState) => {
    axios.delete(`/api/courses/${id}/`)
        .then(response => {
            dispatch({
                type: DELETE_REVIEW,
                payload: id
            });
        })
        .catch(error => console.log(error));
} 