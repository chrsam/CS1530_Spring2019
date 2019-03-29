import axios from 'axios';
import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEWS } from './types';

// GET REVIEWS
export const getReviews = () => dispatch => {
    axios.get('/api/reviews/')
        .then(response => {
            dispatch({
                type: GET_REVIEWS,
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